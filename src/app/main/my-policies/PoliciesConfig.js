import React from 'react';

const PoliciesConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/my-policies',
			component: React.lazy(() => import('./PoliciesPage'))
		}
	]
};

export default PoliciesConfig;





