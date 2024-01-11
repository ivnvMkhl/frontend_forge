const exerciseScript = () => {
    const copyButton = document.querySelector('#exercise-copy-btn');
    const pasteButton = document.querySelector('#exercise-paste-btn');
    const resetButton = document.querySelector('#exercise-reset-btn');
    const sendButton = document.querySelector('#exercise-send-btn');
    const exerciseCodeArea = document.querySelector('#exercise-code-area');

    const handleCopy = async () => {
        await navigator.clipboard.writeText(exerciseCodeArea.value);
    };
    const handleReset = () => {
        exerciseCodeArea.value = exerciseCodeArea.textContent;
    };
    const handlePaste = async () => {
        const value = await navigator.clipboard.readText();
        if (value) exerciseCodeArea.value = value;
    };

    copyButton.addEventListener('click', handleCopy);
    resetButton.addEventListener('click', handleReset);
    pasteButton.addEventListener('click', handlePaste);
};

exerciseScript();
