import React, { useEffect, useState } from "react";

let GithubProfileCard = (props) => {
    let [profile, setProfile] = useState(props.profile);


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card">
                    <div className="card-header">
                        <img src={props.profile.avatar_url} className='card-img' alt="" />
                    </div>
                    <div className="card-body">
                        <p className="h4">{props.profile.name}</p>
                        <p >{props.profile.bio}</p>
                        <a href={props.profile.html_url} className='btn btn-success btn-sm' target="_blank" rel="noreferrer">profile</a>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default GithubProfileCard;