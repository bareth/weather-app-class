import axios from 'axios';

export default axios.create({
    baseURL: 'http://dataservice.accuweather.com/',
    params: {
        apikey: 'dbRZ0pAlCxRh2VnbS40aeIdXSA09HHpn',
    }
    
  });
