console.log("hello world");

document.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText.length > 0) {
        console.log('🔍 Bạn vừa bôi đen:', selectedText);

        // Bạn có thể hiện popup, gửi về server, đánh dấu highlight...
    }
});