import React from "react";
import { useLocation } from "react-router-dom";

const NotFound = (props) => {
  const location = useLocation();

  return (
    <div>
      <h3>
        Sorry!
        <p>
          path <code>{location.pathname}</code> is not found.
        </p>
      </h3>
    </div>
  );
};
export default NotFound;
