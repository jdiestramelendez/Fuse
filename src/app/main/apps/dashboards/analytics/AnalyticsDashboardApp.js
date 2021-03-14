import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from '@lodash';
import reducer from './store';
import { selectWidgetsEntities, getWidgets } from './store/widgetsSlice';
import Widget1 from './widgets/Widget1';
import Widget2 from './widgets/Widget2';
import Widget3 from './widgets/Widget3';
import Widget4 from './widgets/Widget4';
import Widget5 from './widgets/Widget5';
import Widget6 from './widgets/Widget6';
import Widget7 from './widgets/Widget7';
import Widget8 from './widgets/Widget8';
import Widget9 from './widgets/Widget9';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Tracking from './Tracking/Tracking'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 150 },
	{ field: 'lastName', headerName: 'Last name', width: 150 },
	{field: 'age',headerName: 'Age',type: 'number',width: 100,},
	{field: 'fullName', headerName: 'Full name',description: 'This column has a value getter and is not sortable.',
	  sortable: false,
	  width: 200,
	  valueGetter: (params) =>
		`${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
	},
	{field: 'Action',headerName: 'Action',width: 100,},
  ];
  
  const rows = [
	{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
	{ id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
	{ id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
	{ id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
	{ id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
	{ id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
	{ id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
	{ id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
	{ id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];


const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
	  },
	  heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	  },
	  accordionContent: {
		width: '100%',
	  },

	avatar: {
		width: 72,
		height: 72,
		position: 'absolute',
		top: 92,
		padding: 8,
		background: theme.palette.background.default,
		boxSizing: 'content-box',
		left: '50%',
		transform: 'translateX(-50%)',
		transition: theme.transitions.create('all', {
			duration: theme.transitions.duration.shortest,
			easing: theme.transitions.easing.easeInOut
		}),
		'& > img': {
			borderRadius: '50%'
		}
	},

}));

function AnalyticsDashboardApp() {
	const classes = useStyles();

	const dispatch = useDispatch();
	const widgets = useSelector(selectWidgetsEntities);
	console.log("widgets", widgets)

	useEffect(() => {
		dispatch(getWidgets());
		// console.log("Dispatch", dispatch)
	}, [dispatch]);

	if (_.isEmpty(widgets)) {
		return null;
	}
	return (
		<div className="w-full">
				<Card className="w-98" style={{margin:"1%"}}>
					<CardContent>
					<Typography className="h2" color="textPrimary">Dashboard</Typography>
					</CardContent>
				</Card>
				<div className="flex flex-col sm:flex sm:flex-row ">
				<Card className="w-full h-96" style={{margin:"1%"}}>
					{/* <CardContent className =""> */}
					<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					content_copy
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						My Policies
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
					{/* </CardContent> */}
				</Card>
				<Card className="w-full h-96" style={{margin:"1%"}}>
					{/* <CardContent className =""> */}
					<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					star
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						Certificates
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
					{/* </CardContent> */}
				</Card>
				<Card className="w-full h-96" style={{margin:"1%"}}>
					{/* <CardContent className =""> */}
					<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					insights
							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						Installments
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
					{/* </CardContent> */}
				</Card>
				<Card className="w-full h-96" style={{margin:"1%"}}>
					{/* <CardContent className =""> */}
					<div className="widget DashboardCards p-16">
					<Icon className="text-32 pt-8 h-40" color="action">
					monetization_on

							</Icon>
					<Typography className="h3 pt-16" color="textSecondary">
						Premiums
					</Typography>

					<div className="CircleDiv">
					<Typography className="h5" color="textSecondary">
						12
					</Typography>
					</div>
				</div>
					{/* </CardContent> */}
				</Card>
			
			
		
			
				</div>
				<Card className="w-98 h-256" style={{margin:"1%"}}>
				<Typography className="h2 p-16" color="textPrimary">Live Tracking</Typography>
				<Tracking/>
				</Card>
				
		

			<Widget1 data={widgets.widget1} />

			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="flex flex-col w-full sm:p-8 container">
					<div className="flex w-full flex-col min-w-0">
				

						<div className="flex w-full pb-32">
							<div className="widget flex w-full p-16">
							<Accordion className={classes.accordionContent}>
								<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls="panel1a-content"
								id="panel1a-header"
								>
								<Typography className={classes.heading}>My Policies</Typography>
								</AccordionSummary>
								<AccordionDetails>
						

								<div style={{ height: 320, width: '100%' }}>
								<DataGrid
								rows={rows} columns={columns} pageSize={10} />
								</div>
							
								</AccordionDetails>
							</Accordion>
							</div>
						</div>
					</div>
					<div className="flex w-full flex-col min-w-0">
				

				<div className="flex w-full pb-32">
					<div className="widget flex w-full p-16">
					<Accordion className={classes.accordionContent}>
						<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
						>
						<Typography className={classes.heading}>My Documents</Typography>	
						</AccordionSummary>
						<AccordionDetails>
				

						<div style={{ height: 320, width: '100%' }}>
						<DataGrid
						rows={rows} columns={columns} pageSize={10} />
						</div>
					
						</AccordionDetails>
					</Accordion>
					</div>
				</div>
			</div>


					{/* <div className="widget flex w-full sm:w-1/2 p-16">
								<Widget3 data={widgets.widget3} />
							</div> */}

					<div className="flex flex-wrap w-full md:w-320 pt-16">
						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									What are your top devices?
								</Typography>
							</FuseAnimate>

							<div className="widget w-full p-16">
								<Widget7 data={widgets.widget7} />
							</div>
						</div> */}

						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<div className="px-16 pb-8 text-18 font-300">How are your sales?</div>
							</FuseAnimate>

							<div className="widget w-full p-16">
								<Widget8 data={widgets.widget8} />
							</div>
						</div> */}

						{/* <div className="mb-32 w-full sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
									What are your top campaigns?
								</Typography>
							</FuseAnimate>
							<div className="widget w-full p-16">
								<Widget9 data={widgets.widget9} />
							</div>
						</div> */}
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default withReducer('analyticsDashboardApp', reducer)(AnalyticsDashboardApp);
