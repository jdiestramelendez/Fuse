import React from 'react';

const AccessLinkConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/access-link',
			component: React.lazy(() => import('./AccessLinkPage'))
		}
	]
};

export default AccessLinkConfig;





