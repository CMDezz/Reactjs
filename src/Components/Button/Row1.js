import React, { Component } from 'react';

class Row extends Component {
    render() {
        let Clicked=(value)=>{
            this.props.DataToDisplay(value);
        }
        return (
            <div className="calButtonr1 row text-center  text-dark">
            <a onClick={()=>Clicked(this.props.value)}  className="col-sm-3 btnCal" href="#"> {this.props.value}</a>
            <a onClick={()=>Clicked(this.props.value1)} className="col-sm-3 btnCal" href="#"> {this.props.value1}</a>
            <a onClick={()=>Clicked(this.props.value2)} className="col-sm-3 " href="#"> {this.props.value2}</a>
            <a onClick={()=>Clicked(this.props.value3)} className="col-sm-3 dacbiet btnCal" href="#"> {this.props.value3}</a>
            </div>
        );
    }
}

export default Row;
