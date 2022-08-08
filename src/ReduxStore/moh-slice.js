import { createSlice } from "@reduxjs/toolkit";

const mohSlice = createSlice({
    name:'moh',
    initialState:{
        nic:'',
        announcements:[]
    },
    reducers:{
        Announcement(){
            /*
                date,
                vaccine,
                venue,
                age group,
               no of dosage
            */
        },
        report(){
            // fromDate,
            // toDate,
            // District,
            // moh
        }
    }
})

export const mohAction = mohSlice.actions
export default mohSlice.reducer