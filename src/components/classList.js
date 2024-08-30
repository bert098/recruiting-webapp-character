import React from 'react';
import '../styles/classList.css';
import {  CLASS_LIST } from '../consts.js';

const ClassList = ({ attributes, onClassSelect }) => {
    const qualifiesForClass = (className) => {
        const classRequirements = CLASS_LIST[className];
        return Object.keys(classRequirements).every(
            (attribute) => attributes[attribute] >= classRequirements[attribute]
        );
    };

    return (
        <ul className="class-list">
            {Object.keys(CLASS_LIST).map((className) => (
                <li
                    key={className}
                    className={`class-item ${qualifiesForClass(className) ? 'qualified' : ''}`}
                    onClick={() => onClassSelect(className)}
                >
                    {className}
                </li>
            ))}
        </ul>
    );
};

export default ClassList;