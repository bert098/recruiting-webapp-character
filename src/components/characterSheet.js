import React, { useState, useEffect } from 'react';
import '../styles/characterSheet.css';
import ClassList from './classList.js';
import ClassRequirements from './classRequirments.js';
import Skills from './skills.js';
import AttributeList from './attributes.js'
import { saveCharacters, loadCharacters } from '../apiHelpers/api.js'
import SkillCheck from './skillCheck.js'

const CharacterSheet = () => {
    const initialAttributes = {
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
    };
    const [characters, setCharacters] = useState([initialAttributes]);
    const [selectedClass, setSelectedClass] = useState(null);
    const [skillPoints, setSkillPoints] = useState({});

    const handleSaveCharacters = async () => {
        try {
            await saveCharacters(characters);
            alert('Characters saved successfully!');
        } catch (error) {
            alert('Failed to save characters. Please try again.');
        }
    };

    const handleGetCharacters = async () => {
        try {
            const fetchCharacters = async () => {
                const savedCharacters = await loadCharacters();
                if (savedCharacters) {
                    setCharacters(savedCharacters.body);
                }
            };
            fetchCharacters();
            alert('Characters Retrieved successfully!');
        } catch (error) {
            alert('Failed to get characters. Please try again.');
        }
    };

    const handleClassSelect = (className) => {
        setSelectedClass(className);
    };
    const handleCloseRequirements = () => {
        setSelectedClass(null);
    };
    const addCharacter = () => {
        setCharacters((prevCharacters) => [
            ...prevCharacters,
            { ...initialAttributes }
        ]);
    };
    return (
        <div>
            <h1 className="page-title">RPG Character Sheet</h1>
            <button className="add-character-button" onClick={addCharacter}>
                Add New Character
            </button>
            <button onClick={handleSaveCharacters}>
                Save Characters
            </button>
            <button onClick={handleGetCharacters}>
                Replace with saved Characters
            </button>
            <div className="character-sheet-container">
                {characters.map((attributes, index) => (
                    <div key={index} className="character-box">
                        <h2>Character {index + 1}</h2>
                        <div className='main_box'>
                            <AttributeList
                                attributes={attributes}
                                setCharacters={setCharacters}
                                index={index}
                            />
                            <div className="list-box">
                                <ClassList
                                    attributes={attributes}
                                    onClassSelect={handleClassSelect}
                                />
                            </div>
                            <ClassRequirements
                                selectedClass={selectedClass}
                                onClose={handleCloseRequirements}
                            />
                            <Skills attributes={attributes}
                                skillPoints={skillPoints}
                                setSkillPoints={setSkillPoints}
                            />
                            <SkillCheck attributes={attributes}
                                skillPoints={skillPoints}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default CharacterSheet;