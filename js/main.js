'use strict';

const apiKey = ''; // API KEY DE OPENWEATHER
let key = ''; //API DE GOOGLE MAP

let aDatos = [];

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");

let ul = document.querySelector("section div ul");

let body = document.getElementsByTagName('body')[0];

form.addEventListener("submit", e => {
    e.preventDefault();
    const inputVal = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&lang=es&appid=${apiKey}&units=metric`;

    let urlMap = `https://www.google.com/maps/embed/v1/search?key=${key}&q=${inputVal}&maptype=roadmap&language=es`;

    fetch(url)
        .then(
            function (response) {
                response.json().then(function (data) {
                    const {
                        main,
                        name,
                        sys,
                        weather,
                        wind
                    } = data;
                    const icon = `https://openweathermap.org/img/wn/${
    weather[0]["icon"]
    }@2x.png`;
                    let li = document.createElement('li');
                    ul.appendChild(li);

                    let grid0 = document.createElement('div');
                    grid0.className = 'grid-0'
                    li.appendChild(grid0);

                    let h2 = document.createElement('h2');
                    h2.textContent = name;
                    h2.className = 'city-name';
                    grid0.appendChild(h2);
                    let span = document.createElement('sup');
                    span.textContent = sys.country;
                    h2.appendChild(span);

                    const grid1 = document.createElement("div");
                    grid1.classList.add("cont-1");
                    li.appendChild(grid1);

                    let cont1 = document.createElement('div');
                    grid1.appendChild(cont1);
                    let maxima = document.createElement('p');
                    maxima.textContent = 'Maxima: ';
                    cont1.appendChild(maxima);
                    let temMax = document.createElement('span');
                    temMax.textContent = main.temp_max;
                    maxima.appendChild(temMax);
                    let sup1 = document.createElement('sup');
                    sup1.textContent = '°C';
                    temMax.appendChild(sup1);

                    let figure1 = document.createElement('figure');
                    grid1.appendChild(figure1);
                    let img1 = document.createElement('img');
                    img1.src = "img/minMax.svg";
                    figure1.appendChild(img1);

                    let cont3 = document.createElement('div');
                    grid1.appendChild(cont3);
                    let minima = document.createElement('p');
                    minima.textContent = 'Minima: ';
                    cont3.appendChild(minima);
                    let temMin = document.createElement('span');
                    temMin.textContent = main.temp_min;
                    minima.appendChild(temMin);
                    let sup2 = document.createElement('sup');
                    sup2.textContent = '°C';
                    temMin.appendChild(sup2);

                    const grid2 = document.createElement("div");
                    grid2.classList.add("cont-2");
                    li.appendChild(grid2);

                    let cont4 = document.createElement('div');
                    grid2.appendChild(cont4);
                    let humedad = document.createElement('p');
                    humedad.textContent = 'Humedad: ';
                    cont4.appendChild(humedad);
                    let temHum = document.createElement('span');
                    temHum.textContent = main.humidity;
                    humedad.appendChild(temHum);
                    let sup3 = document.createElement('sup');
                    sup3.textContent = '%';
                    temHum.appendChild(sup3);

                    let figure2 = document.createElement('figure');
                    cont4.appendChild(figure2);
                    let img2 = document.createElement('img');
                    img2.src = "img/humedad.svg";
                    figure2.appendChild(img2);

                    let cont5 = document.createElement('div');
                    grid2.appendChild(cont5);
                    let precion = document.createElement('p');
                    precion.textContent = 'Preción atmosferica: ';
                    cont5.appendChild(precion);
                    let temPre = document.createElement('span');
                    temPre.textContent = main.pressure;
                    precion.appendChild(temPre);
                    let sup4 = document.createElement('sup');
                    sup4.textContent = '°C';
                    temPre.appendChild(sup4);

                    let figure3 = document.createElement('figure');
                    cont5.appendChild(figure3);
                    let img3 = document.createElement('img');
                    img3.src = "img/presion-atmosferica.svg";
                    figure3.appendChild(img3);

                    let cont6 = document.createElement('div');
                    grid2.appendChild(cont6);
                    let viento = document.createElement('p');
                    viento.textContent = 'Velocidad de viento: ';
                    cont6.appendChild(viento);
                    let temVie = document.createElement('span');
                    temVie.textContent = wind.speed;
                    viento.appendChild(temVie);
                    let sup5 = document.createElement('sup');
                    sup5.textContent = 'km/h';
                    temVie.appendChild(sup5);

                    let figure4 = document.createElement('figure');
                    cont6.appendChild(figure4);
                    let img4 = document.createElement('img');
                    img4.src = "img/velViento.svg";
                    figure4.appendChild(img4);

                    let cont7 = document.createElement('div');
                    grid2.appendChild(cont7);
                    let descripcion = document.createElement('p');
                    descripcion.textContent = weather[0]["description"];
                    cont7.appendChild(descripcion);

                    let figure5 = document.createElement('figure');
                    cont7.appendChild(figure5);
                    let img5 = document.createElement('img');
                    img5.src = icon;
                    img5.alt = weather[0]["main"];
                    figure5.appendChild(img5);

                    
                    let figure6 = document.createElement('figure');
                    figure6.className = 'map';
                    li.appendChild(figure6);
                    let contMap = document.createElement('iframe');
                    contMap.src = urlMap;
                    contMap.allowFullscreen = true;
                    figure6.appendChild(contMap);

                    window.localStorage.setItem('Datos', JSON.stringify(li));

                    let img = weather[0]["main"];
                    console.info('dato: ', img);

                    switch (img) {
                        case 'Thunderstorm': //TORMENTA
                            body.style.cssText = 'background-color: #A0C4FF !important' //colores[5];
                            break;
                        case 'Drizzle': //LLOVISNA
                            body.style.cssText = 'background-color: #FFC6FF !important' //colores[7];
                            break;
                        case 'Rain': //LLUVIA
                            body.style.cssText = 'background-color: #A0C4FF !important' //colores[5];
                            break;
                        case 'Snow': //NIEVE
                            body.style.cssText = 'background-color: #FFFFFC !important' //colores[8];
                            break;
                        case 'Mist': //NEBLINA
                            body.style.cssText = 'background-color: #9BF6FF !important' //colores[4];
                            break;
                        case 'Smoke': //HUMO
                            body.style.cssText = 'background-color: #FFADAD !important' //colores[0];
                            break;
                        case 'Haze': //NEBLINA
                            body.style.cssText = 'background-color: #9BF6FF !important' //colores[4];
                            break;
                        case 'Dust': //POLVO
                            body.style.cssText = 'background-color: #FFD6A5 !important' //colores[1];
                            break;
                        case 'Fog': //NIEBLA
                            body.style.cssText = 'background-color: #9BF6FF !important' //colores[4];
                            break;
                        case 'Sand': //ARENA
                            body.style.cssText = 'background-color: #FDFFB6 !important' //colores[2];
                            break;
                        case 'Ash': //CENIZA
                            body.style.cssText = 'background-color: #CAFFBF !important' //colores[3];
                            break;
                        case 'Squall': //RAFAGA
                            body.style.cssText = '#A0C4FF !important' //colores[5];
                            break;
                        case 'Tornado': //
                            body.style.cssText = '#BDB2FF !important' //colores[6];
                            break;
                        case 'Clear': //CLARO
                            body.style.cssText = '#9BF6FF !important' //colores[4];
                            break;
                        default:
                        case 'Clouds': //NUBES
                            body.style.cssText = 'FFFFFC !important' //colores[8];
                            break;
                    }

                });
            }
        )
        .catch(() => {
            msg.textContent = "Por favor ingresa una ciudad valida";
        });

    msg.textContent = "";
    form.reset();
});