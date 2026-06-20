import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './slice/WishlistSlice'
import addtocartReducer from './slice/AddtoCartSlice'
import AddressReducer from './slice/AddressSlice'

export const store = configureStore({
    reducer:{

        wishlist: wishlistReducer,
        addtocart: addtocartReducer,
        Address: AddressReducer
    }
})