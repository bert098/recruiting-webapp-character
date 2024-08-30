import React, { useState } from 'react';
import { SKILL_LIST } from '../consts.js';

const calculateModifier = (value) => {
    return Math.floor((value - 10) / 2);
};

const Skills = ({ attributes, skillPoints, setSkillPoints }) => {
    const calculateAvailableSkillPoints = () => {
        return 10 + (4 * calculateModifier(attributes.Intelligence));
    };


    const handleSkillPointsChange = (skill, change) => {
        setSkillPoints((prevPoints) => {
            const currentPoints = prevPoints[skill] || 0;
            const newPoints = Math.max(0, currentPoints + change);
            const totalPointsSpent = Object.values(prevPoints).reduce((acc, points) => acc + points, 0);
            const availablePoints = calculateAvailableSkillPoints();
            if (totalPointsSpent + change > availablePoints) {
                alert('You need more skill points, upgrade Intelligence');
                return prevPoints;
            }
            return {
                ...prevPoints,
                [skill]: newPoints,
            };
        });
    };

    const getSkillTotal = (skill) => {
        const skillInfo = SKILL_LIST.find((s) => s.name === skill);
        const attributeModifier = calculateModifier(attributes[skillInfo.attributeModifier]);
        const pointsSpent = skillPoints[skill] || 0;
        return pointsSpent + attributeModifier;
    };

    return (
        <div className="list-box">
            <h2>Skills</h2>
            <p>Available Points: { calculateAvailableSkillPoints()}</p>
            {SKILL_LIST.map((skill) => (
                <div key={skill.name} className="skill-item">
                    <strong>{skill.name}&nbsp; </strong>
                    <span>
                        <span>Points: {skillPoints[skill.name] || 0}</span>
                        <button onClick={() => handleSkillPointsChange(skill.name, 1)}>+</button>
                        <button onClick={() => handleSkillPointsChange(skill.name, -1)}>-&nbsp;</button>
                        <span>Modifier ({skill.attributeModifier}): {calculateModifier(attributes[skill.attributeModifier])}&nbsp;</span>
                        <span>Total: {getSkillTotal(skill.name)}</span>
                    </span>
                </div>
            ))}
        </div>
    );
};

export default Skills;