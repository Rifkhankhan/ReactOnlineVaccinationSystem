import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name:'people',
    initialState:{
        details:{
            name:'',
            address:'',
            genter:'',
            nix:'',
            dob:'',
            vaccinationDetails:{
                status:0,
                date:'',
                vaccinationProduct:'',
                batchNumber:''
            }
        }
    },
    reducers:{
        smartVaccination(state,action){

            /*
                nic,
                name,
                age,
                email,
                document
            */
        },
        announcement(state,action){}

    },

})

export const peopleAction = peopleSlice.actions
export default peopleSlice.reducer