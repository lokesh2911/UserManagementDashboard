import { createSlice } from "@reduxjs/toolkit";
import userList from '../assets/Data'
const userSlice = createSlice({
    name: "users",
    initialState: userList , // Define initial state (empty array or any structure you need)
    reducers: {
        addUser:(state,action)=>{
             state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id,name,email}=action.payload;
            const updating=state.find(user=>user.id==id);
            if(updating){
                updating.name=name;
                updating.email=email;
            }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const deleting=state.find(user=>user.id==id);
            if(deleting){
                return  state.filter( f=> f.id !==id )
            }
        }
    },
});

export const {addUser,updateUser , deleteUser}=userSlice.actions;
export default userSlice.reducer;
