import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="/">React Hooks with Routing</a> */}
                <Link className="navbar-brand" to="/">React Hooks with Routing</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/home">Home</a> */}
                            <Link to="/home" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/employees">Employees</a> */}
                            <Link to="/employees" className='nav-link'>Employees</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/stocks">Stocks</a> */}
                            <Link to="/stocks" className='nav-link'>Stocks</Link>
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link " href="/about">About</a> */}
                            <Link to="/about" className='nav-link'>About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;