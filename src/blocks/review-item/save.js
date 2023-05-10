import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { uniqueId, photo, clientComment, clientDesg, clientName, showRating, rating } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: `${uniqueId}`,
			})}
		>
			{photo && (
				<div className="bdt-image-wrap">
					<img
						src={photo.url}
						alt={photo.alt ? photo.alt : clientName}
					/>
				</div>
			)}
			<div className="bdt-content">
				{clientName && (
					<RichText.Content
						tagName="h4"
						className={'bdt-name'}
						value={clientName}
					/>
				)}
				{clientDesg && (
					<RichText.Content
						tagName="span"
						className={'bdt-designation'}
						value={clientDesg}
					/>
				)}
				{clientComment && (
					<RichText.Content
						tagName="p"
						className={'bdt-desc'}
						value={clientComment}
					/>
				)}
			</div>
			{
				<div className="bdt-review-icon">
					<div
						className="bdt-rating"
						data-rate-value={showRating && rating}
					></div>
				</div>
			}
			{/* <RichText.Content
				tagName="h2"
				value={title}
				className="bdt-title"
			/>
			<RichText.Content
				tagName="p"
				className="bdt-description"
				value={description}
			/> */}
		</div>
	);
}
