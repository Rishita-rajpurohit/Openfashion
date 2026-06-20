import {Storage} from './index'
import {STORAGE_KEY} from '../keys/storageKeys'

export const AddressStorage = {
    saveaddress: async address=>{
        await Storage.setItem(
            STORAGE_KEY.ADDRESS,
            address
        )
    },

    getaddress: async()=>{
return await Storage.getItem(
    STORAGE_KEY.ADDRESS
)
    },

    removeaddress: async()=>{
        await Storage.removeItem(
            STORAGE_KEY.ADDRESS
        )
    }
}