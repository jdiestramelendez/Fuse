import FuseAnimate from '@fuse/core/FuseAnimate';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Policytable from './tabs/Policytable';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
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
function PolicyDetailPage(props) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;
	const [selectedTab, setSelectedTab] = useState(0);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const handleChangePage = (event, newPage) => {
	  setPage(newPage);
	};
	const handleChangeRowsPerPage = (event) => {
	  setRowsPerPage(+event.target.value);
	  setPage(0);
	};
	function handleTabChange(event, value) {
		setSelectedTab(value);
	}
	const columns = [
	{ id: 'name', label: 'Name', minWidth: 170 },
	{ id: 'age', label: 'Age', minWidth: 100 },
	{ id: 'nickname', label: 'Nick Name ', minWidth: 100 },
	{id: 'action',label: 'Employee',minWidth: 170,align: 'center',},
	];
	  const value= <button type="button" className="btn btn-outline-success">View</button>;
	  console.log("button", value)
	  function createData(name, age,nickname, action) {
		// const density = population / size;
		return { name, age,nickname, action };
	  }
	  const rows = [
		createData('India','20','IN', "Document-1"),
		createData('China','20', 'CN',"Document-2"),
		createData('Italy','20', 'IT',"Document-3"),
		createData('United States', 'US',"Document-4"),
	  ];
	return (
		<div className="row w-98" animation="transition.expandIn" delay={300} style={{marginLeft:'1%'}}>
			<div className="col-lg-12">
				<Card className="my-16">
					<CardContent>
					<Typography className="h2" color="textPrimary">Policy Detail Policies</Typography>
					</CardContent>
				</Card>
			</div>
			<div className="col-lg-12 ">
			<Paper animation="transition.expandIn" delay={300}>
			<Typography className="h2 p-16" color="textPrimary">Documents</Typography>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
						{columns.map((column) => (
							<TableCell
							key={column.id}
							align={column.align}
							style={{ minWidth: column.minWidth }}
							>
							{column.label}
							</TableCell>
						))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
						return (
							<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
							{columns.map((column) => {
								const value = row[column.id];
								console.log("tablevalue", value)
								return (
								<TableCell key={column.id} align={column.align}>
									{column.format && typeof value === 'number' ? column.format(value) : value}
								</TableCell>
								);
							})}
							</TableRow>
						);
						})}
					</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			<Paper className="mt-16" animation="transition.expandIn" delay={300}>
			<Typography className="h2 p-16" color="textPrimary">Installments</Typography>
				<TableContainer className={classes.container}>
					<Table stickyHeader aria-label="sticky table">
					<TableHead>
						<TableRow>
						{columns.map((column) => (
							<TableCell
							key={column.id}
							align={column.align}
							style={{ minWidth: column.minWidth }}
							>
							{column.label}
							</TableCell>
						))}
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
						return (
							<TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
							{columns.map((column) => {
								const value = row[column.id];
								console.log("tablevalue", value)
								return (
								<TableCell key={column.id} align={column.align}>
									{column.format && typeof value === 'number' ? column.format(value) : value}
								</TableCell>
								);
							})}
							</TableRow>
						);
						})}
					</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[5, 25, 100]}
					component="div"
					count={rows.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
			</div>
			<div className="col-lg-8">
			</div>
		

			<div className="col-lg-4 my-16 flex justify-center" style={{paddingLeft:'15%'}}>
				<Button style={{ width: '50%', }} variant="contained" color="primary">
       			 Cancel
     			</Button>
			</div>

	</div>
	
	);
}

export default PolicyDetailPage;
