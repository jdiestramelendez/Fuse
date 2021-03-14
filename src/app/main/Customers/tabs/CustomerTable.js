import React, {Component} from "react";
import ReactDOM from "react-dom";
import MUIDataTable from "mui-datatables";
import Done from "@material-ui/icons/Done";
import Error from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'react-router-dom';

class CustomerTable extends Component {
  constructor(props) {
    super(props);
  
}
TableViewButton =()=>{
  console.log("View", this.props)
  this.props.history.push('/view-customers')
  
}


  render() {
    const columns = [
      
      { name: "Name" },
      { name: "Policy Number" },
      { name: "Age" },
    
      {
        name: "Actions",
        options: {
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <button type="button" onClick={this.TableViewButton} className="btn btn-outline-success">View</button>
            );
          },
          sorting:false
        }
      }
    ];

    const data = [
      [
        "Saqib",
        "kelaForecast",
        "28",
      
        ""
      ],
      [
        "Danish",
        "kelaForecast",
        "30",
      
      ],
      [
        "Mohsan",
        "InnerVision",
        "50",
     
        ""
      ],
      [
        "Ahsan",
        "InnerVision",
        "18",
        ""
      ],
      [
        "Faisal",
        "OncoKnowledge",
        "22",
        ""
      ],
      [
        "Umer",
        "OncoKnowledge",
        "19",
      ]
    ];

    const options = {
      print:false,
      rowsPerPage: 5,


    };

    return (
      <div className="w-98" style={{margin:'1%'}}>
      <MUIDataTable
            title={
              <Typography variant="h5" className="p-0 m-0">
                Customer List
            
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
    );
  }
}
export default withRouter(CustomerTable);

