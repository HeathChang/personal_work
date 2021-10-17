import axios from 'axios';

axios.create({
    baseURL: 'http://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NiTif1HhcgTVaT4CvHQW114LHUO_GqaJCmQRuCGU9yI', 
      }
}); //end axios.create

export default axios;