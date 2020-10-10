import React,{useReducer} from 'react'
import './style.css'

const initialState={
    val:'',
    temp:0,
    oper:'',
    result:0,
    flag:true


    }
const reducer =(state,action)=>{
switch(action.type){
        case "1":
        return {...state,val:state.val+action.value}
        case "2":
        return {...state,val:state.val+action.value}
        case "3":
        return {...state,val:state.val+action.value}
        case "4":
        return {...state,val:state.val+action.value}
        case "5":
        return {...state,val:state.val+action.value}
        case "6":
        return {...state,val:state.val+action.value}
        case "7":
        return {...state,val:state.val+action.value}
        case "8":
        return {...state,val:state.val+action.value}
        case "9":
        return {...state,val:state.val+action.value}
        case "0":
        return {...state,val:state.val+action.value}
        case ".":
        return {...state,val:state.val+action.value}

        case "x":
            return {...state,temp:parseFloat(state.val),
                    val:'',
                    oper:action.value}
        case "+":
        return {...state,temp:parseFloat(state.val),val:'',oper:action.value}
        case "-":
        return {...state,temp:parseFloat(state.val),val:'',oper:action.value}
        case "/":
        return {...state,temp:parseFloat(state.val),val:'',oper:action.value}
        case "%":
       return {...state,temp:parseFloat(state.val),val:'',oper:action.value}
       case "=":
           switch(state.oper){
               case('*'):
               return{result:state.temp*parseFloat(state.val),flag:false}
               case('+'):
               return{result:state.temp+parseFloat(state.val),flag:false}
               case('-'):
               return{result:state.temp-parseFloat(state.val),flag:false}
               case('/'):
               return{result:state.temp/parseFloat(state.val),flag:false}
               case('%'):
               return{result:state.temp%parseFloat(state.val),flag:false}
           }

        case "AC":
            return initialState
            default:
                return state
}
}

function ParentComp() {

const[value,dispatch]=useReducer(reducer,initialState)
let num1=value.temp
let operation=value.oper
let num2=value.val
console.log(num1,operation,num2)



    return (
        <div className='container'>
        
       <div className='row'>
      {value.flag? <h2 className='result'>{value.val}</h2>: <h2 className='result'>{value.result}</h2>}
       
       <div className='row'>
            <button className='reset' onClick={()=>dispatch({ type:'AC'})}>AC</button>
            <button onClick={()=>dispatch({ type:'%',value:'%'})}>%</button>
            <button className='oper' onClick={()=>dispatch({ type:'9'})}> # </button>
            
            </div>
       
       </div>
     <div className='row'>
            <button onClick={()=>dispatch({ type:'1',value:1})}>1</button>
            <button onClick={()=>dispatch({ type:'2',value:2})}>2</button>
            <button onClick={()=>dispatch({ type:'3',value:3})}>3</button>
            <button className='oper' onClick={()=>dispatch({type:'+',value:'+'})} >+</button>
            </div>
            <div className='row'>
            <button onClick={()=>dispatch({ type:'4',value:4})}>4</button>
            <button onClick={()=>dispatch({ type:'5',value:5})}>5</button>
    
            <button onClick={()=>dispatch({ type:'6',value:6})}>6</button>
            <button className='oper' onClick={()=>dispatch({type:'-',value:'-'})}>-</button>
            
            </div>
            <div className='row'>
            <button onClick={()=>dispatch({ type:'7',value:7})}>7</button>
            <button onClick={()=>dispatch({ type:'8',value:8})}>8</button>
            <button onClick={()=>dispatch({ type:'9',value:9})}>9</button>
            <button className='oper' onClick={()=>dispatch({type:'/',value:'/'})}>/</button>
            </div>
            <div className='row'>
            <button onClick={()=>dispatch({ type:'.',value:'.'})}>.</button>
            <button onClick={()=>dispatch({ type:'0',value:0})}>0</button>
            <button onClick={()=>{dispatch({type:'='})}}>=</button>
            <button className='oper' onClick={()=>dispatch({type:'x',value:'*'})}>X</button>
            </div>
            </div>
    
    )
}

export default ParentComp
