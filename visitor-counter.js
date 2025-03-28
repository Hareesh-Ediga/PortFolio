// visitor-counter.js
import { database } from './firebase-config.js';
import { ref, transaction, onValue } from "firebase/database";

document.addEventListener('DOMContentLoaded', function() {
    const visitorCountElement = document.getElementById('visitor-count');
    
    if (visitorCountElement) {
        const counterRef = ref(database, 'visitorCount');
        
        // Increment the counter
        transaction(counterRef, (currentCount) => {
            return (currentCount || 0) + 1;
        }).then(() => {
            // Update the counter display
            onValue(counterRef, (snapshot) => {
                const count = snapshot.val();
                visitorCountElement.textContent = count;
            });
        });
    }
});