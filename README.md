# Explanation
So I broke up the different parts of the app into components as you can see in the components folder and each one is called in the characterSheet component, this is the breakdown
- characterSheet.js: it is the parent component and has some general logic that is needed for all of the Character sheets like adding new characters and saving 
- attributes: this deals with the attributes of the character and raising and lowering the attributes as well as calculating modifiers
- classList: this just displays the classes and changes if you meet the requirements
- classRequirments: this show the min requirements for all the classes
- skillCheck: this shows the component where the skill check is done, including the roll, and the addition of modifiers to see if the roll was a success or if it failed
- skills: this shows all the skills and their modifiers
- apiHelpers/ api.js: this is some helper functions to help save and load characters

Then I added some basic css so make the App more readable 

I broke things up this way to keep things more organized and to make the app overall easier to understand. Breaking it up in this way will make the experience of looking at the code more managable and help to take on any future bugs that may come up 

Note: I did not complete this test fully as I only had two hours, I completed tasks 1-9 but I opted to refactor and organize the code rather then trying to pump out unorganized code but finish all 10 tasks