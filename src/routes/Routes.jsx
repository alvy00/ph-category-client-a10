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
import PrivateRoute from "../provider/PrivateRoute";
import BillDetail from "../pages/BillDetail";
import FAQ from "../pages/FAQ";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        id: "Root",
        loader: () =>
            fetch("https://ph-category-server-a10.vercel.app/recentbills"),
        children: [
            { index: true, element: <Home /> },
            {
                path: "bills",
                element: <Bills />,
                loader: () =>
                    fetch("https://ph-category-server-a10.vercel.app/bills"),
            },
            {
                path: "mybills/:email",
                element: (
                    <PrivateRoute>
                        <MyBills />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://ph-category-server-a10.vercel.app/mybills/${params.email}`
                    ),
            },
            {
                path: "billdetails/:id",
                element: (
                    <PrivateRoute>
                        <BillDetail />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `https://ph-category-server-a10.vercel.app/bill/${params.id}`
                    ),
            },
            { path: "profile", element: <Profile /> },
            { path: "faq", element: <FAQ /> },
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
