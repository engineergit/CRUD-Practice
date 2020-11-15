import React,{useContext, useEffect, useState} from 'react'
import {Form,FormGroup,Input,Label,Button} from 'reactstrap'
import { Link,useNavigate,useParams } from 'react-router-dom'
import { GlobalContext } from './Context/GlobalContext'
export const EditUser = () => {
    let {id} = useParams()
    const {users,UpdateUser} = useContext(GlobalContext)
    let [name,setName] = useState("")
  const navigate = useNavigate();

    useEffect(() => {
        let searchUser = users.find((user)=> user.id === id);
        let userName = searchUser.name;
        setName(userName)
    },[users,id])
    const handleSubmit = (e) =>{
        e.preventDefault()
        let updateUserIndex = users.findIndex((user)=> user.id === id);
        let updatedUsers = users;
        updatedUsers[updateUserIndex].name = name;
        let editedUsers = updatedUsers;
        UpdateUser(editedUsers);
        navigate("/")
    }
    return (
        <Form onSubmit={(e)=> handleSubmit(e)}>
        <FormGroup>
            <Label className='.center-block	'>Name</Label><Input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Name"></Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">cancel</Link>
    </Form>
    )
}
