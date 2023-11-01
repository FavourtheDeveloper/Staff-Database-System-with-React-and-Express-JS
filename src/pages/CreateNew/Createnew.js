import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './createnew.css';

const Createnew = () => {
  return (
    <div className='create'>
        <h1 className='p-5'>Create a New Staff</h1>
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

export default Createnew