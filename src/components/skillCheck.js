import React, { useState } from 'react';
import { SKILL_LIST } from '../consts'; // Ensure this path matches your file structure

const SkillCheck = ({ attributes, skillPoints }) => {
    const [selectedSkill, setSelectedSkill] = useState(SKILL_LIST[0].name);
    const [dc, setDc] = useState('0');
    const [result, setResult] = useState(null);
    const [randomNumber, setRandomNumber] = useState(null);

    const getSkillModifier = (skillName) => {
        const skill = SKILL_LIST.find(skill => skill.name === skillName);
        const attributeModifier =  Math.floor(((attributes[skill.attributeModifier]) - 10) / 2);
        const pointsSpent = skillPoints[skill.name] || 0;
        return pointsSpent + attributeModifier;
    };

    const handleSkillChange = (event) => {
        setSelectedSkill(event.target.value);
    };

    const handleDcChange = (event) => {
        setDc(event.target.value);
    };

    const rollDice = () => {
        const roll = Math.floor(Math.random() * 20) + 1;
        const skillModifier = getSkillModifier(selectedSkill);
        const checkResult = roll + skillModifier >= dc;
        setRandomNumber(roll);
        setResult(checkResult ? 'Success' : 'Failure');
    };

    const skillModifier = getSkillModifier(selectedSkill);

    return (
        <div>
            <h3>Skill Check</h3>
            <label>
                Skill:
                <select value={selectedSkill} onChange={handleSkillChange}>
                    {SKILL_LIST.map(skill => (
                        <option key={skill.name} value={skill.name}>{skill.name}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                DC:
                <input
                    type="number"
                    value={dc}
                    onChange={handleDcChange}
                    min="0"
                />
            </label>
            <br />
            <button onClick={rollDice}>Roll</button>
            <div>
                {result !== null && (
                    <>
                        <p>Random Role: {randomNumber}</p>
                        <p>Skill Modifier: {skillModifier}</p>
                        <p>Total Skill Check Value: {randomNumber + skillModifier}</p>
                        <p>Result: {result}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SkillCheck;