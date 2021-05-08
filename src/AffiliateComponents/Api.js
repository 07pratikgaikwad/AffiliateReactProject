import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://welcomecure.com/DataProvider/API/Country/GetCountryList',
    headers: {
        "UserName":"WelcomeWebApi",
        "Password":"welcomecure123"
    }
});

export default {
    stockTimeSeries: (symbol) =>
    instance({
        'method':'POST',
        'url':'http://welcomecure.com/DataProvider/API/Country/GetCountryList'
        
    })
}