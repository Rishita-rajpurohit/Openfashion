import {Storage} from './index'
import {STORAGE_KEY} from '../keys/storageKeys'

export const Authstorage={

setToken: async(token)=>{
    await Storage.setItem(STORAGE_KEY.TOKEN, token)
},

getToken: async()=>{
   return  await Storage.getItem(STORAGE_KEY.TOKEN)
},

removeToken: async()=>{
    await Storage.removeItem(STORAGE_KEY.TOKEN)
}

}