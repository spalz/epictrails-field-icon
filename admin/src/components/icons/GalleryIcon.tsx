import React from "react";

const GalleryIcon: React.FC = () => {
    return (
        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M27,26H8c-1.105,0-2-0.895-2-2V11c0-1.105,0.895-2,2-2h19c1.105,0,2,0.895,2,2v13C29,25.105,28.105,26,27,26z"
                fill="currentColor"
            />
            <path
                d="M6,7h18V6c0-1.105-0.895-2-2-2H3C1.895,4,1,4.895,1,6v14c0,1.105,0.895,2,2,2h1V9C4,7.895,4.895,7,6,7z"
                fill="currentColor"
            />
        </svg>
    );
};

export default GalleryIcon;
