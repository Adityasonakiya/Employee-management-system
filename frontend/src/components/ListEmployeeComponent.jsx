import React, { useEffect, useState } from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees();
    }, [])

    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => {
        console.error(error);
    })

    function addNewEmployee() {
        navigator('add-employee');
    }

    function updateEmployee(id) {
        navigator(`edit-employee/${id}`)
    }
    
    function deleteEmpl(id) {
        deleteEmployee(id).then((response) => {
            listEmployees();
            console.log("Delete res: ",response);
        }).catch(error => {
            console.error(error);
        })
    }

    return (<>
        <h1>List Of Employees</h1>
        <button onClick={addNewEmployee}>Add Employee</button>
        <table>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email-Id</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button onClick={() => updateEmployee(employee.id)}>Update</button>
                            </td>
                            <td>
                                <button onClick={() => deleteEmpl(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
    )
}

export default ListEmployeeComponent