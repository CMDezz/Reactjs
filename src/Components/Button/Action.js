import React, { Component } from 'react';

class Row extends Component {
    render() {
        let Clicked=(value)=>{
            this.props.DataToDisplay(value);
        }
        let Deletee=()=>{
            this.props.Deletee();
        }
        let backSpace=()=>{
            this.props.backSpace();
        }
        let equal=()=>{
            this.props.showResult();
        }

        return (
            <div className="calButtonr1 row text-center  text-dark">
            <a onClick={()=>Clicked(this.props.value)} className="col-sm-3 btnCal "  href="#"> {this.props.value}</a>
            <a onClick={Deletee}  name="Delete" className="col-sm-3 btnCal" href="#"> {this.props.value1}</a>
            <a onClick ={backSpace}  name="backSpace"className="col-sm-3 btnCal" href="#"> {this.props.value2}</a>
            <a onClick = {equal} name="equal"className="col-sm-3 dacbiet btnCal" href="#"> {this.props.value3}</a>
            </div>
        );
    }
}

export default Row;
