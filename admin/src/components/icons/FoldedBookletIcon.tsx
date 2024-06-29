import React from "react";

const FoldedBookletIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M21 27H5C4.448 27 4 26.552 4 26V10C4 9.448 4.448 9 5 9H21C21.552 9 22 9.448 22 10V26C22 26.552 21.552 27 21 27ZM9 18H17C17.552 18 18 17.552 18 17V15C18 14.448 17.552 14 17 14H9C8.448 14 8 14.448 8 15V17C8 17.552 8.448 18 9 18ZM9 22H17C17.552 22 18 21.552 18 21C18 20.448 17.552 20 17 20H9C8.448 20 8 20.448 8 21C8 21.552 8.448 22 9 22Z"
                fill="currentColor"
            />
            <path
                d="M25 19V4H10V9"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10 4L21 10"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
            />
            <path
                d="M10 4L16 7H22C23.105 7 24 7.895 24 9V10H25V4H10Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default FoldedBookletIcon;
