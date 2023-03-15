import "./index.scss";
import React from 'react'

import html from "../../assets/images/html5.svg"
import css from "../../assets/images/css.svg";
import cplusplus from "../../assets/images/c++.svg";
import react from "../../assets/images/react.svg";
import typescript from "../../assets/images/typescript.svg"
import js from "../../assets/images/js.svg"


export const Stack = () => {
    const languages = [
        {
            id: 1,
            label: 'html5',
            icon: html,
        }, {
            id: 2,
            label: 'css',
            icon: css
        },
        {
            label: 'typescript',
            icon: typescript
        },
        {
            label: 'javascript',
            icon: js
        }, {
            label: 'c++',
            icon: cplusplus
        },
    ];

    return (
        <div className="stack-container">
           

        </div >
    )
}

export default Stack;