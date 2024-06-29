import React from "react";

const DoubleTickIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 15L9 22L22 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M14 21L15 22L28 9"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
            <path
                d="M28 10C28.5523 10 29 9.55228 29 9C29 8.44772 28.5523 8 28 8C27.4477 8 27 8.44772 27 9C27 9.55228 27.4477 10 28 10Z"
                fill="currentColor"
            />
            <path
                d="M8 16C8.55228 16 9 15.5523 9 15C9 14.4477 8.55228 14 8 14C7.44772 14 7 14.4477 7 15C7 15.5523 7.44772 16 8 16Z"
                fill="currentColor"
            />
            <path
                d="M8 15L12 19"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
        </svg>
    );
};

export default DoubleTickIcon;
