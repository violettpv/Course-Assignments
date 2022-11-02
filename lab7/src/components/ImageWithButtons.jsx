import React, { useState } from 'react';
import dubai_2 from '../assets/images/Dubai-skyline.jpg';

const ImageWithButtons = () => {
    const [isVisible, setVisible] = useState(false);
    const [imgSize, setImgSize] = useState(300);
    
    return (<>
        <Buttons setVisible={setVisible} setImgSize={setImgSize}></Buttons>
        {isVisible && <Image size={imgSize} />}
    </>);
};

const Image = ({ size }) => {
    return <img style={{ width: size + 'px', height: size + 'px' }} src={dubai_2} alt='dubai-2'/>;
};

const Buttons = ({ setVisible, setImgSize }) => {
    return (
        <div>
            <button onClick={() => setVisible(true)}>Додати</button>
            <button onClick={() => setImgSize(prev => prev + 10)}>Збільшити</button>
            <button onClick={() => setImgSize(prev => prev - 10)}>Зменшити</button>
            <button onClick={() => setVisible(false)}>Видалити</button>
        </div>
    );
};

export default ImageWithButtons;
