import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./createnew.css";

const Createnew = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams(formData)
    // Make a POST request to your API
    fetch('/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formBody,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from your API if needed
        alert("Staff Successfully created")
        navigate('/');
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
      });
  };

  return (
    <div className="create">
      <h1 className="p-5">Create a New Staff</h1>
      <Form action="/create" method="POST" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 Form" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstname"
          value={formData.firstname}
          onChange={handleChange} placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group className="mb-3 Form" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastname"
          value={formData.lastname}
          onChange={handleChange} placeholder="Enter Last Name" />
        </Form.Group>

        <Form.Group className="mb-3 Form" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  name="username"
          value={formData.username}
          onChange={handleChange} placeholder="Enter Username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Createnew;
