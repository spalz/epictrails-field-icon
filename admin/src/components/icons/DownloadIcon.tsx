import React from "react";

const DownloadIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15,1L15,1c-0.552,0-1,0.448-1,1v4h2V2C16,1.448,15.552,1,15,1z"
                fill="currentColor"
            />
            <path
                d="M24,6h-8v12.586l2.293-2.293c0.391-0.391,1.023-0.391,1.414,0s0.391,1.023,0,1.414l-4,4C15.512,21.902,15.256,22,15,22s-0.512-0.098-0.707-0.293l-4-4c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0L14,18.586V6H6C4.895,6,4,6.895,4,8v17c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V8C26,6.895,25.105,6,24,6z"
                fill="currentColor"
            />
        </svg>
    );
};

export default DownloadIcon;
