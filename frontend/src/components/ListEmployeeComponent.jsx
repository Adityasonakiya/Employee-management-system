import React from 'react'

const Dummydata = [
    {
        id:1,
        FirstName:"Aditya",
        LastName:"Sonakiya",
        email:"aditya@gmail.com"
    },
    {
        id:2,
        FirstName:"Ayush",
        LastName:"Sonakiya",
        email:"ayush@gmail.com"
    },
    {
        id:3,
        FirstName:"Ansh",
        LastName:"Sonakiya",
        email:"ansh@gmail.com"
    }
]

const ListEmployeeComponent = () => {
  return (<>
    <h1>List Of Employees</h1>
    <table>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email</th>
            </tr>
        </thead>
        <tbody>
            {
                Dummydata.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.FirstName}</td>
                        <td>{employee.LastName}</td>
                        <td>{employee.email}</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    </>
  )
}

export default ListEmployeeComponent