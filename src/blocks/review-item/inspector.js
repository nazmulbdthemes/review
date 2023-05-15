/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps, BlockControls, MediaUpload } from '@wordpress/block-editor';
import {
	 Card, CardHeader, CardBody, ToggleControl, RangeControl, TextControl, TextareaControl, PanelBody, ToolbarGroup, ToolbarButton, Button
} from '@wordpress/components';
const { Fragment } = wp.element;

const Inspector = ({ attributes, setAttributes }) => {
	const { showRating, rating, clientComment, clientName, clientDesg, photo, imgLabel } = attributes;

	return (
		<div className="bdt-inspector-controls">
			<InspectorControls>
				<PanelBody
					title={__('Content', 'bdt-review-blocks')}
					initialOpen={true}
				>
					<TextControl
						label={__('Reviewer Name', 'bdt-review-blocks')}
						value={clientName}
						onChange={(value) =>
							setAttributes({
								clientName: value,
							})
						}
					/>
					<TextControl
						label={__('Reviewer Designation', 'bdt-review-blocks')}
						value={clientDesg}
						onChange={(value) =>
							setAttributes({
								clientDesg: value,
							})
						}
					/>
					<TextareaControl
						label={__('Reviewer Comment', 'bdt-review-blocks')}
						value={clientComment}
						onChange={(value) =>
							setAttributes({
								clientComment: value,
							})
						}
					/>
					<p>{imgLabel}</p>
					{photo ? (
						<div className="bdt-image-wrap">
							<img
								src={photo.url}
								alt={photo.alt ? photo.alt : clientName}
							/>
						</div>
					) : (
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<Button
									onClick={open}
									variant="secondary"
									icon={'cloud-upload'}
								>
									Upload Client Image
								</Button>
							)}
						/>
					)}
				</PanelBody>
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
			<div {...useBlockProps()}>
				{photo ? (
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : clientName}
						/>
					</div>
				) : (
					<MediaUpload
						onSelect={(media) =>
							setAttributes({
								photo: media,
							})
						}
						allowedTypes={['image']}
						value={photo && photo.id}
						render={({ open }) => (
							<Button
								onClick={open}
								variant="secondary"
								icon={'cloud-upload'}
							>
								Upload Client Image
							</Button>
						)}
					/>
				)}
				<h2 className="bdt-name">{clientName}</h2>
				<span className="bdt-designation">{clientDesg}</span>
				<p className="bdt-desc">{clientComment}</p>
			</div>
		</div>
	);
};

export default Inspector;
