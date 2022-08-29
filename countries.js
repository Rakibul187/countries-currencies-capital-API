const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    /* for (const country of countries) {
        console.log(country.name)
    } */
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country)
        // console.log(country.continents[0])
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
        <h3> Name: ${country.name.common}</h3>
        <p><span> Capital:</span> ${country.capital ? country.capital[0] : 'No Capital'}</p>
        
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;

        countriesContainer.appendChild(countryDiv)
        // <img src="${country.flags.png}"> 
    })
}

const loadCountryDetail = code => {
    // console.log('code :', code)
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    console.log(country)
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h3>Name: ${country.name.common}</h3>
    <h5><span>Official:</span> ${country.name.official}</h5>
    <p><span>Continent:</span> ${country.continents[0]}, <span>Currencies:</span> ${Object.keys(country.currencies)[0]}</p>
    <p><span>Land Area:</span> ${country.area}, <span>Population:</span> ${country.population}</p>
    <p><span>Borders:</span> ${country.borders}</p>
    <img id="flags" src="${country.flags.png}">
    `
}
loadCountries()