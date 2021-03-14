import React from 'react';

const ViewCustomersConfig  = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/view-customers',
			component: React.lazy(() => import('./ViewCustomer '))
		}
	]
};

export default ViewCustomersConfig ;





