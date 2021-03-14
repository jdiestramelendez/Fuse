import FuseUtils from '@fuse/utils';
import appsConfigs from 'app/main/apps/appsConfigs';
import authRoleExamplesConfigs from 'app/main/auth/authRoleExamplesConfigs';
import CallbackConfig from 'app/main/callback/CallbackConfig';
import DocumentationConfig from 'app/main/documentation/DocumentationConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import HomeConfig from 'app/main/home/HomeConfig';
import ForgotPasswordConfig from 'app/main/forgot-password/ForgotPasswordConfig'
import ProfilePageConfig from 'app/main/profile/ProfilePageConfig'
import PoliciesConfig from 'app/main/my-policies/PoliciesConfig'
import LogoutConfig from 'app/main/logout/LogoutConfig';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import RegisterConfig from 'app/main/register/RegisterConfig';
import DocumentPageConfig from 'app/main/Documents/DocumentPageConfig'
import CertificatePageConfig from 'app/main/Certificate/CertificartePageConfig'
import TrackingPageConfig from 'app/main/LiveTraking/TrackingPageConfig'
import OtherPolicyPageConfig from 'app/main/OtherPolicy/OtherPolicyPageConfig'
import CustomersConfig from 'app/main/Customers/CustomersConfig'
import AddCustomersConfig from 'app/main/Customers/AddCustomersConfig'
import ViewCustomersConfig from 'app/main/Customers/ViewCustomersConfig'
import AccessLinkConfig from 'app/main/AcessLink/AccessLinkConfig'
import ReviewPolicyConfig from 'app/main/ReviewPolicy/ReviewPolicyConfig'
import PolicyDetailPageConfig from 'app/main/my-policies/PolicyDetailPageConfig'

import UserInterfaceConfig from 'app/main/user-interface/UserInterfaceConfig';
import React from 'react';
import { Redirect } from 'react-router-dom';

const routeConfigs = [
	...appsConfigs,
	...pagesConfigs,
	...authRoleExamplesConfigs,
	UserInterfaceConfig,
	DocumentationConfig,
	LogoutConfig,
	LoginConfig,
	HomeConfig,
	DocumentPageConfig,
	TrackingPageConfig,
	OtherPolicyPageConfig,
	CertificatePageConfig,
	RegisterConfig,
	LogoutConfig,
	CallbackConfig,
	ForgotPasswordConfig,
	ProfilePageConfig,
	PoliciesConfig,
	CustomersConfig,
	AddCustomersConfig,
	ViewCustomersConfig,
	AccessLinkConfig,
	ReviewPolicyConfig,
	PolicyDetailPageConfig
]; 

const routes = [
	// if you want to make whole app auth protected by default change defaultAuth for example:
	// ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
	// The individual route configs which has auth option won't be overridden.
	...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
	{
		path: '/',
		exact: true,
		component: () => <Redirect to="/login" />
	},
	{
		component: () => <Redirect to="/pages/errors/error-404" />
	}
];

export default routes;
