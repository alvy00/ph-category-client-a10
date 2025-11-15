import { createBrowserRouter, redirect } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../pages/Home";
import Bills from "../pages/Bills";
import MyBills from "../pages/MyBills";
import Profile from "../pages/Profile";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "bills", element: <Bills /> },
            { path: "mybills", element: <MyBills /> },
            { path: "profile", element: <Profile /> },
            {
                path: "auth",
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    { path: "register", element: <Register /> },
                ],
            },
        ],
    },
    { path: "login", loader: () => redirect("/auth/login") },
    { path: "register", loader: () => redirect("/auth/register") },
    { path: "*", element: <NotFound /> },
]);

export default router;
