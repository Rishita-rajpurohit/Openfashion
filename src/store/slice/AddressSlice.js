import { createSlice } from "@reduxjs/toolkit";

const AddressSlice = createSlice({
    name:"Address",
    initialState:{
        Address:[]
    },

    reducers:{
        SaveAddress:(state,action)=>{
            state.Address=action.payload
        },

        ClearAddress:(state,action)=>{
            state.Address=null
        }
        
    }
})

export const{
    SaveAddress,ClearAddress
}= AddressSlice.actions

export default AddressSlice.reducer

