import React from 'react';

const HoverText = () => {
    const splitText = (text) => text.split('').map((char, index) => (
        <span key={index}>{char}</span>
    ));

    const text1 = "Welcome to";
    const text2 = "CODE ASSIST";
    const text3 = "Let's Code Together";

    return (
        <>
            <p id="above_page_title">
                {splitText(text1)}
            </p>
            <h1 id="page_title">
                {splitText(text2)}
            </h1>
            <h3 id="below_page_title">
                {splitText(text3)}
            </h3>
        </>
    );
};

export default HoverText;
