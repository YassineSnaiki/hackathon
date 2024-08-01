const updatesDiv = document.getElementById('updates');
console.log(updatesDiv)
let currentIndex = 0;
const updateInterval = 5000; // 5 seconds

const fetchUpdates = async () => {
    try {
        const response = await fetch('/actualités.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updates = await response.json();
        return updates;
    } catch (error) {
        console.error('Error fetching updates:', error);
        return [];
    }
};

const displayUpdate = (update) => {
    if (update) {
        updatesDiv.innerHTML = `
            <h2>Actualités</h2>
            <img src="${update.image}" alt="Update Image">
            <div class="update-text">${update.text}</div>
        `;
    }
};

const startSlider = async () => {
    const updates = await fetchUpdates();
    if (updates.length === 0) {
        console.log('No updates available');
        return;
    }

    const updateDisplay = () => {
        displayUpdate(updates[currentIndex]);
        currentIndex = (currentIndex + 1) % updates.length;
    };

    updateDisplay(); // Display the first update
    setInterval(updateDisplay, updateInterval); // Update every 5 seconds
};

document.addEventListener('DOMContentLoaded', startSlider); // Ensure DOM is fully loaded before starting the slider


//---------------------------------------------



