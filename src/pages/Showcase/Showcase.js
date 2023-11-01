import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import './showcase.css'

const Showcase = () => {
  return (
    <div className='showcase'>
      <div className="container">
       <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td><Link to={'/edit'}><Button>Edit</Button></Link></td>
          <td><Button>Delete</Button></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default Showcase