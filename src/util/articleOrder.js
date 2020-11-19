const articleOrderData = [
    '/article/react-hooks',
    '/article/javascript-date-time-format',
    '/article/http-request-method',
    '/article/git',
    '/article/vanilla-javascript',
];

export default function articleOrder(currentPath) {
    let currentIndex = articleOrderData.indexOf(currentPath);
    let prevIndex = currentIndex - 1;
    let nextIndex = currentIndex + 1;
    let returnObject = {};

    if (prevIndex >= 0 && prevIndex < articleOrderData.length) {
        returnObject.prev = articleOrderData[prevIndex];
    }

    if (nextIndex >= 0 && nextIndex < articleOrderData.length) {
        returnObject.next = articleOrderData[nextIndex];
    }

    return returnObject;
}