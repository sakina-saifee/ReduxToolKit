import React, { useState } from 'react'
import userSlice, { deleteUsers, updateUser } from '../store/slices/userSlice'
import fakeUserData from '../api'
import { useDispatch } from 'react-redux';
import { addUser} from '../store/slices/userSlice';
import DisplayUsers from './DisplayUsers';

const UserDetails = () => {
    const dispatch = useDispatch();
    const [userinput, setuserinput] = useState("")
    const [userUpdateid, setuserUpdateid] = useState()
    const [ShowAddBtn, setShowAddBtn] = useState(true)

    // console.log("hellokkkk", userSlice.actions)
    const addNewUser = (data) => {
        console.log("users", data);
        dispatch(addUser(data));

    }

    const onChangeUsers = (event) => {
        setuserinput(event.target.value)
    }

    const deleteAllUsers=()=>{
        dispatch(deleteUsers())

    }
    const UpdateUser=(data)=>{
        console.log("new update", data)
        dispatch(updateUser({
            data, 
            id: userUpdateid,
        }))
    }

    return (


        <>

            <div className='user-details'>
                <h1>List of User Details</h1>

                <input placeholder='enter username' type="text" onChange={onChangeUsers} value={userinput} />
                {ShowAddBtn?  <button className='add-btn' onClick={() => { addNewUser(userinput); setuserinput(""); setShowAddBtn(true)}}> Add New User</button>:<button className='add-btn' onClick={() => { UpdateUser(userinput ); setuserinput(""); setShowAddBtn(true)}}> Update User</button>}
              

            </div>

            <div className='usersList'>

                <ul>
                    <DisplayUsers setuserInput={setuserinput}
                    setShowAddBtn={setShowAddBtn}
                    setuserUpdateid={setuserUpdateid}
                   
                    />
                </ul>

            </div>

            <div className='DeleteAllBtn'>
                <button onClick={()=>{deleteAllUsers()}}> Delete All Users</button>

            </div>


        </>

    )
}

export default UserDetails
