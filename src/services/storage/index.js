import AsyncStorage from '@react-native-async-storage/async-storage';



export const Storage={

setItem: async(key, value)=>{
    try{
        await AsyncStorage.setItem(key, JSON.stringify(value))
    }
    catch(error)
    {
        console.log(error)
    }
},


getItem: async(key)=>{

const value = await AsyncStorage.getItem(key)

if(value !== null){
    try{
        return JSON.parse(value)
    }
    catch(error){
        console.log(error)
    }
}

},

removeItem: async(key)=>{
    try{
        await AsyncStorage.removeItem(key)
    }
    catch(error)
    {
        console.log("removeItem error:", error )
    }
}





}