import React from 'react';

const PolicyDetailPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/policy-detail',
			component: React.lazy(() => import('./PolicyDetailPage'))
		}
	]
};

export default PolicyDetailPageConfig;





