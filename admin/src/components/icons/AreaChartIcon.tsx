import React from "react";

const AreaChartIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M25 5L20 7L15 5L10 9L5 7V24C5 24.552 5.448 25 6 25H24C24.552 25 25 24.552 25 24V5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M20 7L15 5L10 9L5 7V16L10 21L15 15L20 16L25 12V5L20 7Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default AreaChartIcon;
