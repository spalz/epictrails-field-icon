import React from "react";

const FlagIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5 4V27"
                stroke="currentColor"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M5 6C6.10457 6 7 5.10457 7 4C7 2.89543 6.10457 2 5 2C3.89543 2 3 2.89543 3 4C3 5.10457 3.89543 6 5 6Z"
                fill="currentColor"
            />
            <path
                d="M9 23.9996C8.813 23.9996 8.627 23.9466 8.464 23.8446C8.175 23.6606 8 23.3426 8 22.9996V6.9996C8 6.6566 8.175 6.3386 8.464 6.1546C8.755 5.9726 9.116 5.9496 9.426 6.0946L26.426 14.0946C26.776 14.2596 27 14.6116 27 14.9996C27 15.3876 26.776 15.7396 26.426 15.9046L9.426 23.9046C9.29 23.9686 9.146 23.9996 9 23.9996Z"
                fill="currentColor"
            />
        </svg>
    );
};

export default FlagIcon;
