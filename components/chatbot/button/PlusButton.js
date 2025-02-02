import React from "react";

const PlusButton = ({ actionProvider }) => {
    const handleClick = () => {
        actionProvider.handleOpenDrawer();
    };

    return (
        <button
            style={{
                position: "absolute",
                bottom: "10px",
                right: "10px",
                backgroundColor: "#007BFF",
                color: "#fff",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                fontSize: "24px",
                border: "none",
                cursor: "pointer",
            }}
            onClick={handleClick}
        >
            +
        </button>
    );
};

export default PlusButton;
