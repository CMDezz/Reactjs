import React, { Component } from 'react';
import './App.css'


//import Components
import Row1 from './Components/Button/Row1';
import Action from './Components/Button/Action';
import Row5 from './Components/Button/Row5';
class App extends Component {
  data = [["(", ")", "^", "!"],["7", "8", "9", "÷"], ["4", "5", "6", "x"], ["1", "2", "3", "-"]];
  constructor(props) {
    super(props)
    this.state = {
      result: "",
      Data: this.data,
    }
  }
  render() {

    let DisplayResult = (Data) => {
      this.setState({ result: this.state.result + Data })
    }
    let buttonCal = this.state.Data.map((dt, index) => {
      return (
        <Row1 DataToDisplay={DisplayResult} value={dt[0]} value1={dt[1]} value2={dt[2]} value3={dt[3]} key={index}></Row1>
      )
    })
    let AcButton = ()=>{
      this.setState({result:""})
    }
    let bsButton = ()=>{
      var newData = (this.state.result.slice(0,-1))
      this.setState({result:newData})
      
    }

    let rFact =(num)=>{
      if (num == 0){
        return 1  
      }
      else{
      return num*rFact(num-1)
      }
    }
    let showResult = ()=>{
      var newString = this.state.result
      var newResult
      if ((this.state.result).includes("!")){
        var calFac = newString.match(/\d+!/g)[0].split("!")[0]
        newString = (newString.replace(/\d+!/g,rFact(calFac)))
     }
      if ((this.state.result).includes("√")){
         newString = (newString.replace(/√/g,"Math.sqrt(")) + ')'
      }
      if ((this.state.result).includes("^")){
        var arrayString = newString.split('^') 
        if (arrayString[1][0]>9){
          alert("Số mũ quá lớn")
        }
        else{
        var calPow = eval(`Math.pow(${arrayString[0]},${arrayString[1][0]})`)
          newString = calPow + arrayString[1].slice(1)
        }
       
     }

      newString = newString.replace(/x/g,"*")
      newString = newString.replace(/÷/g,"/")
      try{
        newResult = eval(newString)
        this.setState({result:(newResult.toString())})
      }
      catch(err){
        if (err instanceof SyntaxError){
          alert("Sai cấu trúc")
        }
      }
      // console.log(newResult);
      
    }
    return (
      <div className="calculator bg-white">
        <div className="calDisplay w-100 text-dark text-right pr-5">
          <p className="showDisplay"  >{this.state.result} </p>
        </div>
        <div className="calButton">
          <Action showResult={showResult} backSpace={bsButton}  Deletee = {AcButton}  DataToDisplay={DisplayResult} value="√" value1="AC" value2="<=" value3="="></Action>
          {buttonCal}

          <Row5 DataToDisplay={DisplayResult} value="0" value1="." value2="+"></Row5>

        </div>
      </div>
    );
  }
}

export default App;
