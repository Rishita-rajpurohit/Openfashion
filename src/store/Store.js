import { configureStore } from '@reduxjs/toolkit'
import wishlistReducer from './slice/WishlistSlice'
import addtocartReducer from './slice/AddtoCartSlice'

export const store = configureStore({
    reducer:{

        wishlist: wishlistReducer,
        addtocart: addtocartReducer
    }
})