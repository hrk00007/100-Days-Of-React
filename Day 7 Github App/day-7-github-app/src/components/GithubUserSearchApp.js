import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import GithubSearch from './GithubSearch';
import Axios from 'axios';
import { clientID, clientSecret } from './githubCredentials'
import GithubProfile from './GithubProfile';
import GithubRepos from './GithubRepos';

let GithubUserSearchApp = () => {

    let [username, setUsername] = useState('');
    let [profile, setProfile] = useState({});
    let [repos, setRepos] = useState([]);


    let receiveUsername = (user) => {
        setUsername(user);
        getProfile(user);
        getRepos(user);
    }

    let getProfile = (user) => {
        Axios.get(`https://api.github.com/users/${user}?clientId=${clientID}&clientSecret=${clientSecret}`)
            .then((response) => {
                setProfile(response.data)
            })
            .catch((error) => {
                console.error(error.errorMessage)
            })
    }

    let getRepos = (user) => {
        Axios.get(`https://api.github.com/users/${user}/repos?clientId=${clientID}&clientSecret=${clientSecret}`)
            .then((response) => {
                setRepos(response.data)
            })
            .catch((error) => {
                console.error(error.errorMessage)
            })
    }


    return (
        <React.Fragment>
            <div className="container">
                {/* <pre>GithubUserSearchApp: username{JSON.stringify(username)}</pre> */}
                {/* <pre>Profile: {JSON.stringify(profile)}</pre> */}
                {/* <pre>Repos: {JSON.stringify(repos)}</pre> */}
                <div className="row">
                    <div className="col">
                        <GithubSearch sendUsername={receiveUsername} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            Object.keys(profile).length !== 0 ?
                                <React.Fragment>
                                    <GithubProfile profile={profile} />
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {
                            repos.length > 0 ?
                                <React.Fragment>
                                    <GithubRepos repos={repos} />
                                </React.Fragment>
                                : null
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GithubUserSearchApp;