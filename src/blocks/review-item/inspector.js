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

const Inspector = ({ attributes, setAttributes }) => {
	const { showRating, rating, icon  } = attributes;

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
							</Fragment>
						)}
					</CardBody>
				</Card>
			</InspectorControls>
		</div>
	);
};

export default Inspector;
