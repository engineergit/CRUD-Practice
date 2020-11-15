import React, {  useState } from "react";
// import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
// import { GlobalContext } from "./Context/GlobalContext";
// import  { v4 as uuid } from "uuid";
export const AddUser = () => {
  // const { id } = useParams;
  const [name, setName] = useState("");
  const navigate = useNavigate();
  // const { AddUser } = useContext(GlobalContext);
  const onSubmitAction = (e) => {
    e.preventDefault();
    // const newUser = {
    //   id: uuid(),
    //   name,
    // };
    // let a = AddUser(newUser);
    setName("");
    navigate("/");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <Form onSubmit={onSubmitAction}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            name="name"
            value={name}
            onChange={onChange}
            type="text"
            placeholder="Enter Name"
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </>
  );
};
