import FuseAnimate from '@fuse/core/FuseAnimate';
import FusePageSimple from '@fuse/core/FusePageSimple';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { AutoSizer } from 'react-virtualized';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
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

function AddCustomer() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}

	return (
		<>

		<div className="row" animation="transition.expandIn" delay={300}>
			<div className="col-lg-12">
				<Card className={classes.Rootcard}>
					<CardContent>
					<Typography className="h2 pt-8" color="textPrimary">Add New Customer</Typography>
					</CardContent>
				</Card>
			</div>
	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Name</InputLabel>
				<TextField
				label="Name"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Age</InputLabel>
				<TextField
				label="Age"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Contact</InputLabel>
				<TextField
				label="Contact"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Contact2</InputLabel>
				<TextField
				label="Contact2"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">SSN</InputLabel>
				<TextField
				label="SSN"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Policy Number</InputLabel>
				<TextField
				label="Policy Number"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Referal Number</InputLabel>
				<TextField
				label="Referal Number"
				id="outlined-size-small"
				defaultValue=""
				variant="outlined"
				size="small"
				className="w-75 inputMarin"
				/>
		</div>
		<div className="col-lg-6 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-30">Upload File</InputLabel>
			<Button
  			variant="contained"
  			component="label"
			color="primary"
			>
			Upload File
			<input
			type="file"
			hidden
			/>
		</Button>
		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-6 flex sm\:justify-between">	
		<InputLabel htmlFor="my-input" className="text-black pt-8">Upload Image</InputLabel>
		<Button
  			variant="contained"
  			component="label"
			className="mueButtonAliegnment"
			color="primary"
			>
			Upload Image
			<input
			type="file"
			hidden
			/>
		</Button>
		</div>
		<div className="col-lg-6 flex sm\:justify-between">	

		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-12 flex sm\:justify-between">	
			<InputLabel htmlFor="my-input" className="text-black pt-8 w-16">Address</InputLabel>
			<TextareaAutosize 
			aria-label="minimum height"
			className="w-full TextDescription" 
			rowsMin={12} 
			variant="outlined"
			 />
		</div>


	</div>
	<div className="row w-88" style={{margin:'1%'}}>
	<div className="col-lg-6"/>
			<div className="col-lg-2"/>
			<div className="col-lg-4 flex justify-end mb-16">
			<Button
			
				variant="contained"
				color="secondary"
				className="w-1\/4  mt-16"
				aria-label="LOG IN"
				value="legacy"

			>
				Save
			</Button>
			<Button
		
				variant="contained"
				color="primary"
				className="w-1\/4  mt-16 ml-16"
				aria-label="LOG IN"
				value="legacy"
			>
				Cancel
			</Button>

			</div>

	</div>




	</>
	);
}

export default AddCustomer;
