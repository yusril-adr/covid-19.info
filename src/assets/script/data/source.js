class DataSource {
    static search(keyword) {
        return fetch(`https://api.kawalcorona.com/`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if (responseJson === null) {
                return Promise.reject(`Api sedang down, mohon coba lagi nanti setelah beberapa saat.`);
            }
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