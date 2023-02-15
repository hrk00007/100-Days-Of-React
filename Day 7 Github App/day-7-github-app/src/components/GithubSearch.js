import React, { useState } from 'react';

let GithubSearch = (props) => {
    let [username, setUsername] = useState('')
    let updateInput = (event) => {
        setUsername(event.target.value)
    }

    let sendData = (event) => {
        event.preventDefault();
        props.sendUsername(username)
    }
    return (
        <React.Fragment>
            <div className="container">
                {/* <pre>GithubSearch: username{JSON.stringify(username)}</pre> */}
                <div className="row">
                    <div className="col">
                        <div className="card ">
                            <div className="card-header aqua-gradient-rgba">
                                <h2>Github User Search</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={sendData}>
                                    <div className='form-group'>
                                        <input
                                            value={username}
                                            onChange={updateInput}
                                            type="search" className="form-control" placeholder='Search Github User' />
                                    </div>
                                    <div>
                                        <input type="submit" size="40" value="search" className='btn btn-secondary search-btn btn-sm' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default GithubSearch;