/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings } from '@wordpress/block-editor';
import { PanelBody, TabPanel, CardDivider } from '@wordpress/components';
const { Fragment } = wp.element;

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';
import './editor.scss';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { titleColor, descriptionColor, designationColor } = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<TabPanel
					className="bdt-tab-panel"
					activeClass="active-tab"
					initialTabName="bdt_general"
					tabs={[
						{
							name: 'bdt_general',
							title: __('Generral', 'text-domain'),
							className: 'bdt-tab bdt-general',
						},
						{
							name: 'bdt_style',
							title: __('Style', 'text-domain'),
							className: 'bdt-tab bdt-style',
						},
						{
							name: 'bdt_advanced',
							title: __('Advanced', 'text-domain'),
							className: 'bdt-tab bdt-advanced',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'bdt_general') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}></PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'bdt_style') {
							return <div>Style</div>;
						} else if (tab.name === 'bdt_advanced') {
							return (
								<Fragment>
									<TextControl
										label="Additional CSS Class"
										value={customClasses}
										onChange={(value) =>
											setAttributes({
												customClasses: value,
											})
										}
										help={__(
											'Please write multiple custom classes using space',
											'clr'
										)}
									/>
								</Fragment>
							);
						}
					}}
				</TabPanel>
				<PanelBody title={__('Column Settings', 'bdt-blocks')}>
					<ResRangleControl
						label={__('Grid Columns', 'bdt-blocks')}
						controlName={GRID_COLUMNS}
						objAttrs={objAttrs}
						noUnits={false}
						min={1}
						max={4}
					/>
				</PanelBody>
				<PanelColorSettings
					title={__('Color Settings', 'bdt-blocks')}
					initialOpen={false}
					colorSettings={[
						{
							value: titleColor,
							onChange: (value) =>
								setAttributes({ titleColor: value }),
							label: __('Title Color', 'bdt-blocks'),
						},
						{
							value: designationColor,
							onChange: (value) =>
								setAttributes({ designationColor: value }),
							label: __('Designation Color', 'bdt-blocks'),
						},
						{
							value: descriptionColor,
							onChange: (value) =>
								setAttributes({ descriptionColor: value }),
							label: __('Description Color', 'bdt-blocks'),
						},
					]}
				/>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
