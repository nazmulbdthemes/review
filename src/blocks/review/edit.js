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

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		uniqueId,
		blockStyle,
		title,
		titleColor,
		description,
		descriptionColor,
		designationColor,
		controlName,
		boxBgColor
	} = attributes;

	useEffect(() => {
		if (!uniqueId) {
			setAttributes({ uniqueId: `bdt-blocks-${clientId.slice(0, 8)}` });
		}
	}, []);

	const deskStyles = `
		.${uniqueId} .bdt-name {
			color: ${titleColor};
		}
		.${uniqueId} .bdt-designation {
			color: ${designationColor};
		}
		.${uniqueId} .bdt-desc {
			color: ${descriptionColor};
		}
		.${uniqueId} .bdt-item {
			background: ${boxBgColor};
		}
		.${uniqueId} .block-editor-block-list__layout {
			color: ${descriptionColor};
			grid-template-columns: repeat(${controlName}, 1fr);
		}
		console.log(controlName);
	`;
	const tabStyles = ``;
	const mobStyles = ``;

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
						renderAppender={() => (
							<InnerBlocks.ButtonBlockAppender />
						)}
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
