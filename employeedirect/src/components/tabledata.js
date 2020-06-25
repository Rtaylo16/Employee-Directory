import React from 'react';
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'

function Tabledata(){
  const {Edatas} = props;
  return (
  
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Employee#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    {Edatas.map(Edata => (
    <tr key={Edata.id}>
    <td>{Edata.Employeenum}</td>
    <td>{Edata.Frstname}</td>
    <td>{Edata.Lstname}</td>
    <td>{Edata.Email}</td>
    </tr>
    ))}
  </tbody>
</Table>
  );
};

export default function Tabledata(){
  return(
    <div>
      <Employeetable
      employeedata={[
        { id: 1, Employeenum:1, Frstname: 'Mark', Lstname: 'Smith', Email:'msmith@aol.com'},
        { id: 2, Employeenum:2, Frstname: 'Jacob', Lstname: 'Thornton', Email:'Jakobithort@yahoo.com'},
        { id: 3, Employeenum:3, Frstname: 'Tyler', Lstname: 'Wilk', Email:'TWilkz@gmail.com'},
        { id: 4, Employeenum:4, Frstname: 'Bronnie', Lstname: 'James', Email:'Bronzjae@gmail.com'},
        { id: 5, Employeenum:5, Frstname: 'Viry', Lstname: 'Blaque', Email:'Nojustice@gmail.com'},
        { id: 6, Employeenum: 6, Frstname: 'Moe', Lstname: 'Brown', Email:'June19th@gmail.com'},
        { id: 7, Employeenum: 7, Frstname: 'Santino', Lstname: 'Cruel', Email:'MandysJungle@aol.com'},
      ]}
      
      />
    </div>
  )
}