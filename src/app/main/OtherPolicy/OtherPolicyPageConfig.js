import React from 'react';

const OtherPolicyPageConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/other-policy',
			component: React.lazy(() => import('./OtherPolicyPage'))
		}
	]
};

export default OtherPolicyPageConfig;





