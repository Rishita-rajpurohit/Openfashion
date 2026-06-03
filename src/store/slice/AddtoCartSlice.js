import { createSlice } from "@reduxjs/toolkit";

const AddtoCartSlice = createSlice({
    name:"addtocart",
    initialState:{
        addtocart:[]
    },
    reducers:{

    addintocart:(state,action)=>{

    const itemexist  = state.addtocart.find(
        item=> item.id === action.payload.id
    )

    if(!itemexist)
    {
        state.addtocart.push(action.payload)
    }

    },

    removeAnItem:(state,action)=>{
       state.addtocart =  state.addtocart.filter(
            item=> item.id !== action.payload
        )
    },

    removeAllItem:(state,action)=>{
        state.addtocart=[]
    },

    increaseqauntity:(state,action)=>{
        const itemexist = state.addtocart.find(
            item=> item.id === action.payload
        )
        if(itemexist && itemexist.quantity < itemexist.stockunit){
            itemexist.quantity++
        }
    },

    decreasequantity:(state,action)=>{
          const itemexist = state.addtocart.find(
            item=> item.id === action.payload
        )
        if(itemexist && itemexist.quantity >1){
            itemexist.quantity--
        }
    }
     







    }
});
 export const {
   addintocart,removeAnItem,removeAllItem,increaseqauntity,decreasequantity 
 } = AddtoCartSlice.actions

 export default AddtoCartSlice.reducer