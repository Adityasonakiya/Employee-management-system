import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigator = useNavigate();
    const {id} = useParams();

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    useEffect(() => {
        if(id){
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    },[id])

    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        const employee = { firstName, lastName, email };
        console.log("Employee Data: ", employee);
        if (firstName=='' || lastName=='' || email=='') {
            return;
        }

        if(id){
            updateEmployee(id,employee).then((response) => {
                console.log("update response: ",response.data);
                navigator('/');
            }).catch(error => {
                console.error(error);
            })
        }else{
            createEmployee(employee).then((response) => {
                console.log("Add Response: ", response.data);
                navigator('/');
            }).catch(error => {
                console.error(error);
            })
        }

    }

    function pageTitle(){
        if(id){
            return <h1>Update Employee</h1>
        }else{
            return <h1>Add Employee</h1>
        }
    }

    return (
        <div>
            {
                pageTitle()
            }
            <form>
                <div>
                    <label>First Name:</label>
                    <input type='text'
                        name='firstName'
                        value={firstName}
                        placeholder='Enter First Name'
                        onChange={(e) => setFirstName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type='text'
                        name='lastName'
                        value={lastName}
                        placeholder='Enter Last Name'
                        onChange={(e) => setLastName(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email'
                        name='email'
                        value={email}
                        placeholder='Enter Email'
                        onChange={handleEmail}>
                    </input>
                </div>
                <button onClick={saveOrUpdateEmployee}>Save Employee</button>
                {
                    (firstName==''||lastName==''||email=='')?<h1>Fill all fields!</h1>:<></>
                }
            </form>
        </div>
    )
}

export default EmployeeComponent