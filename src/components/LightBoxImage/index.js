import React, { useState } from "react";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";


const LightBoxImage = ({imageSrc, imageClass, wrapperClass}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={wrapperClass}>
                <img className={imageClass}
                     src={imageSrc}
                     onClick={() => setIsOpen(true)}
                     alt=""
                />
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={imageSrc}
                    onCloseRequest={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

export default LightBoxImage