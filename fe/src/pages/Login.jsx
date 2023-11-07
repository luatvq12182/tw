import { useState } from "react";
import Button from "../components/Button";
import ButtonSignUpApple from "../components/ButtonSignUpApple";
import ButtonSignUpGoogle from "../components/ButtonSignUpGoogle";
import ErrorDialog from "../components/ErrorDialog";
import SignInDialog from "../components/SignInDialog";
import LoadingDialog from "../components/LoadingDialog";
import EnterPasswordDialog from "../components/EnterPasswordDialog";
import Alert from "../components/Alert";

const Login = () => {
    const [showErrorDialog, setShowErrorDialog] = useState(false);
    const [showDialogSignIn, setShowDialogSignIn] = useState(false);
    const [showEnterPwDialog, setShowEnterPwDialog] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [username, setUsername] = useState("");

    const toggleErrorDialog = () => {
        setShowErrorDialog(!showErrorDialog);
    };

    const toggleSignInDialog = () => {
        setShowDialogSignIn(!showDialogSignIn);
    };

    const handleClickSignIn = () => {
        setShowLoading(true);

        setTimeout(() => {
            setShowLoading(false);
            toggleSignInDialog();
        }, 2000);
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
            }}
        >
            {showErrorDialog && <ErrorDialog onClose={toggleErrorDialog} />}
            {showDialogSignIn && (
                <SignInDialog
                    hideLoading={() => {
                        setShowLoading(false);
                    }}
                    showLoading={() => {
                        setShowLoading(true);
                    }}
                    showEnterPwDialog={() => {
                        setShowEnterPwDialog(true);
                    }}
                    onClose={toggleSignInDialog}
                    onNext={(usn) => {
                        setUsername(usn);
                    }}
                />
            )}
            {showEnterPwDialog && (
                <EnterPasswordDialog
                    username={username}
                    onClose={() => {
                        setShowEnterPwDialog(false);
                    }}
                    showLoading={() => {
                        setShowLoading(true);
                    }}
                    hideLoading={() => {
                        setShowLoading(false);
                    }}
                    showAlert={() => {
                        setShowAlert(true);
                    }}
                    hideAlert={() => {
                        setShowAlert(false);
                    }}
                />
            )}
            {showLoading && <LoadingDialog />}
            {showAlert && <Alert />}

            <div
                className='main'
                style={{
                    display: "flex",
                    flex: 1,
                    height: "100%",
                    alignItems: "center",
                }}
            >
                <div
                    className='logo'
                    style={{
                        width: "55%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "380px",
                        }}
                    >
                        <svg viewBox='0 0 24 24' aria-hidden='true'>
                            <g>
                                <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z'></path>
                            </g>
                        </svg>
                    </div>
                </div>

                <div className='form'>
                    <div
                        style={{
                            margin: "48px 0",
                        }}
                    >
                        <span
                            className='heading'
                            style={{
                                fontSize: 64,
                                fontWeight: 700,
                                lineHeight: "84px",
                            }}
                        >
                            Đang diễn ra ngay bây giờ
                        </span>
                    </div>

                    <div
                        className='block-sub-heading'
                        style={{
                            marginBottom: "32px",
                        }}
                    >
                        <span
                            className='sub-heading'
                            style={{
                                fontSize: 31,
                                fontWeight: 700,
                                lineHeight: "36px",
                            }}
                        >
                            Tham gia ngay.
                        </span>
                    </div>

                    <div>
                        <div
                            style={{
                                marginBottom: "16px",
                            }}
                        >
                            <ButtonSignUpGoogle
                                onClick={() => {
                                    setTimeout(() => {
                                        toggleErrorDialog();
                                    }, 1000);
                                }}
                            />
                        </div>

                        <div>
                            <ButtonSignUpApple
                                onClick={() => {
                                    setTimeout(() => {
                                        toggleErrorDialog();
                                    }, 1000);
                                }}
                            />
                        </div>
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
                                marginLeft: "-4px",
                                marginRight: "-4px",
                            }}
                            className='css-1dbjc4n r-18u37iz r-lz04qo r-1p6iasa'
                        >
                            <div
                                style={{
                                    flex: 1,
                                    alignItems: "center",
                                    marginLeft: "4px",
                                    marginRight: "4px",
                                }}
                                className='css-1dbjc4n r-13awgt0 r-1iusvr4 r-1777fci r-4amgru r-bcqeeo'
                            >
                                <div
                                    style={{
                                        width: "100%",
                                        height: "1px",
                                        backgroundColor: "rgb(239, 243, 244)",
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
                                    marginLeft: "4px",
                                    marginRight: "4px",
                                }}
                                className='css-1dbjc4n r-13awgt0 r-1iusvr4 r-1777fci r-4amgru r-bcqeeo'
                            >
                                <div
                                    style={{
                                        height: "1px",
                                        backgroundColor: "rgb(239, 243, 244)",
                                    }}
                                    className='css-1dbjc4n r-1sw30gj r-109y4c4'
                                ></div>
                            </div>
                        </div>
                    </div>

                    <div
                        style={{
                            marginBottom: "8px",
                        }}
                    >
                        <Button
                            onClick={() => {
                                setTimeout(() => {
                                    toggleErrorDialog();
                                }, 1000);
                            }}
                        >
                            Tạo tài khoản
                        </Button>
                    </div>

                    <div
                        dir='ltr'
                        style={{
                            color: "rgb(83, 100, 113)",
                            width: "300px",
                            fontSize: "11px",
                            lineHeight: "12px",
                            fontWeight: 400,
                            fontFamily:
                                '"TwitterChirp",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
                        }}
                    >
                        Khi đăng ký, bạn đã đồng ý với{" "}
                        <a
                            href='https://twitter.com/tos'
                            rel='noopener noreferrer nofollow'
                            target='_blank'
                            role='link'
                            style={{
                                color: "rgb(29, 155, 240)",
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 400,
                                    fontFamily:
                                        'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                Điều khoản Dịch vụ
                            </span>
                        </a>{" "}
                        và{" "}
                        <a
                            href='https://twitter.com/privacy'
                            rel='noopener noreferrer nofollow'
                            target='_blank'
                            role='link'
                            style={{
                                color: "rgb(29, 155, 240)",
                                fontWeight: 400,
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 400,
                                    fontFamily:
                                        'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                Chính sách Quyền riêng tư
                            </span>
                        </a>
                        , gồm cả{" "}
                        <a
                            href='https://help.twitter.com/rules-and-policies/twitter-cookies'
                            rel='noopener noreferrer nofollow'
                            target='_blank'
                            role='link'
                            style={{
                                color: "rgb(29, 155, 240)",
                                fontWeight: 400,
                            }}
                        >
                            <span
                                style={{
                                    fontWeight: 400,
                                    fontFamily:
                                        'TwitterChirp, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                }}
                            >
                                Sử dụng Cookie.
                            </span>
                        </a>
                    </div>

                    <div
                        style={{
                            marginTop: "60px",
                        }}
                    >
                        <div
                            style={{
                                marginBottom: "20px",
                            }}
                            dir='ltr'
                        >
                            <span
                                style={{
                                    fontSize: "17px",
                                    fontWeight: 700,
                                    fontFamily:
                                        'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                                    lineHeight: "20px",
                                }}
                            >
                                Đã có tài khoản?
                            </span>
                        </div>

                        <div>
                            <Button onClick={handleClickSignIn} outline>
                                Đăng nhập ngay
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <nav
                    className='footer-nav'
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        padding: "12px 16px",
                    }}
                    aria-label='Footer'
                    role='navigation'
                >
                    <a
                        href='https://about.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Giới thiệu</span>
                    </a>
                    <a
                        href='https://help.twitter.com/using-x/download-the-x-app'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Tải ứng dụng X xuống</span>
                    </a>
                    <a
                        href='https://help.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Trung tâm Trợ giúp</span>
                    </a>
                    <a
                        href='https://twitter.com/tos'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Điều khoản Dịch vụ</span>
                    </a>
                    <a
                        href='https://twitter.com/privacy'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Chính sách Riêng tư</span>
                    </a>
                    <a
                        href='https://support.twitter.com/articles/20170514'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Chính sách cookie</span>
                    </a>
                    <a
                        href='https://help.twitter.com/resources/accessibility'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Khả năng truy cập</span>
                    </a>
                    <a
                        href='https://business.twitter.com/en/help/troubleshooting/how-twitter-ads-work.html?ref=web-twc-ao-gbl-adsinfo&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=adsinfo'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Thông tin quảng cáo</span>
                    </a>
                    <a
                        href='https://blog.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Blog</span>
                    </a>
                    <a
                        href='https://status.twitterstat.us'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Trạng thái</span>
                    </a>
                    <a
                        href='https://careers.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Nghề nghiệp</span>
                    </a>
                    <a
                        href='https://about.twitter.com/press/brand-assets'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Tài nguyên thương hiệu</span>
                    </a>
                    <a
                        href='https://ads.twitter.com/?ref=gl-tw-tw-twitter-advertise'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Quảng cáo</span>
                    </a>
                    <a
                        href='https://marketing.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Tiếp thị</span>
                    </a>
                    <a
                        href='https://business.twitter.com/?ref=web-twc-ao-gbl-twitterforbusiness&amp;utm_source=twc&amp;utm_medium=web&amp;utm_campaign=ao&amp;utm_content=twitterforbusiness'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>X dành cho doanh nghiệp</span>
                    </a>
                    <a
                        href='https://developer.twitter.com'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Nhà phát triển</span>
                    </a>
                    <a
                        href='https://twitter.com/i/directory/profiles'
                        dir='ltr'
                        rel='noopener noreferrer nofollow'
                        target='_blank'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Danh mục</span>
                    </a>
                    <a
                        href='/settings'
                        dir='ltr'
                        role='link'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span>Cài đặt</span>
                    </a>
                    <div
                        dir='ltr'
                        style={{
                            color: "rgb(83, 100, 113)",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "13px",
                                lineHeight: "16px",
                                fontWeight: 400,
                            }}
                        >
                            © 2023 X Corp.
                        </span>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Login;
