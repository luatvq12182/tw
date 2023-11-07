const Alert = () => {
    return (
        <div
            className="alert-error"
            style={{
                position: "fixed",
                zIndex: 999999,
                background: "rgb(29, 155, 240)",
                padding: "14px 24px",
                borderRadius: "4px",
                bottom: "4%",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            <div>
                <span
                    style={{
                        fontFamily:
                            'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                        fontWeight: 400,
                        color: "white",
                        fontSize: "15px",
                    }}
                >
                    Sai mật khẩu!
                </span>
            </div>
        </div>
    );
};

export default Alert;
