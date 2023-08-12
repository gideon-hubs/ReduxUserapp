import React from 'react'
import UserCard from './UserCard'

function Users(props) {

    return (
        <div className='d-flex flex-wrap'>
            {
                props.usersData.map((user,index)=>(
                    <UserCard user={user} key={index} deleteUser={props.deleteUser} index={index} editData={props.editData}/>
                ))
            }
        </div>
    )
}

export default Users