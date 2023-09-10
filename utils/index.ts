export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': '278db7a4edmsh2b6b59f873d50abp125c3ajsn3ceabed180f3',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', { headers: headers });

    const result = await response.json();

    return result;
}