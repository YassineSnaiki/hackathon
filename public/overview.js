const events = [
    { image: 'https://picsum.photos/200/300?t=1', text: 'Event 1: Description for the first event...', id: 1 },
    { image: 'https://picsum.photos/200/300?t=2', text: 'Event 2: Description for the second event...', id: 2 },
    { image: 'https://picsum.photos/200/300?t=3', text: 'Event 3: Description for the third event...', id: 3 },
    { image: 'https://picsum.photos/200/300?t=4', text: 'Event 4: Description for the fourth event...', id: 4 },
    { image: 'https://picsum.photos/200/300?t=5', text: 'Event 5: Description for the fifth event...', id: 5 }
];

let currentIndex2 = 0;
const textElement = document.getElementById('event-text');
const imageElement = document.getElementById('event-image');
const participateButton = document.getElementById('participate-button');
const detailsButton = document.getElementById('details-button');

function updateEvent() {
    const event = events[currentIndex2];
    textElement.textContent = event.text;
    imageElement.src = event.image;

    // Update button links
    participateButton.onclick = () => window.location.href = `/register/${event.id}`;
    detailsButton.onclick = () => window.location.href = `/event-details/${event.id}`;

    currentIndex2 = (currentIndex2 + 1) % events.length; // Loop back to the start
}

// Initial call to display the first event
updateEvent();

// Update the content every 4 seconds
setInterval(updateEvent, 4000);
