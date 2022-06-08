import {INCREMENT,DECREMENT,ADD,SUBSTRACT,DIVIDE,MULTIPLY} from "./action.type";

export const reducer =(state,{type,payload})=>{
 switch(type){
   case INCREMENT:{
     state.number++;
     return {...state}
   }
   case DECREMENT:{
     state.number--;
     return {...state};
   }
   case ADD:{
    state.number=state.number+payload;
     return {...state};
   }
   case SUBSTRACT:{
    state.number= state.number-payload;
     return {...state};
   }
   case DIVIDE:{
    state.number= state.number/payload;
     return {...state};
   }
   case MULTIPLY:{
    state.number=   state.number*payload;
     return {...state}
   }
   default :{
     return state;
   }
 }
  
}