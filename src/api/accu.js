import axios from 'axios';

export default axios.create({
    baseURL: 'http://dataservice.accuweather.com/locations/v1/cities/search',
    params: {
        apikey: 'dbRZ0pAlCxRh2VnbS40aeIdXSA09HHpn',
    }
    
  });