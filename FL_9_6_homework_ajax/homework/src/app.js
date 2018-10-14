const http = {
    get: function(url){
       return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                const error = new Error(xhr.statusText);
                error.code = xhr.status;
                reject(error);
            }
        };
        xhr.onerror = () => {
            reject(new Error('Error'));
        };
        xhr.send();
       });
    }
};
const trackBtn = document.getElementById('track');
const lat = document.getElementById('latitude-input');
const lon = document.getElementById('longitude-input');
const loadSection = document.getElementById('load');
const water = document.getElementById('water');
const land = document.getElementById('land');
trackBtn.addEventListener('click', function() { 
    loadSection.classList.add('loader');
    http.get('https://api.onwater.io/api/v1/results/' + lat.value + ',' + lon.value)
    .then(function(res){
        let resultObj = JSON.parse(res);
        loadSection.classList.remove('loader');
        if (resultObj.water) {
            water.classList.add('water-animation');
        } else {
            land.classList.add('land-animation');
        }
    })
    .catch(error => {
        loadSection.classList.remove('loader');
        return console.log('Error:' + error);
    });
});