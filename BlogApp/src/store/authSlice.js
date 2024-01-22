import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    status:false,
    userData:null
}

//to track the users authentication(login or not)
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.status=true;
            state.userData=action.payload.userData;
            //the data of logged in user will be stored
        },

        logout:(state) => {
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout} =authSlice.actions;
export default authSlice.reducer;