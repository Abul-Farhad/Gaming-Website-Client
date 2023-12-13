import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((res) => {
        console.log(res);
        alert("Login Successfull!");
        location?.state ? navigate(location.state) : navigate("/");
      })
      .catch((err) => {
        alert("Invalid Login Credentials");
        console.log(err);
      });
  };

  return (
    <div className="text-white min-h-screen flex justify-center items-center">
      <div className="container mx-auto">
        <div className="mt-12 pb-12 space-y-12">
          <h3 className="text-3xl font-bold text-center">Login Here!</h3>
          <form
            onSubmit={handleLogin}
            className="card-body md:w-1/3 w-3/4 mx-auto bg-base-100 rounded-lg shadow-xl text-white"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
