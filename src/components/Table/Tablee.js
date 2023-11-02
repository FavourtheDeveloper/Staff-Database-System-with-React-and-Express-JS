import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Tablee = ({staff}) => {
  const navigate = useNavigate();
  const deleteStaff = async() => {
    fetch(`delete/${staff._id}`)
    .then((response) => response.json())
    .then((data) => {
      alert("Staff Deleted Successfully");
      
        navigate('/create');
    })
  }
  return (
    <tr>
    <td>1</td>
    <td>{staff.firstname}</td>
    <td>{staff.lastname}</td>
    <td>{staff.username}</td>
    <td><Link to={`/edit/${staff._id}`}><Button>Edit</Button></Link></td>
    <td><Button onClick={deleteStaff}>Delete</Button></td>
  </tr>
  )
}

export default Tablee