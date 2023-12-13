import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { loading, isAdmin } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="container mx-auto h-screen flex place-content-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to={"/"}></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
