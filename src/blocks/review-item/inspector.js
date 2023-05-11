/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import {
	 Card, CardHeader, CardBody, ToggleControl, RangeControl
} from '@wordpress/components';
const { Fragment } = wp.element;

// Import Iconpicker
import IconPicker from '../../controls/icon-picker/iconpicker';
/**
 * Internal dependencies
 */
// import * as Constants from './constants';
// import * as Controls from '../../controls';

// const { ResRangleControl } = Controls;
// const { GRID_COLUMNS } = Constants;

// import objAttributes from './attributes';

const Inspector = ({ attributes, setAttributes }) => {
	const { showRating, rating, icon  } = attributes;
	// const objAttrs = { attributes, setAttributes, objAttributes };

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<Card>
					<CardHeader>
						<strong>
							{__('Client Rating', 'bdt-review-blocks')}
						</strong>
					</CardHeader>
					<CardBody>
						<ToggleControl
							label={__('Show Rating', 'bdt-review-blocks')}
							checked={showRating}
							onChange={() =>
								setAttributes({
									showRating: !showRating,
								})
							}
						/>
						{showRating && (
							<Fragment>
								<RangeControl
									label={__('Rating', 'bdt-review-blocks')}
									value={rating}
									onChange={(value) =>
										setAttributes({ rating: value })
									}
									min={1}
									max={5}
									step={0.1}
								/>
								<IconPicker
									label={__(
										'Select Icon',
										'bdt-review-blocks'
									)}
									selectedIcon={icon}
									changeIcon={(value) =>
										setAttributes({
											icon: value,
										})
									}
								/>
							</Fragment>
						)}
					</CardBody>
				</Card>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
