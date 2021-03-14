import React from 'react';

const DocumentPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/documents',
			component: React.lazy(() => import('./DocumentPage'))
		}
	]
};

export default DocumentPageConfig;





