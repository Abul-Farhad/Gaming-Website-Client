import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import Home from "./pages/Home/Home.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import AddGame from "./pages/AddGame/AddGame.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import UpdateGame from "./pages/UpdateGame/UpdateGame.jsx";
import AdminRoute from "./Routes/AdminRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: (
          <AdminRoute>
            <AddGame></AddGame>
          </AdminRoute>
        ),
      },
      {
        path: "/cart",
        element: (
          <PrivateRoute>
            <Cart></Cart>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:8000/gameapi/${params.id}`),
        element: <UpdateGame></UpdateGame>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
