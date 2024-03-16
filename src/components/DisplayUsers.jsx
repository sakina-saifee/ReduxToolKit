import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { removeUser, updateUser } from '../store/slices/userSlice';
const DisplayUsers = (props) => {

    const dispatch=useDispatch();
   
    const [UpdateSelectedUser,setUpdateSelectedUser]=useState("")

    const data=useSelector((state)=>{
        return state.users
    })

    useEffect(() => {
    console.log("data", data);
       
      },[data]);

      const deleteUser=(id)=>{
        dispatch(removeUser(id))

      }

      const updation=(id)=>{
        console.log("edit", id);
        data.map((user, index)=>{
            if(index===id){
                props.setuserInput(user);
                props.setuserUpdateid(id);
            }

        })
 
        
        // dispatch(updateUser({
        //     id,
        //     name:  

        // }))

      }
    
  return (

    <>
    {data.map((user, id)=>{
        return  <>
        
        <div className='userRow'>
              
        <li key={id}>
            {user}
        </li>
        <div className='editIcons'>
        <FaPencilAlt className='pencil' onClick={()=>{updation(id);  props.setShowAddBtn(false)}} />  

        <FaTrash className='trash' onClick={()=>{deleteUser(id)}} />  
        </div>

  

        </div>
      
    
        </>
           
    })}
    
    </>
  
  )
}

export default DisplayUsers
