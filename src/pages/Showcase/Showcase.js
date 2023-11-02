import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './showcase.css'
import Tablee from '../../components/Table/Tablee'

const Showcase = () => {
  const [info, setInfo] = useState([]); // Initialize info as an empty array

  useEffect(() => {
    fetch("allstaffs")
      .then((res) => res.json())
      .then((data) => setInfo(data))
      .catch((error) => console.error('Error fetching data: ', error)); // Handle any fetch errors
  }, [info]);

  console.log(info);

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
            {info.map((staff, index) => (
              <Tablee key={index} staff={staff} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};


export default Showcase