import React from 'react';

const AddCustomersConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/add-customers',
			component: React.lazy(() => import('./AddCustomer'))
		}
	]
};

export default AddCustomersConfig;





