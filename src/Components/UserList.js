import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, ListGroup, ListGroupItem } from 'reactstrap'
import { GlobalContext } from './Context/GlobalContext'
export const UserList = () => {
    const { users, removeUser } = useContext(GlobalContext)
    
    return (
        <ListGroup className="mt-4">
            {
            users.map(user => (

                    <ListGroupItem key={user.id} className="d-flex">
                        <strong>{user.name}</strong>
                        <div className="ml-auto" >
                            <Link className="btn btn-warning mr-1"  to={`/edit/${user.id}`}>Edit</Link>
                            <Button onClick={()=>{removeUser(user.id)}} color="danger">Delete</Button>
                        </div>
                    </ListGroupItem>
            ))
        }
        </ListGroup>
        // <div style={{display:'flex'}}>
        //     {
        //         users.map(user=>(
        //                 <div key={user.id}>

        //                     <strong>{user.name}</strong>
        //                     <Link to={`/edituser/${user.id}`}> 
        //                     <button>edit</button>
        //                      </Link>
        //                     <button >delete</button>
        //                 </div>

        //         )
        //         )
        //     }
        // </div>
    )
}
