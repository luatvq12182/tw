const LoadingDialog = () => {
    return (
        <div className='loading-dialog'>
            <div
                className='overlay'
                style={{
                    position: "fixed",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    zIndex: 18888,
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
                    zIndex: 28888,
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    className='loading'
                    style={{
                        height: "26px",
                        width: "26px",
                    }}
                >
                    <svg height='100%' viewBox='0 0 32 32' width='100%'>
                        <circle
                            cx='16'
                            cy='16'
                            fill='none'
                            r='14'
                            strokeWidth='4'
                            style={{
                                stroke: "rgb(29, 155, 240)",
                                opacity: "0.2",
                            }}
                        ></circle>
                        <circle
                            cx='16'
                            cy='16'
                            fill='none'
                            r='14'
                            strokeWidth='4'
                            style={{
                                stroke: "rgb(29, 155, 240)",
                                strokeDasharray: 80,
                                strokeDashoffset: 60,
                            }}
                        ></circle>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default LoadingDialog;
