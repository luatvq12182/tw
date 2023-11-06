import { useEffect, useState } from "react";

const useInput = (defaultValue) => {
    const [value, setValue] = useState(defaultValue || "");

    return {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        },
    };
};

const Admin = () => {
    const usernameProps = useInput("");
    const passwordProps = useInput("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");

        if (token) {
            window.location.href = "/accounts";
        }
    }, []);

    const handleSubmit = () => {
        fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: usernameProps.value,
                password: passwordProps.value,
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                window.localStorage.setItem("token", data.token);
                window.location.reload();
            })
            .catch((err) => {
                console.log("Error: ", err);
                window.alert(err?.message || "Login error");
            });
    };

    return (
        <div
            style={{
                margin: 30,
            }}
        >
            <input placeholder='Username' type='text' {...usernameProps} />
            <input placeholder='Password' type='password' {...passwordProps} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    );
};

export default Admin;
