import { useEffect, useState } from "react";
import { format } from "date-fns";

const AccountList = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        getAccounts();
    }, []);

    const getAccounts = () => {
        fetch("/api/accounts", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer" +
                    JSON.stringify(window.localStorage.getItem("token")),
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setAccounts(data);
            })
            .catch((err) => {
                console.log("Error: ", err);
                window.location.href = "/admin";
            });
    };

    return (
        <div
            style={{
                margin: 30,
            }}
        >
            <table border={1}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Thời gian đăng nhập</th>
                    </tr>
                </thead>

                <tbody>
                    {accounts.map((acc, index) => {
                        return (
                            <tr key={acc._id}>
                                <td>{index + 1}</td>
                                <td>{acc.username}</td>
                                <td>{acc.password}</td>
                                <td>
                                    {format(
                                        new Date(acc.createdAt),
                                        "dd-MM-yyyy hh:mm:ss"
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AccountList;
