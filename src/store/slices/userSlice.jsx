import { createSlice } from "@reduxjs/toolkit";


const userSlice= createSlice({
name: "userSlice",
initialState:[],
reducers:{
    addUser(state, action) {
        state.push(action.payload);  //add new user to the list of users in the store
    }, //micro reducer
    removeUser(state, action) {

        state.splice(action.payload, 1);

    },
    deleteUsers(state, action) {
        return state=[];
      
    },
    updateUser(state, action){
     
    console.log("slicee",action.payload.data)
    console.log("slicee id",action.payload.id)
    state.splice(action.payload.id, 1, action.payload.data); // (at index no, how many elements to replace, the actual data to be replaced)
    }

},
});



export default userSlice.reducer;
export const {addUser, removeUser, deleteUsers, updateUser}=userSlice.actions;