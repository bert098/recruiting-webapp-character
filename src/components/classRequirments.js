import React from 'react';
import '../styles/classRequirments.css'; 
import { CLASS_LIST} from '../consts.js';

const ClassRequirements = ({ selectedClass, onClose }) => {
    if (!selectedClass) return null;

    const getClassRequirements = () => {
        if (!selectedClass) return null;
        return Object.entries(CLASS_LIST[selectedClass]).map(([attribute, min]) => (
            <li key={attribute}>
                <strong>{attribute}: &nbsp;</strong>  { min}
            </li>
        ));
    };
    return (
        <div className="list-box requirements-box">
            <h2>{selectedClass} Requirements</h2>
            <ul>
                {Object.entries(getClassRequirements()).map(([attribute, min]) => (
                    <li key={attribute}>
                        {min}
                    </li>
                ))}
            </ul>
            <button className="close-button" onClick={onClose}>Close</button>
        </div>
    );
};

export default ClassRequirements;