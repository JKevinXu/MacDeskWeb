// Renderer process JavaScript
// This file runs in the web page context

function showGreeting() {
    const greetingDiv = document.getElementById('greeting');
    const button = document.querySelector('.action-button');
    
    // Array of random greetings
    const greetings = [
        "🎉 Awesome! You clicked the button!",
        "🚀 Your Mac app is working perfectly!",
        "✨ Hello from the web technology world!",
        "🍎 Mac + Web = Amazing combination!",
        "🎊 You've successfully built a Mac app!",
        "🌟 Electron makes this all possible!",
        "💫 Web tech on desktop feels magical!"
    ];
    
    // Get random greeting
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    
    // Update content and show
    greetingDiv.textContent = randomGreeting;
    greetingDiv.className = 'greeting show';
    
    // Update button text
    button.textContent = 'Click Again!';
    
    // Hide greeting after 3 seconds
    setTimeout(() => {
        greetingDiv.className = 'greeting hidden';
        button.textContent = 'Click Me!';
    }, 3000);
}

// Add some keyboard shortcuts
document.addEventListener('keydown', (event) => {
    // Cmd+R to reload (Mac)
    if (event.metaKey && event.key === 'r') {
        location.reload();
    }
    
    // Space bar to trigger button click
    if (event.code === 'Space') {
        event.preventDefault();
        showGreeting();
    }
});

// Add app info to console
console.log('🍎 Hello World Mac App');
console.log('Built with Electron and web technologies');
console.log('Press Cmd+R to reload or Space to trigger greeting'); 