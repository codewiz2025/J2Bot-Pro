import React from 'react';

const MoodShare = () => {
    const [mood, setMood] = React.useState('');
    const [savedMoods, setSavedMoods] = React.useState([]);

    const handleMoodChange = (event) => {
        setMood(event.target.value);
    };

    const handleMoodSubmit = (event) => {
        event.preventDefault();
        if (mood) {
            setSavedMoods([...savedMoods, mood]);
            setMood('');
        }
    };

    return (
        <div>
            <h1>Today's Mood</h1>
            <form onSubmit={handleMoodSubmit}>
                <input 
                    type="text" 
                    value={mood} 
                    onChange={handleMoodChange} 
                    placeholder="Share your mood" 
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <h2>Saved Moods</h2>
            <ul>
                {savedMoods.map((mood, index) => <li key={index}>{mood}</li>)}
            </ul>
        </div>
    );
};

export default MoodShare;