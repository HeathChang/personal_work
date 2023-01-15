import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NiTif1HhcgTVaT4CvHQW114LHUO_GqaJCmQRuCGU9yI', 
      }
}); //end axios.create

