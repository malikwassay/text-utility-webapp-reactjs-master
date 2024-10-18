import React from "react";
import PropTypes from 'prop-types'

export default function Alert(props) {

  const captialize = (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }


  return (
    props.alert && <div className="container my-3">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captialize(props.alert.type)}</strong>: {props.alert.message}
      </div>
    </div>
  );
}


Alert.propTypes = {
    alert: PropTypes.string.isRequired
};

Alert.defaultProps = {
    alert: "Default message" 
};


