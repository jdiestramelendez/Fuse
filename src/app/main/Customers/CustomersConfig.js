import React from 'react';

const CustomersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/customers',
			component: React.lazy(() => import('./CustomerPage'))
		}
	]
};

export default CustomersConfig;





