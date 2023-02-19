import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
let Employees = () => {

    let [employees, setEmployees] = useState([])
    let [errorMsg, setErrorMsg] = useState()

    useEffect(() => {
        Axios.get('https://gist.githubusercontent.com/hrk00007/d22d87776653bc2a8c57ccf1d8a1382f/raw/53a399f2faf4c0be0d551624c85a7cb93243ca2b/Contact-List.json')
            .then((response) => {
                setEmployees(response.data)
            })
            .catch((error) => {
                setErrorMsg(error.errorMessage)
            })
    }, [])

    return (
        <React.Fragment>
            <div className="container-fluid mt-5">
                {/* <pre>{JSON.stringify(employees)}</pre> */}
                <div className="row">
                    <div className="col">
                        <table className="table table-dark">
                            <thead className="bg-primary">
                                <tr>
                                    <th>SNO</th>
                                    <th>USERNAME</th>
                                    <th>PROFILE</th>
                                    <th>NAME</th>
                                    <th>AGE</th>
                                    <th>EMAIL</th>
                                    <th>COUNTRY</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.length > 0 ?
                                        <React.Fragment>
                                            {
                                                employees.map((employee, index) => {
                                                    return (
                                                        <tr key={employee.login.uuid}>
                                                            <td>{index + 1}</td>
                                                            <td>{employee.login.uuid.substr(employee.login.uuid.length - 4)}</td>
                                                            <td> <img src={employee.picture.large} width="100px" height="100px" alt="" /> </td>
                                                            <td>
                                                                <Link to={`/employees/${employee.login.uuid}`}> <span className="text-primary"><u> {employee.name.first} {employee.name.last}</u></span></Link>
                                                            </td>
                                                            <td>{employee.dob.age}</td>
                                                            <td>{employee.email}</td>
                                                            <td>{employee.location.country}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </React.Fragment>
                                        : null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Employees;