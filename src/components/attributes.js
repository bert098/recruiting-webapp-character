import React from 'react';
import '../styles/characterSheet.css';
import { ATTRIBUTE_LIST, MAX_TOTAL_ATTRIBUTE_VALUE, MIN_ATTRIBUTE_VALUE } from '../consts.js';

const AttributeList = ({ attributes, setCharacters, index }) => {
    const calculateModifier = (value) => {
        return Math.floor((value - 10) / 2);
    };
    const calculateTotalAttributes = (attributes) => {
        return Object.values(attributes).reduce((acc, value) => acc + value, 0);
    };


    const incrementAttribute = (characterIndex, attribute) => {
        setCharacters((prevCharacters) => {
            const updatedCharacters = [...prevCharacters];
            const currentValue = updatedCharacters[characterIndex][attribute];
            const totalAttributes = calculateTotalAttributes(updatedCharacters[characterIndex]);
            if (totalAttributes >= MAX_TOTAL_ATTRIBUTE_VALUE) {
                alert('A character can only have 70 attribute points.');
                return updatedCharacters;
            }
            updatedCharacters[characterIndex] = {
                ...updatedCharacters[characterIndex],
                [attribute]: currentValue + 1,
            };
            return updatedCharacters;
        });
    };

    const decrementAttribute = (characterIndex, attribute) => {
        setCharacters((prevCharacters) => {
            const updatedCharacters = [...prevCharacters];
            const currentValue = updatedCharacters[characterIndex][attribute];
            if (currentValue > MIN_ATTRIBUTE_VALUE) {
                updatedCharacters[characterIndex] = {
                    ...updatedCharacters[characterIndex],
                    [attribute]: currentValue - 1,
                };
            }
            return updatedCharacters;
        });
    };

    return (
        <div className="list-box">
            <ul className="attribute-list">
                {ATTRIBUTE_LIST.map((attribute) => (
                    <li key={attribute} className="attribute-item">
                        <strong>{attribute}:</strong> {attributes[attribute]}
                        <span className="modifier">
                            (Modifier: {calculateModifier(attributes[attribute])})
                        </span>
                        <button onClick={() => incrementAttribute(index, attribute)}>+</button>
                        <button onClick={() => decrementAttribute(index, attribute)}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttributeList;