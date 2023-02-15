import React from "react";

let GithubRepos = (props) => {
    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header h2 text-center">
                                Your Repositories
                            </div>
                            <div className="card-body">
                                <table className="table table-bordered text-center">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th className="h4">Repository Name</th>
                                            <th className="h4">Star Count</th>
                                            <th className="h4">Watcher Count</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {
                                            props.repos.length > 0 ?
                                                <React.Fragment>
                                                    {

                                                        props.repos.map((repo) => {
                                                            return (
                                                                <React.Fragment>
                                                                    <tr className='text-center'>
                                                                        <td className='h4 text-white'><a href={repo.html_url} target="_blank" rel="noreferrer"> <u> {repo.name}</u></a></td>
                                                                        <td className=' '><span className='badge badge-success h3'>{repo.stargazers_count} Stars</span> </td>
                                                                        <td className=' '><span className='badge badge-primary h3'>{repo.watchers_count} Watchers </span></td>
                                                                    </tr>

                                                                </React.Fragment>
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
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubRepos;