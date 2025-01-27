import React, { useEffect, useState } from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }, [])

    function addNewEmployee() {
        navigator('add-employee');
    }

    function updateEmployee(id) {
        navigator(`edit-employee/${id}`)
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
                        </tr>
                    )
                }
            </tbody>
        </table>
    </>
    )
}

export default ListEmployeeComponent