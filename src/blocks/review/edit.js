
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';
import './style.scss';
import * as Constants from './constants';
const { GRID_COLUMNS, GRID_GAP, ROW_GAP, NAME_FONT_SIZE, DESC_FONT_SIZE, DESG_FONT_SIZE, RATING_SIZE, IMAGE_SIZE, ITEM_PADDING, ITEM_BORDER_RADIUS } = Constants;
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		titleColor,
		titleHoverColor,
		descriptionColor,
		designationColor,
		descriptionHoverColor,
		designationHoverColor,
		boxBgColor,
		boxBgHoverColor,
		ratingColor,
		textAlign
	} = attributes;
	useEffect(() => {
		if (!uniqueId) {
			setAttributes({
				uniqueId: `bdt-review-blocks-${clientId.slice(0, 8)}`,
			});
		}
	}, []);

	const deskCols = attributes[`${GRID_COLUMNS}DeskRange`];
	const tabCols = attributes[`${GRID_COLUMNS}TabRange`];
	const mobCols = attributes[`${GRID_COLUMNS}MobRange`];
	// Grid Coloumn Gap
	const deskGap = attributes[`${GRID_GAP}DeskRange`];
	const tabGap = attributes[`${GRID_GAP}TabRange`];
	const mobGap = attributes[`${GRID_GAP}MobRange`];
	const gapUnit = attributes[`${GRID_GAP}Unit`];
	// Grid Row Gap
	const deskRowGap = attributes[`${ROW_GAP}DeskRange`];
	const tabRowGap = attributes[`${ROW_GAP}TabRange`];
	const mobRowGap = attributes[`${ROW_GAP}MobRange`];
	const gapRowUnit = attributes[`${ROW_GAP}Unit`];
	// Name Font Size
	const deskNameFont = attributes[`${NAME_FONT_SIZE}DeskRange`];
	const tabNameFont = attributes[`${NAME_FONT_SIZE}TabRange`];
	const mobNameFont = attributes[`${NAME_FONT_SIZE}MobRange`];
	const nameFontUnit = attributes[`${NAME_FONT_SIZE}Unit`];
	// DESG Font Size
	const deskDesgFont = attributes[`${DESG_FONT_SIZE}DeskRange`];
	const tabDesgFont = attributes[`${DESG_FONT_SIZE}TabRange`];
	const mobDesgFont = attributes[`${DESG_FONT_SIZE}MobRange`];
	const desgFontUnit = attributes[`${DESG_FONT_SIZE}Unit`];
	// DESC Font Size
	const deskDescFont = attributes[`${DESC_FONT_SIZE}DeskRange`];
	const tabDescFont = attributes[`${DESC_FONT_SIZE}TabRange`];
	const mobDescFont = attributes[`${DESC_FONT_SIZE}MobRange`];
	const descFontUnit = attributes[`${DESC_FONT_SIZE}Unit`];
	// Rating Size
	const deskRatingSize = attributes[`${RATING_SIZE}DeskRange`];
	const tabRatingSize = attributes[`${RATING_SIZE}TabRange`];
	const mobRatingSize = attributes[`${RATING_SIZE}MobRange`];
	const ratingUnit = attributes[`${RATING_SIZE}Unit`];
	// Image Size
	const deskImageSize = attributes[`${IMAGE_SIZE}DeskRange`];
	const tabImageSize = attributes[`${IMAGE_SIZE}TabRange`];
	const mobImageSize = attributes[`${IMAGE_SIZE}MobRange`];
	const imageUnit = attributes[`${IMAGE_SIZE}Unit`];
	// Item Padding
	const deskItemPadding = attributes[`${ITEM_PADDING}DeskRange`];
	const tabItemPadding = attributes[`${ITEM_PADDING}TabRange`];
	const mobItemPadding = attributes[`${ITEM_PADDING}MobRange`];
	const itemPaddingUnit = attributes[`${ITEM_PADDING}Unit`];
	// Item Border Radius
	const deskItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}DeskRange`];
	const tabItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}TabRange`];
	const mobItemBorderRadius = attributes[`${ITEM_BORDER_RADIUS}MobRange`];
	const itemBorderRadiusUnit = attributes[`${ITEM_BORDER_RADIUS}Unit`];

	const deskStyles = `

		.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${deskCols}, 1fr);
			grid-column-gap: ${deskGap}${gapUnit};
			grid-row-gap: ${deskRowGap}${gapRowUnit};
		}
		.${uniqueId} .bdt-item{
			padding: ${deskItemPadding}${itemPaddingUnit};
			border-radius: ${deskItemBorderRadius}${itemBorderRadiusUnit};
		}
		.${uniqueId} .bdt-image-wrap{
			width: ${deskImageSize}${imageUnit};
			height: ${deskImageSize}${imageUnit};
		}
		.${uniqueId} .bdt-content {
			text-align: ${textAlign};
		}
		.${uniqueId} .bdt-name {
			color: ${titleColor}!important;
			font-size: ${deskNameFont}${nameFontUnit}!important;
		}
		.${uniqueId} .bdt-designation {
			color: ${designationColor};
			font-size: ${deskDesgFont}${desgFontUnit}!important;
		}
		.${uniqueId} .bdt-desc {
			color: ${descriptionColor};
			font-size: ${deskDescFont}${descFontUnit}!important;
		}
		.${uniqueId} .bdt-item, 
		.${uniqueId} .wp-block-bdt-review-item  {
			background: ${boxBgColor};
		}
		.${uniqueId} .bdt-item:hover .bdt-name,
		.${uniqueId} .wp-block-bdt-review-item:hover .bdt-name {
			color: ${titleHoverColor};
		}
		.${uniqueId} .bdt-item:hover .bdt-designation,
		.${uniqueId} .wp-block-bdt-review-item:hover .bdt-designation {
			color: ${designationHoverColor};
		}
		.${uniqueId} .bdt-item:hover .bdt-desc,
		.${uniqueId} .wp-block-bdt-review-item:hover .bdt-desc {
			color: ${descriptionHoverColor};
		}
		.${uniqueId} .bdt-item:hover,
		.${uniqueId} .wp-block-bdt-review-item:hover {
			background: ${boxBgHoverColor};
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			color: ${ratingColor};
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			font-size: ${deskRatingSize}${ratingUnit}!important;
		}
	`;
	const tabStyles = `
		.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${tabCols}, 1fr);
			grid-column-gap: ${tabGap}${gapUnit};
			grid-row-gap: ${tabRowGap}${gapRowUnit};
		}
		.${uniqueId} .bdt-item{
			padding: ${tabItemPadding}${itemPaddingUnit};
			border-radius: ${tabItemBorderRadius}${itemBorderRadiusUnit};
		}
		.${uniqueId} .bdt-image-wrap{
			width: ${tabImageSize};
			height: ${tabImageSize};
		}
		.${uniqueId} .bdt-name {
			font-size: ${tabNameFont}${nameFontUnit}!important;
		}
		.${uniqueId} .bdt-designation {
			font-size: ${tabDesgFont}${desgFontUnit}!important;
		}
		.${uniqueId} .bdt-desc {
			font-size: ${tabDescFont}${descFontUnit}!important;
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			font-size: ${tabRatingSize}${ratingUnit}!important;
		}
	`;
	const mobStyles = `
		.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${mobCols}, 1fr);
			grid-column-gap: ${mobGap}${gapUnit};
			grid-row-gap: ${mobRowGap}${gapRowUnit};
		}
		.${uniqueId} .bdt-item{
			padding: ${mobItemPadding}${itemPaddingUnit};
			border-radius: ${mobItemBorderRadius}${itemBorderRadiusUnit};
		}
		.${uniqueId} .bdt-image-wrap{
			width: ${mobImageSize};
			height: ${mobImageSize};
		}
		.${uniqueId} .bdt-name {
			font-size: ${mobNameFont}${nameFontUnit}!important;
		}
		.${uniqueId} .bdt-designation {
			font-size: ${mobDesgFont}${desgFontUnit}!important;
		}
		.${uniqueId} .bdt-desc {
			font-size: ${mobDescFont}${descFontUnit}!important;
		}
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-disabled,
		.${uniqueId} .bdt-review-icon .react-rater-star.is-active-half::before {
			font-size: ${mobRatingSize}${ratingUnit}!important;
		}
	`;

	/**
	 * Block All Styles
	 */
	const blockStyleCss = `
		${deskStyles}
		@media (max-width: 1024px) and (min-width: 768px) {
			${tabStyles}
		}
		@media (max-width: 767px) {
			${mobStyles}
		}
	`;

	useEffect(() => {
		if (JSON.stringify(blockStyle) !== JSON.stringify(blockStyleCss)) {
			setAttributes({ blockStyle: blockStyleCss });
		}
	}, [attributes]);

	return (
		<Fragment>
			<style>{`${softMinifyCssStrings(blockStyleCss)}`}</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
				<InnerBlocks
					allowedBlocks={['bdt/review-item']}
					template={[
						['bdt/review-item'],
						['bdt/review-item'],
						['bdt/review-item'],
					]}
					renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
				/>
			</div>
		</Fragment>
	);
}
