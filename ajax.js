function ajax(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url);

        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            if (/^2(\d+)/.test(this.status)) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }

        xhr.onerror = function() {
            reject(new Error(this.statusText))
        }

        xhr.responseType = 'json';
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send();
    })
}

ajax('https://www.baidu.com/').then(console.log)