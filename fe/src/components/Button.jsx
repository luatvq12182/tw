/* eslint-disable react/prop-types */
const Button = ({
    children,
    outline,
    onClick,
    backgroundColor,
    color,
    height,
    fullWidth,
}) => {
    return (
        <div
            onClick={onClick}
            className={outline ? "outline-hover" : "btn-hover"}
            style={{
                transition: "0.3s",
                width: fullWidth ? "100%" : "300px",
                height: height ? height : "40px",
                border: `1px solid ${
                    outline ? "rgb(207, 217, 222)" : "rgba(0, 0, 0, 0)"
                }`,
                backgroundColor: backgroundColor
                    ? backgroundColor
                    : outline
                    ? "rgba(0, 0, 0, 0)"
                    : "rgb(29, 155, 240)",
                borderRadius: "9999px",
                cursor: "pointer",
                color: color ? color : outline ? "rgb(29, 155, 240)" : "white",
                textAlign: "center",
                lineHeight: height ? `${height}px` : "36px",
            }}
        >
            <span
                style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    fontFamily:
                        'TwitterChirp, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
                }}
            >
                {children}
            </span>
        </div>
    );
};

export default Button;
