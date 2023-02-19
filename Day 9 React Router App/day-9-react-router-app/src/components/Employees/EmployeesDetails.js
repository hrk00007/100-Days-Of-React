import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

let EmployeesDetails = () => {
    // const { id } = useParams();
    let [employeeId, setEmployeesId] = useState((useParams().id))
    let [selectedEmployee, setSelectedEmployee] = useState({});

    useEffect(() => {
        Axios.get('https://gist.githubusercontent.com/hrk00007/d22d87776653bc2a8c57ccf1d8a1382f/raw/53a399f2faf4c0be0d551624c85a7cb93243ca2b/Contact-List.json')
            .then((response) => {
                let employees = response.data
                let singleEmployee = employees.find((employee) => {
                    return employee.login.uuid === employeeId;
                })
                setSelectedEmployee(singleEmployee);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <React.Fragment>
            <div className="container mt-5">
                {/* <h2>EmployeesDetails: {employeeId}</h2> */}
                {/* <h2>Employees: {JSON.stringify(selectedEmployee)}</h2> */}
                <div className="row">
                    <div className="col">
                        <h2>Employee Details</h2>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur qui doloribus id nemo illum deserunt. Commodi facere, repellat cupiditate fugit, porro in iure tenetur eveniet ipsa officiis accusamus, itaque ipsum.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(selectedEmployee).length > 0 ?
                                <React.Fragment>
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{selectedEmployee.name.title} {selectedEmployee.name.first} {selectedEmployee.name.last}</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">

                                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                                    <img src={selectedEmployee.picture.large} alt="" className="img-thumbnail" />
                                                </div>
                                                <div className="col-md-8">
                                                    <ul className="list-group">
                                                        <li className="list-group-item"><span className="font-weight-bold">Age: </span> {selectedEmployee.dob.age}</li>
                                                        <li className="list-group-item"><span className="font-weight-bold">Email:  </span>{selectedEmployee.email}</li>
                                                        <li className="list-group-item"><span className="font-weight-bold">Phone: </span>{selectedEmployee.phone}</li>
                                                        <li className="list-group-item"><span className="font-weight-bold">City: </span>{selectedEmployee.location.city}</li>
                                                        <li className="list-group-item"><span className="font-weight-bold">State: </span>{selectedEmployee.location.state}</li>
                                                        <li className="list-group-item"><span className="font-weight-bold">Country: </span>{selectedEmployee.location.country}</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button className="btn btn-deep-purple btn-sm"> <Link to="/employees" className="nav-link text-white font-weight-bolder">BACK</Link> </button>
                                        </div>
                                    </div>
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default EmployeesDetails;