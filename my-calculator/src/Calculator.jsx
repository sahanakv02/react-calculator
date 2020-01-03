import React,{Component} from 'react';
import Display from './Display';
import Calculate from './Calculate';
import {Table} from 'reactstrap'

class Calculator extends Component{
	constructor(){
		super();
		this.state={
		numbe:"",
		fNumb:[]
	};
		this.calculate = this.calculate.bind(this);
		this.calculateKey = this.calculateKey.bind(this);
	}
	
	
	calculate(e){
			 let value = e.target.innerText;
			 if((value === '+' || value === '-' || value === '/' || value ==='*') && (this.state.fNumb.includes('+') || this.state.fNumb.includes('-') || this.state.fNumb.includes('/') || this.state.fNumb.includes('*')) && !(value === '=' || value === 'RESET' || value === 'DEL')){
				 let newVal = eval(this.state.numbe);
				 this.state.fNumb.length = 0;
				 this.state.fNumb.push(newVal);
				 this.state.fNumb.push(value);
				 this.setState({numbe:newVal.toString()+value});
			 }
			 else if(!(value === '=' || value === 'RESET' || value === 'DEL')){
				 this.state.fNumb.push(value);
				 let nLength = this.state.numbe.length;
				 if(nLength >1){
					 let lastDigit = this.state.numbe.substring(nLength-1,nLength);
					 if(!(/^[0-9]/.test(value)) && !(/^[0-9]/.test(lastDigit))){
						this.setState({numbe:this.state.numbe.substring(0,this.state.numbe.length-1)+value});
					 }
					 else{
						 this.setState({numbe:this.state.numbe+value});
					 }
				 }
				 else if(this.state.numbe === "" && !(/^[0-9]/.test(value))){
					 this.setState({numbe:"0"+value});
				 }
				 else{
					 this.setState({numbe:this.state.numbe+value});
				 }
				 
			 }
			 else if(value==='RESET'){
				 this.state.fNumb.push(value);
				 this.setState({numbe:""});
			 }
			 else if(value === 'DEL'){
				 this.state.fNumb.push(value);
				 let fLength = this.state.fNumb.length;
				 if(!(this.state.fNumb.lastIndexOf("=") === fLength-2 || this.state.fNumb[fLength-2] === "DEL"))
					this.setState({numbe:this.state.numbe.substring(0,this.state.numbe.length-1)});
			 }
			else {
				this.state.fNumb.push(value);
				 this.setState({numbe:eval(this.state.numbe)});
			}
			console.log(this.state.fNumb);
		
	}
	
	calculateKey(e){
		let val = e.keyCode;
		console.log(val);
	}
		
	render(){
		let number = this.state.numbe;
		if(number === ""){
			number = "0";
		}
		
		return(
		<div >
		<div className="container">
		<div className="row">
		<h1>{(number)}</h1>
		</div>
		</div>
		<div className="btn-group-toggle">
		<Table>
		<tbody className="table table-bordered">
		<tr>
		<th scope="col"><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)} onKeyPress = {(e) => this.calculateKey(e)}>1</button></div></th>
		<th scope="col"><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>2</button></div></th>
		<th scope="col"><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>3</button></div></th>
		<th scope="col"><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>+</button></div></th>
		</tr>
		<tr>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>4</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>5</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>6</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>-</button></div></td>
		</tr>
		<tr>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>7</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>8</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>9</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary" onClick={(e)=> this.calculate(e)}>*</button></div></td>
		</tr>
		<tr>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary " onClick={(e)=> this.calculate(e)}>=</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary " onClick={(e)=> this.calculate(e)}>.</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary " onClick={(e)=> this.calculate(e)}>0</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary " onClick={(e)=> this.calculate(e)}>/</button></div></td>
		</tr>
		<tr>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary d-flex p-2" onClick={(e)=> this.calculate(e)}>RESET</button></div></td>
		<td><div className="d-flex justify-content-center"><button className="btn btn-outline-primary d-flex p-2" onClick={(e)=> this.calculate(e)}>DEL</button></div></td>
		<td><div className="d-flex justify-content-center"></div></td>
		<td><div className="d-flex justify-content-center"></div></td>
		</tr>
		</tbody>
		</Table>
		</div>
		</div>
		);
	}
}
export default Calculator;