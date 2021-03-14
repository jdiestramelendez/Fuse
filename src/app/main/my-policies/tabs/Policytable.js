import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { withRouter } from 'react-router-dom';
import { propTypes } from 'velocity-react/velocity-component';


const useStyles = makeStyles({
  root: {
    width: '98%',
    margin:"1%"
  },
  container: {
    maxHeight: 440,
  },
});

 function Policytable(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const policyTableButton =()=>{
    console.log("push")
  props.history.push('/policy-detail');
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'policies', label: 'Policies', minWidth: 170 },
    { id: 'carrier', label: 'Carrier', minWidth: 100 },
  
    {
      id: 'action',
      label: 'Action',
      minWidth: 170,
      align: 'right',
    },
  ];
  
  const value= <button type="button" onClick={policyTableButton} className="btn btn-outline-success">View</button>;
  console.log("button", value)
  function createData(policies, carrier,action) {
    // const density = population / size;
    return { policies, carrier, action };
  }
  
  const rows = [
    createData('India', 'IN', value),
    createData('China', 'CN',value),
    createData('Italy', 'IT',value),
    createData('United States', 'US',value),
  
  ];

  return (
    <Paper className={classes.root} animation="transition.expandIn" delay={300}>
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
  );
}
export default withRouter(Policytable);