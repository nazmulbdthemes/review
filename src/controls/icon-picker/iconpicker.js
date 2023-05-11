// Import Icon
import { Dashicon } from '@wordpress/components';
import icons from '../icon-picker/options/icons';
import './iconpicker.scss';
import { useState } from '@wordpress/element';

const IconPicker = ({ label, selectedIcon, changeIcon }) => {
	const [showIcons, setShowIcons] = useState(false);
	return (
		<div className="bwd-icon-picker">
			<p className="bwd-label">{label}</p>
			<button
				className="bwd-icon-header"
				onClick={() => setShowIcons(true)}
			>
				<span className="bwd-selected-icon">{icons[selectedIcon]}</span>
				<span className="bwd-open-icon">
					<Dashicon icon={showIcons ? 'minus' : 'plus'} />
				</span>
			</button>
			{showIcons && (
				<div className="icon-list">
					{Object.keys(icons).map((icon, index) => {
						return (
							<button
								className={`icon ${
									icon === selectedIcon ? 'active-icon' : ''
								}`}
								key={index}
								onClick={() => {
									changeIcon(icon);
									setShowIcons(false);
								}}
							>
								{icons[icon]}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export default IconPicker;
