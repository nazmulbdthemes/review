/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

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
const { GRID_COLUMNS } = Constants;
export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		titleHoverColor,
		description,
		descriptionColor,
		designationColor,
		descriptionHoverColor,
		designationHoverColor,
		controlName,
		boxBgColor,
		boxBgHoverColor,
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

	const deskStyles = `

	.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${deskCols}, 1fr);
		}
		.${uniqueId} .bdt-name {
			color: ${titleColor};
		}
		.${uniqueId} .bdt-designation {
			color: ${designationColor};
		}
		.${uniqueId} .bdt-desc {
			color: ${descriptionColor};
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
	`;
	const tabStyles = `
		.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${tabCols}, 1fr);
		}
	`;
	const mobStyles = `
		.${uniqueId} .block-editor-block-list__layout {
			grid-template-columns: repeat(${mobCols}, 1fr);
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
				{/* <RichText
					tagName="h2"
					className="bdt-title"
					value={title}
					onChange={(content) => setAttributes({ title: content })}
					placeholder={__('Write title…', 'bdt-blocks')}
				/>
				<RichText
					tagName="p"
					className="bdt-description"
					value={description}
					onChange={(content) =>
						setAttributes({ description: content })
					}
					placeholder={__('Write description…', 'bdt-blocks')}
				/> */}
			</div>
		</Fragment>
	);
}
