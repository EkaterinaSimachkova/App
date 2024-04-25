import axios from 'axios';

export default async function getCurrenciesRates() {
    try{
        let result = []
        const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
        const valutes = response.data.Valute
        for (let valute in valutes) {
            const el = valutes[valute]
            result.push({ 
                id: el.ID, 
                name: el.CharCode,
                fullName: el.Name,
                nominal: el.Nominal,
                value: el.Value
            })
        }
        console.log(result)
        return result
    } catch(error) {
        if (error.response) {
            // Запрос был сделан, и сервер ответил кодом состояния, который выходит за пределы 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // Запрос был сделан, но ответ не получен `error.request`- это экземпляр XMLHttpRequest в браузере
            console.log(error.request);
        } else {
            // Произошло что-то при настройке запроса, вызвавшее ошибку
            console.log('Error', error.message);
        }
        console.log(error.config);
    };
  }
