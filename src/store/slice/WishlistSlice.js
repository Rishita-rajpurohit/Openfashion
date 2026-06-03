import { createSlice } from "@reduxjs/toolkit";

const wishlistslice = createSlice({
    name:"wishlist",
    initialState:{
        wishlist:[]
    },

    reducers:{
        addtowislist:(state, action)=>{
         
            const itemexist = state.wishlist.find(
                item => item.id === action.payload.id
            );
            if(itemexist){
                return;
            }
            else
            {
              state.wishlist.push(action.payload)
            }

        },
       
        removefromwishlist : (state, action)=>{
            state.wishlist = state.wishlist.filter(
                item=> item.id !== action.payload
            )
        }


    }

    






})

export const { removefromwishlist, addtowislist} = wishlistslice.actions;
export default wishlistslice.reducer 