import React from "react";

const ValidationMsg = ({ isValid, errorMessage }) => {
  return (
    <>
      <small className={`${isValid ? 'valid-feedback':'invalid-feedback'}`}>
        <small className={`${!isValid && 'd-none'}`}>
        Done <i className="fas fa-check-circle"></i>
        </small>
        <small className={`${isValid && 'd-none'}`}>
          <i className="fas fa-exclamation-circle"></i> {errorMessage}
        </small>
      </small>
    </>
  );
};

export default ValidationMsg;
