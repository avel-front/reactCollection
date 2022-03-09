import React from "react";


const Link = ({ onClick, active, children }) => (
    <button
    onClick={onClick}
    disabled={active}
    >
        {children}
    </button>
)

export default Link