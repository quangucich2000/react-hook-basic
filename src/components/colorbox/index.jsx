import React, { useState } from 'react';

import './ColorBox.scss'

ColorBox.propTypes = {

};


function getRandomColor() {
    const listColor = ["orange", "blue", "violet", "red", "black"];
    const indexColor = Math.trunc(Math.random() * 5);
    return listColor[indexColor];
}


function ColorBox() {
    const [color, setColor] = useState(() => {
        const initcolor = localStorage.getItem('box_color') || 'deeppink';
        return initcolor;
    });

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
            className="color-box"
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
            ColorBox
        </div>
    );
}

export default ColorBox;