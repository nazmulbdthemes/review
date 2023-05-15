/* eslint-disable no-console */
import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
const { Fragment, useEffect } = wp.element;

// editor style
import './editor.scss';

// import rater
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

/**
 * Internal dependencies
 */
import Inspector from './inspector';
import { softMinifyCssStrings } from '../../helper/softminify';

export default function Edit({ attributes, setAttributes, clientId }) {
	const {
		titleColor,
		descriptionColor,
		photo,
		clientComment,
		clientDesg,
		clientName,
		showRating,
		rating,
		designationColor
	} = attributes;

	

	

	/**
	 * Block All Styles
	 */
	


	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps()}
			>
				<div className="bdt-container">
					<div className="bdt-review-grid-wrap">
						<div className="bdt-item">
							{photo ? (
								<div className="bdt-image-wrap">
									<img
										className="bdt-img"
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
							<div className="bdt-content">
								<RichText
									tagName="h4"
									className={'bdt-name'}
									value={clientName}
									onChange={(value) =>
										setAttributes({ clientName: value })
									}
									placeholder={__(
										'Write client name',
										'bdt-review-blocks'
									)}
								/>
								<RichText
									tagName="span"
									className={'bdt-designation'}
									value={clientDesg}
									onChange={(value) =>
										setAttributes({ clientDesg: value })
									}
									placeholder={__(
										'Write your designation',
										'bdt-review-blocks'
									)}
								/>
								<RichText
									tagName="p"
									className={'bdt-desc'}
									value={clientComment}
									onChange={(value) =>
										setAttributes({ clientComment: value })
									}
									placeholder={__(
										'Write client comment',
										'bdt-review-blocks'
									)}
								/>
							</div>
							{showRating && (
								<div className="bdt-review-icon">
									<Rater
										total={5}
										rating={rating}
										interactive={false}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			
		</Fragment>
	);
}
