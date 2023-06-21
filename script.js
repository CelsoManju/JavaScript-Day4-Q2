


async function construct(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://restcountries.com/v3.1/all', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        console.log(data);
        data.forEach(e=>{
            let div =  document.createElement('div');
            div.innerHTML = `<div class="card cardwrapper" style="width: 25rem;">
            <img src="${e.flags.svg}" class="card-img-top" alt="${e.flags.alt}">
            <div class="card-body">
              <h4 class="card-title">Name:${e.name.common}</h4>
              <h6 class="card-text">Region:${e.region?e.region:""}</h6>
              <h6 class="card-text">Sub-Region:${e.subregion?e.subregion:""}</h6>
              <h6 class="card-text">Population:${e.population?e.population:""}</h6>
              </div>
          </div>`
            document.body.appendChild(div);
        });
      }
    };
    xhr.send();
}
construct();