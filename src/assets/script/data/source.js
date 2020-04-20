class DataSource {
    static search(keyword) {
        return fetch(`https://api.kawalcorona.com/`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return responseJson.filter(country => {
                return country.attributes.Country_Region.toUpperCase() === (keyword.toUpperCase());
            })
        })
        .then(filteredcountries => {
            if(filteredcountries.length) {
                const [country] = filteredcountries;
                return Promise.resolve(country);
            } else {
                return Promise.reject(`${keyword} tidak ditemukan.`);
            }
        });
    }
}

export default DataSource;