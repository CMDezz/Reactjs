import React, { Component } from 'react';

class Row5 extends Component {
    render() {
        let Clicked=(value)=>{
            this.props.DataToDisplay(value);
        }
        return (
            <div className="calButtonr5 row text-center  text-dark">
            <a onClick={()=>Clicked(this.props.value)}className="col-sm-6 btnCal" href="#"> {this.props.value}</a>
            <a onClick={()=>Clicked(this.props.value1)}className="col-sm-3 btnCal" href="#">  {this.props.value1}</a>
            <a onClick={()=>Clicked(this.props.value2)}className="col-sm-3 btnCal  dacbiet" href="#">  {this.props.value2}</a>
          </div>
        );
    }
}

export default Row5;
