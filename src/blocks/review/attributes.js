import * as constants from './constants';
import * as generators from '../../generators';

const { generateResRangleControlAttributes } = generators;

const { GRID_COLUMNS } = constants;

const attributes = {
	uniqueId: {
		type: 'string',
	},
	blockStyle: {
		type: 'object',
	},
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	titleHoverColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	designationColor: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	boxBgColor: {
		type: 'string',
	},
	designationHoverColor: {
		type: 'string',
	},
	descriptionHoverColor: {
		type: 'string',
	},
	boxBgHoverColor: {
		type: 'string',
	},
	// colors: {
	// 	type: 'object',
	// 	default: {
	// 		normal: {
	// 			titleColor: '',
	// 			designationColor: '',
	// 			descriptionColor: '',
	// 			boxBgColor: ''
	// 		},
	// 		hover: {
	// 			titleColor: '',
	// 			designationColor: '',
	// 			descriptionColor: '',
	// 			boxBgColor: ''
	// 		},
	// 	},
	// },
	...generateResRangleControlAttributes({
		controlName: GRID_COLUMNS,
		defaults: {
			[`${GRID_COLUMNS}DeskRange`]: 3,
			[`${GRID_COLUMNS}TabRange`]: 2,
			[`${GRID_COLUMNS}MobRange`]: 1,
		},
	}),
};

export default attributes;
