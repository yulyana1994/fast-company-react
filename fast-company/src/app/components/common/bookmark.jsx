import React from "react";
import PropTypes from "prop-types";
const BookMark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-light" {...rest}>
      <i className={"bi bi-balloon-heart" + (status ? "-fill" : "")}></i>
    </button>
  );
};
BookMark.propTypes = {
  status: PropTypes.bool,
};

export default BookMark;
