

const attributes = {
	
	title: {
		type: 'string',
	},
	titleColor: {
		type: 'string',
	},
	description: {
		type: 'string',
	},
	descriptionColor: {
		type: 'string',
	},
	photo: {
		type: 'object',
	},
	clientName: {
		type: 'string',
		default: 'Asikur Rahman',
	},
	clientDesg: {
		type: 'string',
		default: 'Web Developer',
	},
	clientComment: {
		type: 'string',
		default:'Type here some info about this team member, the man very important person of our company.',
	},
	imgLabel: {
		type: 'string',
		default:'Image',
	},
	showRating: {
		type: 'boolean',
		default: true,
	},
	rating: {
		type: 'number',
		default: 4.5,
	},
};

export default attributes;
