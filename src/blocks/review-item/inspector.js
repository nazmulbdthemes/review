/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, PanelColorSettings, MediaUpload, BlockControls } from '@wordpress/block-editor';
import {
	PanelBody,
	ToolbarButton,
	ToolbarGroup,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import * as Constants from './constants';
import * as Controls from '../../controls';

const { ResRangleControl } = Controls;
const { GRID_COLUMNS } = Constants;

import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { titleColor, descriptionColor, photo } = attributes;
	const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
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
							value: descriptionColor,
							onChange: (value) =>
								setAttributes({ descriptionColor: value }),
							label: __('Description Color', 'bdt-blocks'),
						},
					]}
				/>
				{photo && (
					<BlockControls>
						<ToolbarGroup>
							<MediaUpload
								onSelect={(media) =>
									setAttributes({
										photo: media,
									})
								}
								allowedTypes={['image']}
								value={photo && photo.id}
								render={({ open }) => (
									<ToolbarButton
										onClick={open}
										label="Edit"
										icon="edit"
									></ToolbarButton>
								)}
							/>
						</ToolbarGroup>
					</BlockControls>
				)}
			</InspectorControls>
		</div>
	);
};

export default Inspector;
