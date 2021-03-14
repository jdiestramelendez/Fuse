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
import MUIDataTable from "mui-datatables";
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

function ViewCustomer () {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [selectedTab, setSelectedTab] = useState(0);

	function handleTabChange(event, value) {
		setSelectedTab(value);
	}


	const columns = [
		{ name: "Name" },
		{
		  name: "Actions",
		  options: {
			customBodyRender: (value, tableMeta, updateValue) => {
			  return (
				<button type="button" className="btn btn-outline-success">View</button>
			  );
			},
			sorting:false
		  }
		}
	  ];
  
	  const data = [
		[
		  "Saqib",
		],
		[
		  "Danish",
		],
		[
		  "Mohsan",
	
		],
		[
		  "Ahsan",
	
		],
		[
		  "Faisal",
		
		],
		[
		  "Umer",
	
		]
	  ];
	  const options = {
		print:false,
		rowsPerPage: 5,
	  };

	return (
		<>
		<div className="row" animation="transition.expandIn" delay={300}>
			<div className="col-lg-12">
				<Card className={classes.Rootcard}>
					<CardContent>
					<Typography className="h2 pt-8" color="textPrimary">View Customer</Typography>
					</CardContent>
				</Card>
			</div>
	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-5">
			<img  src="assets/images/avatars/Velazquez.jpg" alt="logo" className="w-full" />
		</div>
		<div className="col-lg-6">
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">Name</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="Name"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">Age</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="Age"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">Policy Number</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="Policy Number"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">SSN</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="SSN"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">Contact</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="Contact"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
			<div className="row p-16">
				<div className="col-lg-4">
					<InputLabel htmlFor="my-input" className="text-black pt-8">Refferal Number</InputLabel>
				</div>
				<div className="col-lg-8">
					<TextField
						label="Refferal Number"
						id="outlined-size-small"
						defaultValue=""
						variant="outlined"
						size="small"
						className="w-full inputMarin"
					/>
				</div>
			</div>
		</div>

	</div>
	<div className="row w-98" style={{margin:'1%'}}>
		<div className="col-lg-12">
			<MUIDataTable
			title={
				<Typography variant="h5" className="p-0 m-0">
				Customer Documents
			
				</Typography>
			}
			data={data}
			columns={columns}
			options={options}
			
			options={{
			selectableRows: false,
			rowsPerPage: 10,
			}}
		/>
		</div>

	</div>







	</>
	);
}

export default ViewCustomer ;
