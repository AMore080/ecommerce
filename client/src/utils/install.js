const installBtn = document.getElementById('installBtn');
const textHeader = document.getElementById('textHeader');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    installBtn.classList.toggle('hidden', false);
});

// Implement a click event handler on the `installBtn` element
installBtn.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;

    installBtn.classList.toggle('hidden', true);

});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    textHeader.textContent = 'Successfully Installed!';
    // Clear prompt
    window.deferredPrompt = null;
});