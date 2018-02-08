
function createXHR() {
    if (typeof XMLHttpRequest != 'undifined') {
        return new XMLHttpRequest();
    } else {
        return false;
    }
}

const xhr = createXHR();

export default function (url) {
    return new Promise(function (resolve, reject) {
        if (xhr === false) {
            reject(new Error('Not XHR'));
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200 || xhr.status === 304) {
                    resolve(xhr.responseText);
                } else {
                    reject(new Error('Not Found'));
                }
            }
        }

        xhr.open('get', url, true);
        xhr.send(null);
    });
}
