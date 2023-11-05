import { useState } from "react";

/* eslint-disable react/prop-types */
const Input = (props) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className='did-floating-label-content'>
            <input
                {...props}
                type={isShowPassword ? "text" : props.type}
                ref={props.innerref}
                className='did-floating-input'
                // placeholder=''
                style={
                    props.disabled
                        ? {
                              color: "rgb(164 164 164)",
                              borderColor: "rgb(239, 243, 244)",
                              backgroundColor: "rgb(239, 243, 244)",
                          }
                        : {}
                }
            />
            <label
                style={
                    props.disabled
                        ? {
                              color: "rgb(164 164 164)",
                              backgroundColor: "transparent",
                          }
                        : {}
                }
                className={
                    "did-floating-label " + (props.value ? "float-xxx" : "")
                }
            >
                {props.label}
            </label>

            {props.type === "password" && (
                <div
                    onClick={() => {
                        setIsShowPassword(!isShowPassword);
                    }}
                    dir='ltr'
                    style={{
                        position: "absolute",
                        bottom: "10px",
                        right: "10px",
                        height: "21px",
                        width: "21px",
                        cursor: "pointer",
                    }}
                    // style='text-overflow: unset;'
                >
                    {isShowPassword ? (
                        <svg viewBox='0 0 24 24' aria-hidden='true'>
                            <g>
                                <path d='M3.693 21.707l-1.414-1.414 2.429-2.429c-2.479-2.421-3.606-5.376-3.658-5.513l-.131-.352.131-.352c.133-.353 3.331-8.648 10.937-8.648 2.062 0 3.989.621 5.737 1.85l2.556-2.557 1.414 1.414L3.693 21.707zm-.622-9.706c.356.797 1.354 2.794 3.051 4.449l2.417-2.418c-.361-.609-.553-1.306-.553-2.032 0-2.206 1.794-4 4-4 .727 0 1.424.192 2.033.554l2.263-2.264C14.953 5.434 13.512 5 11.986 5c-5.416 0-8.258 5.535-8.915 7.001zM11.986 10c-1.103 0-2 .897-2 2 0 .178.023.352.067.519l2.451-2.451c-.167-.044-.341-.067-.519-.067zm10.951 1.647l.131.352-.131.352c-.133.353-3.331 8.648-10.937 8.648-.709 0-1.367-.092-2-.223v-2.047c.624.169 1.288.27 2 .27 5.415 0 8.257-5.533 8.915-7-.252-.562-.829-1.724-1.746-2.941l1.438-1.438c1.53 1.971 2.268 3.862 2.33 4.027z'></path>
                            </g>
                        </svg>
                    ) : (
                        <svg viewBox='0 0 24 24' aria-hidden='true'>
                            <g>
                                <path d='M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z'></path>
                            </g>
                        </svg>
                    )}
                    <span
                        style={{
                            borderBottom: "2px solid rgb(15, 20, 25)",
                        }}
                    ></span>
                </div>
            )}
        </div>
    );
};

export default Input;
