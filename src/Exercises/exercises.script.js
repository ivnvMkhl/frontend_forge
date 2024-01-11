const exerciseScript = () => {
    const exerciseCards = document.querySelectorAll('#exercise-card');
    const exerciseEmptyMessage = document.querySelector('#exercises-empty-message');
    const render = ({ difficultyList, topicList }) => {
        let isNotEmptyList = false;
        exerciseCards.forEach((exerciseCard) => {
            const difficulty = exerciseCard.attributes.getNamedItem('difficulty')?.value;
            const topic = exerciseCard.attributes.getNamedItem('topic')?.value;
            const isVisibleByDifficulty = !difficultyList.length || difficultyList.includes(difficulty);
            const isVisibleByTopic = !topicList.length || topicList.includes(topic);
            const hiddenCard = !(isVisibleByDifficulty && isVisibleByTopic);
            exerciseCard.hidden = hiddenCard;
            isNotEmptyList ||= !hiddenCard;
        });
        exerciseEmptyMessage.hidden = isNotEmptyList;
    };
    const state = {
        current: {
            difficultyList: [],
            topicList: [],
        },
        setState(updatedCb) {
            const updatedState = updatedCb(this.current);
            this.current = updatedState;
            render(this.current);
        },
    };
    const selectHandler = (filterKey) => (e) => {
        const filterValues = e.target.value !== 'Not selected' ? [e.target.value] : [];
        state.setState((oldState) => ({ ...oldState, [filterKey]: filterValues }));
    };
    document.querySelector('#select-difficulty').addEventListener('change', selectHandler('difficultyList'));
    document.querySelector('#select-topic').addEventListener('change', selectHandler('topicList'));
};

exerciseScript();
