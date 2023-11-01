import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './edit.css'

const Edit = () => {
  return (
    <div className='edit'>
    <h1 className='p-5'>Edit Staff</h1>
    <Form>
  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" placeholder="Enter First Name" />
  </Form.Group>

  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Enter Last Name" />
  </Form.Group>

  <Form.Group className="mb-3 Form" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Enter Username" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
  )
}

export default Edit