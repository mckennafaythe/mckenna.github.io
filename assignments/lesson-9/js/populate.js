    var section = document.querySelector('section');

    var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    if (town.name == 'Preston') {img.src = /images/preston.jpeg}
    elseif(town.name == 'Soda Springs') {img.src = images/sodasprings.jpeg}
    else {img.src = images/fishhaven.jpeg}

    request.onload = function() {
        let towndata = request.response;
        let towns = towndata['towns'];

        let output = document.querySelector('section');

        let output = document.querySelector('section');

        towns.forEach(town => {
        if (town.name == 'Soda Springs') {
        et myH3 = document.createElement('h3');
        let theP = document.createElement('p');
        myH3.textContent = town.name;
        theP.textContent = town.motto;
        output.appendChild(myH3);
        output.appendChild(theP);

    }

    function populateHeader(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['squadName'];
        header.appendChild(myH1);

        var myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
        header.appendChild(myPara);
    }