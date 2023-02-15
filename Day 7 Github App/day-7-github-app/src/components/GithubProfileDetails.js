import React, { useState } from "react";

let GithubProfileDetails = (props) => {

    let [profile, setProfile] = useState(props.profile)

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                                <span className="badge badge-success mx-1">{props.profile.followers} followers</span>
                                <span className="badge badge-danger  mx-1"> {props.profile.public_repos} repos</span>
                                <span className="badge badge-primary mx-1"> {props.profile.public_gists} gists</span>
                                <span className="badge badge-secondary mx-1"> {props.profile.following} following</span>
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        <b> USERNAME:</b> {props.profile.login}
                                    </li>
                                    <li className="list-group-item">
                                        <b> LOCATION:</b> {props.profile.location}
                                    </li>
                                    <li className="list-group-item">
                                        <b> EMAIL:</b> {props.profile.email}
                                    </li>
                                    <li className="list-group-item">
                                        <b> COMPANY:</b> {props.profile.company}
                                    </li>
                                    <li className="list-group-item">
                                        <b> BLOG:</b> {props.profile.blog}
                                    </li>
                                    <li className="list-group-item">
                                        <b> MEMBER SINCE:</b> {props.profile.created_at}
                                    </li>
                                    <li className="list-group-item">
                                        <b> PROFILE-URL:</b> {props.profile.html_url}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubProfileDetails;