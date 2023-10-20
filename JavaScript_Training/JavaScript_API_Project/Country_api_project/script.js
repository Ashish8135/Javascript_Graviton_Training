let country_name = document.querySelector('.search_country');
let btn_val = document.querySelector('.btn-cntry');


btn_val.addEventListener("click",()=>{
    let contryname = country_name.value;
    let country_url =`https://restcountries.com/v3.1/name/${contryname}`;
    // console.log(country_url)
    fetch(country_url)
    .then((response) => response.json())
    .then((data)=>{
        console.log(data[0])
        console.log(data[0].name.common)
        console.log(data[0].capital[0])
        console.log(data[0].borders)
        console.log(Object.keys(data[0].currencies)[0])
        console.log(data[0].continents)
        console.log(data[0].flags.svg)
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name)
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        result.innerHTML=`
        <img src = "${data[0].flags.svg}" class ="flag-img">

        <h2><span></span> ${data[0].name.common}</h2>
        

        <div class= "wrapper">
        <div class= "data-wrapper">
        <h4>Capital : </h4>
        <span style="color:Green">${data[0].capital[0]}</span> 
        </div>

        <div class= "data-wrapper">
        <h4>Border : </h4>
        <span style="color:Green">${data[0].borders}</span>
        </div>

        <div class= "data-wrapper">
        <h4>Continent : </h4>
        <span style="color:Green">${data[0].continents}</span>
        </div>

        <div class= "data-wrapper">
        <h4>Currencies : </h4>
        <span style="color:Green">${Object.keys(data[0].currencies)[0]}</span> 
        </div>

        <div class= "data-wrapper">
        <h4>Currencies Name : </h4>
        <span style="color:Green">${data[0].currencies[Object.keys(data[0].currencies)].name}</span> 
        </div>

        <div class= "data-wrapper">
        <h4>Language : </h4>
        <span style="color:Green">${Object.values(data[0].languages).toString().split(",").join(",")}</span> 
        </div>

        <div class= "data-wrapper">
        <h4>Population : </h4>
        <span style="color:Green">${data[0].population.toLocaleString('en-IN')}</span> 
        </div>
        </div>
        `;
    })
});
