import Button from "./Button";

// eslint-disable-next-line react/prop-types
const Dialog = ({ onClose }) => {
    return (
        <div>
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 8888,
                }}
            ></div>

            <div
                style={{
                    position: "fixed",
                    top: "50%",
                    right: "50%",
                    width: "360px",
                    height: "200px",
                    transform: "translate(50%, -50%)",
                    backgroundColor: "white",
                    zIndex: 9999,
                    borderRadius: "20px",
                    padding: "40px 30px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            marginBottom: "15px",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "20px",
                            }}
                        >
                            Error
                        </span>
                    </div>

                    <div
                        style={{
                            marginBottom: "20px",
                            textAlign: "center",
                        }}
                    >
                        <span
                            style={{
                                fontSize: "15px",
                                lineHeight: "20px",
                                fontWeight: 400,
                                fontFamily:
                                    'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                            }}
                        >
                            Oops, something went wrong. Please try again later.
                        </span>
                    </div>

                    <div>
                        <Button onClick={onClose}>OK</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialog;
