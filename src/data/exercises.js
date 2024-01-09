module.exports = async () => {
    return await fetch('https://imkhl-mentoring-1.glitch.me/exercise').then((response) => response.json());
};
