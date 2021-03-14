import React from 'react';

const ReviewPolicyConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/review-policy',
			component: React.lazy(() => import('./ReviewPolicy'))
		}
	]
};

export default ReviewPolicyConfig;





