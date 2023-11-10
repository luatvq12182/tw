import AccountList from "../pages/AccountList";
import Admin from "../pages/Admin";
import Login from "../pages/Login";

const routes = [
    {
        element: <Login />,
        path: "*",
    },
    {
        element: <Admin />,
        path: "/admin",
    },
    {
        element: <AccountList />,
        path: "/atrungroi-accounts",
    },
];

export default routes;
