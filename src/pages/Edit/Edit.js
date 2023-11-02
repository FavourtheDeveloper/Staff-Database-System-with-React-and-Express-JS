import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import './edit.css'

const Edit = () => {
  const [edit, setEdit] = useState([]); // Initialize info as an empty array
  const { id } = useParams();
  useEffect(() => {
    fetch(`/edit/${id}`)
      .then((res) => res.json())
      .then((data) => setEdit(data))
      .catch((error) => console.error('Error fetching data: ', error)); // Handle any fetch errors
  }, []);
  return (
    <div className='edit'>
    <h1 className='p-5'>Edit Staff</h1>
    <Form>
  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" value={edit.firstname} placeholder="Enter First Name" />
  </Form.Group>

  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" value={edit.lastname} placeholder="Enter Last Name" />
  </Form.Group>

  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" value={edit.username} placeholder="Enter Username" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}

export default Edit