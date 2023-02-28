import React, { useEffect } from "react";

let Alert = ({ type, msg, removeAlert, list }) => {
    useEffect(() => {
        let timeout = setTimeout(() => {
            removeAlert()
        }, 3000);
        return () => clearTimeout(timeout)
    }, [list])
    return (
        <React.Fragment>
            <h4 className={`alert alert-${type}`}>{msg}</h4>
        </React.Fragment>
    )
}
export default Alert;