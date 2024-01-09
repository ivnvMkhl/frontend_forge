module.exports = {
    getTitle: (pageTitle, mainTitle) => {
        if (!pageTitle) {
            return mainTitle;
        }
        return `${pageTitle} | ${mainTitle}`;
    },
    getActiveClass: (currentUrl, targetUrl) => {
        if (targetUrl === '/') {
            const isRootPath = targetUrl === currentUrl;
            return isRootPath ? 'active' : '';
        }
        const isCurrentTab = currentUrl.includes(targetUrl);
        return isCurrentTab ? 'active' : '';
    },
};
