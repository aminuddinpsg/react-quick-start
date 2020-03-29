import React from 'react';
import ReactDOM from 'react-dom';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {inputText : '',arrPlus : [], singleNum : 0}
    this.displayText = this.displayText.bind(this);
  }

  sumArray(val){
    return val.reduce((a,b) => a + b ,0);
  }
  minusArray(val){
    return val.reduce((a,b) => a - b ,0);
  }

  displayText(e){

    const {value} = e.target;
    let input = this.state.inputText;
    let addNum = this.state.arrPlus;
    let singNum = this.state.singleNum;

    let addInput = input + value;
    let addArr = '';

    if(value !="+"){
      singNum = parseInt(addInput);
    }

    if(value == "+"){
      addNum.push(singNum);
      addArr = '';
      singNum = 0;

    }  
    if(value == "="){
      addNum.push(singNum);
      singNum = 0;
      addInput = this.sumArray(addNum);
    }

    /*else if(value == "+" || value == "-"){
      input = input + ' ';
    }*/

    this.setState ({
      inputText : addInput,
      arrPlus : addNum,
      singleNum : singNum
    },() => {
      //console.log(this.state.inputText,this.state.arrPlus);
    });


  }
  
  render(){
      return(
        <div>
          <InputScreen val = {this.state.inputText}/>
          <Numbers getText ={this.displayText}/>
          <Operations getText ={this.displayText}/>
        </div>
      );
    }
  }

class Numbers extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="number">
        <Button name="1" getText={this.props.getText}/>
        <Button name="2" getText={this.props.getText}/>
        <Button name="3" getText={this.props.getText}/>
        <Button name="4" getText={this.props.getText}/>
        <Button name="5" getText={this.props.getText}/>
      </div>
    );
  }
}

const Operations = (props) => {
  return (
    <div className="Operation">
      <Button name="+" getText={props.getText}/>
      <Button name="-" getText={props.getText}/>
      <Button name="=" getText={props.getText}/>  
    </div>
  );
}

class InputScreen extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <input type="text" value={this.props.val}></input>
    );
  }

}

const Button = (props) => {
  return (
    <button type="button" onClick={props.getText} value={props.name}>{props.name}</button>
  );
}


ReactDOM.render(<Calculator/>, document.getElementById('root'));
