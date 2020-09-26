import { RouteProps } from 'react-router-dom';

interface Route {
    component: 'HomePage' | 'Academics' | 'Finances' | 'Personal' | 'Admissions';
    routeProps: RouteProps;
    componentProps: object;
    linkIcon: string;
    linkName: string;
    subRoutes?: {
        component: string;
        routeProps: RouteProps;
        componentProps: object;
        linkIcon: string;
        linkName: string;
    }[];
};

export const basename = '/';
export const academicsPath = '/academics';
export const financesPath = '/finances';
export const personalPath = '/personal';
export const admissionsPath = '/admissions';

export const homePage: Route = {
    component: 'HomePage',
    routeProps: {
        path: basename,
        exact: true,
    },
    componentProps: {},
    linkIcon: 'home',
    linkName: 'Home'
};

export const academics: Route = {
    component: 'Academics',
    routeProps: {
        path: academicsPath,
    },
    componentProps: {},
    linkIcon: 'school',
    linkName: 'Academics',
    subRoutes: [
        {
            component: 'Planner',
            routeProps: {
                path: `${academicsPath}/planner`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Academic Planner',
        },
        {
            component: 'Requirements',
            routeProps: {
                path: `${academicsPath}/requirements`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Academic Requirements',
        },
        {
            component: 'Graduation',
            routeProps: {
                path: `${academicsPath}/graduation`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Apply for Graduation',
        },
        {
            component: 'Schedule',
            routeProps: {
                path: `${academicsPath}/schedule`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Class Schedule',
        },
        {
            component: 'History',
            routeProps: {
                path: `${academicsPath}/history`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Course History',
        },
        {
            component: 'Enrollment',
            routeProps: {
                path: `${academicsPath}/enrollment`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Enrollment',
        },
        {
            component: 'Transfer',
            routeProps: {
                path: `${academicsPath}/transfer`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Evaluate Transfer Credits',
        },
        {
            component: 'Exams',
            routeProps: {
                path: `${academicsPath}/exams`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Exam Schedule',
        },
        {
            component: 'Grades',
            routeProps: {
                path: `${academicsPath}/grades`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Grades',
        },
        {
            component: 'Scores',
            routeProps: {
                path: `${academicsPath}/scores`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Test Scores',
        },
        {
            component: 'Transcript',
            routeProps: {
                path: `${academicsPath}/transcript`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'View Transcript',
        },
        {
            component: 'Whatif',
            routeProps: {
                path: `${academicsPath}/whatif`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'What If Report',
        }
    ]
};

export const finances: Route = {
    component: 'Finances',
    routeProps: {
        path: financesPath,
    },
    componentProps: {},
    linkIcon: 'account_balance',
    linkName: 'Finances',
    subRoutes: [
        {
            component: 'AccountActivity',
            routeProps: {
                path: `${financesPath}/account_activity`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Account Activity',
        },
        {
            component: 'ChargesDue',
            routeProps: {
                path: `${financesPath}/charges_due`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Charges Due',
        },
        {
            component: 'PaymentPlan',
            routeProps: {
                path: `${financesPath}/payment_plan`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Enroll in Payment Plan',
        },
        {
            component: 'Payments',
            routeProps: {
                path: `${financesPath}/payments`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Payments',
        },
        {
            component: 'FinancialAid',
            routeProps: {
                path: `${financesPath}/financial_aid`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Pending Financial Aid',
        },
        {
            component: 'PurchaseItems',
            routeProps: {
                path: `${financesPath}/purchase_items`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Purchase Items',
        },
        {
            component: 'View1098T',
            routeProps: {
                path: `${financesPath}/view_1098-T`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'View 1098-T',
        }
    ]
};

export const personal: Route = {
    component: 'Personal',
    routeProps: {
        path: personalPath,
    },
    componentProps: {},
    linkIcon: 'account_box',
    linkName: 'Personal Information',
    subRoutes: [
        {
            component: 'Addresses',
            routeProps: {
                path: `${personalPath}/addresses`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Addresses',
        },
        {
            component: 'Emails',
            routeProps: {
                path: `${personalPath}/emails`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Email Adresses',
        },
        {
            component: 'Numbers',
            routeProps: {
                path: `${personalPath}/numbers`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Phone Numbers',
        },
        {
            component: 'PrivacySettings',
            routeProps: {
                path: `${personalPath}/privacy_settings`
            },
            componentProps: {},
            linkIcon: 'schedule',
            linkName: 'Privacy Settings',
        },
    ]
};

export const admissions: Route = {
    component: 'Admissions',
    routeProps: {
        path: '/admissions',
    },
    componentProps: {},
    linkIcon: 'description',
    linkName: 'Admissions'
};

export const routes: Route[] = [
    homePage,
    academics,
    finances,
    personal,
    admissions,
]