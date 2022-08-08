import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name:'people',
    initialState:{
        personDetails:{
            name:'',
            address:'',
            genter:'',
            nic:'',
            dob:'',
            vaccinationDetails:{
                status:0,
                date:'',
                vaccinationProduct:'',
                batchNumber:''
            },
            requestSmartVaccination:[]
        }
    },
    reducers:{
        smartVaccination(state,action){
            console.log(action.payload);
        },
        announcement(state,action){}

    },

})

export const peopleAction = peopleSlice.actions
export default peopleSlice.reducer