import React from "react";
import GithubProfileCard from "./GithubProfileCard";
import GithubProfileDetails from "./GithubProfileDetails";

let GithubProfile = (props) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        {
                            Object.keys(props.profile).length !== 0 ?
                                <React.Fragment>
                                    <GithubProfileCard profile={props.profile} />
                                </React.Fragment>
                                : null
                        }

                    </div>
                    <div className="col-md-8">
                        {
                            Object.keys(props.profile).length !== 0 ?
                                <React.Fragment>
                                    <GithubProfileDetails profile={props.profile} />
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubProfile;