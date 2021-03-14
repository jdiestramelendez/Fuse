import React from 'react';

const DocumentPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/certificate',
			component: React.lazy(() => import('./CertificatePage'))
		}
	]
};

export default DocumentPageConfig;





