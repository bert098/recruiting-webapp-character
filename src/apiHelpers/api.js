import axios from 'axios';

const GITHUB_USERNAME = 'bert098';

const API_URL = `https://recruiting.verylongdomaintotestwith.ca/api/${GITHUB_USERNAME}/character`;

export const saveCharacters = async (characters) => {
    try {
        const response = await axios.post(API_URL, characters, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error saving characters:', error);
    }
};

export const loadCharacters = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error loading characters:', error);
    }
};