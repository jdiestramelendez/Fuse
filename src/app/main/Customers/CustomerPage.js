import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import AboutTab from './tabs/AboutTab';
import PhotosVideosTab from './tabs/PhotosVideosTab';
import TimelineTab from './tabs/TimelineTab';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { AutoSizer } from 'react-virtualized';
import CustomerTable from './tabs/CustomerTable';
const useStyles = makeStyles({
	Rootcard: {
	  minWidth: 275,
	  margin:10,
	},
	title: {
	  fontSize: 14,
	},
	pos: {
	  marginBottom: 12,
	},
  });
 
const columns = [
	{ field: 'id', headerName: 'ID', width: 70 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{field: 'age',headerName: 'Age',type: 'number',width: 90,},
	{field: 'fullName', headerName: 'Full name',description: 'This column has a value getter and is not sortable.',
	sortable: false,
	width: 160,
	valueGetter: (params) =>
	`${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
	},
	{field: 'Action',headerName: 'Action',width: 140,},
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
function CustomerPage(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	} 
	function handleRedirect (){
		console.log("redirexrt")
		props.history.push('/add-customers')
	}
	return (
<FuseAnimate animation="transition.expandIn" delay={300}>
		<div className="row">
			<div className="col-lg-12">
				<Card className={classes.Rootcard}>
					<CardContent>
					<Typography className="h2 pt-8" color="textPrimary">Customers</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="col-lg-6"/>
				<div className="col-lg-2"/>
				<div className="col-lg-12 flex justify-end "style={{paddingRight:'3%'}}>
					<Button
						variant="contained"
						color="secondary"
						className="w-1\/4  mt-16"
						aria-label="LOG IN"
						value="legacy"
						onClick={handleRedirect}
						>
						Add Customer
					</Button>
				</div>
			<div className="col-lg-12 w-90">
				<CustomerTable/>
			</div>
			<div className="col-lg-8"/>
				<div className="col-lg-4 my-16 flex justify-center" style={{paddingLeft:'15%'}}>
					<Button style={{ width: '50%', }} variant="contained" color="primary">
						Cancel
					</Button>
				</div>
			</div>
			</FuseAnimate>
		);
	}

export default CustomerPage;
