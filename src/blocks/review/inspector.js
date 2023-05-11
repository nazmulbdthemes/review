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
	const { titleColor, descriptionColor, designationColor, boxBgColor } = attributes;
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
							name: 'bdt_advanced',
							title: __('Advanced', 'text-domain'),
							className: 'bdt-tab bdt-advanced',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'bdt_general') {
							return (
								<PanelBody
									title={__(
										'Column Settings',
										'bdt-review-blocks'
									)}
								>
									<ResRangleControl
										label={__(
											'Grid Columns',
											'bdt-review-blocks'
										)}
										controlName={GRID_COLUMNS}
										objAttrs={objAttrs}
										noUnits={false}
										min={1}
										max={4}
									/>
								</PanelBody>
							);
						} else if (tab.name === 'bdt_advanced') {
							return <div>Advanced</div>;
						}
					}}
				</TabPanel>
				<PanelBody
					title={__('Image Setting', 'bdt-review-blocks')}
					initialOpen={false}
				></PanelBody>
				<PanelBody
					title={__('Content Color', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<TabPanel
						className="bdt-tab-panel"
						activeClass="active-tab"
						initialTabName="bdt_review_normal"
						tabs={[
							{
								name: 'bdt_review_normal',
								title: __('Normal', 'bdt-review-blocks'),
								className: 'bdt-tab bdt-general',
							},
							{
								name: 'bdt_review_hover',
								title: __('Hover', 'bdt-review-blocks'),
								className: 'bdt-tab bdt-style',
							},
						]}
					>
						{(tab) => {
							if (tab.name === 'bdt_review_normal') {
								return (
									<PanelColorSettings
										title={__(
											'Color Settings',
											'bdt-review-blocks'
										)}
										initialOpen={false}
										colorSettings={[
											{
												value: titleColor,
												onChange: (value) =>
													setAttributes({
														titleColor: value,
													}),
												label: __(
													'Title Color',
													'bdt-review-blocks'
												),
											},
											{
												value: designationColor,
												onChange: (value) =>
													setAttributes({
														designationColor: value,
													}),
												label: __(
													'Designation Color',
													'bdt-review-blocks'
												),
											},
											{
												value: descriptionColor,
												onChange: (value) =>
													setAttributes({
														descriptionColor: value,
													}),
												label: __(
													'Description Color',
													'bdt-review-blocks'
												),
											},
										]}
									/>
								);
							} else if (tab.name === 'bdt_review_hover') {
								return (
									<PanelColorSettings
										title={__(
											'Color Settings',
											'bdt-review-blocks'
										)}
										initialOpen={false}
										colorSettings={[
											{
												value: titleColor,
												onChange: (value) =>
													setAttributes({
														titleColor: value,
													}),
												label: __(
													'Title Color',
													'bdt-review-blocks'
												),
											},
											{
												value: designationColor,
												onChange: (value) =>
													setAttributes({
														designationColor: value,
													}),
												label: __(
													'Designation Color',
													'bdt-review-blocks'
												),
											},
											{
												value: descriptionColor,
												onChange: (value) =>
													setAttributes({
														descriptionColor: value,
													}),
												label: __(
													'Description Color',
													'bdt-review-blocks'
												),
											},
										]}
									/>
								);
							}
						}}
					</TabPanel>
				</PanelBody>
				<PanelBody
					title={__('Item Box', 'bdt-review-blocks')}
					initialOpen={false}
				>
					<TabPanel
						className="bdt-tab-panel"
						activeClass="active-tab"
						initialTabName="bdt_review_normal"
						tabs={[
							{
								name: 'bdt_review_normal',
								title: __('Normal', 'bdt-review-blocks'),
								className: 'bdt-tab bdt-general',
							},
							{
								name: 'bdt_review_hover',
								title: __('Hover', 'bdt-review-blocks'),
								className: 'bdt-tab bdt-style',
							},
						]}
					>
						{(tab) => {
							if (tab.name === 'bdt_review_normal') {
								return (
									<PanelColorSettings
										title={__(
											'Color Settings',
											'bdt-review-blocks'
										)}
										initialOpen={false}
										colorSettings={[
											{
												value: boxBgColor,
												onChange: (value) =>
													setAttributes({
														boxBgColor: value,
													}),
												label: __(
													'background Color',
													'bdt-review-blocks'
												),
											}
										]}
									/>
								);
							} else if (tab.name === 'bdt_review_hover') {
								return (
									<PanelColorSettings
										title={__(
											'Color Settings',
											'bdt-review-blocks'
										)}
										initialOpen={false}
										colorSettings={[
											{
												value: boxBgColor,
												onChange: (value) =>
													setAttributes({
														boxBgColor: value,
													}),
												label: __(
													'Background Color',
													'bdt-review-blocks'
												),
											}
										]}
									/>
								);
							}
						}}
					</TabPanel>
				</PanelBody>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
