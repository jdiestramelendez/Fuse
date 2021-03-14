import React from 'react';

const ForgotPasswordConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: false
				},
				toolbar: {
					display: false
				},
				footer: {
					display: false
				},
				leftSidePanel: {
					display: false
				},
				rightSidePanel: {
					display: false
				}
			}
		}
	},
	routes: [
		{
			path: '/forgot-password',
			component: React.lazy(() => import('./ForgotPassword'))
		}
	]
};

export default ForgotPasswordConfig;
