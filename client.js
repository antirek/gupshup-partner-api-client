const axios = require('axios');

class Client {
  constructor () {    
    this.url = {
      login: 'https://partner.gupshup.io/partner/account/login',
      ratings: `https://partner.gupshup.io/partner/app/${this.APP_ID}/ratings`,
    };

    this.config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        token: this.APP_TOKEN,
      },
    };
  };

  /**
   * 
   * @param {*} data 
   * @returns 
   */
  getUrlEncodedData = (data) => {
    const resultantData = new URLSearchParams();
    Object.keys(data).forEach(key => {
      resultantData.append(key, typeof data[key] === 'object' ? JSON.stringify(data[key]) : data[key]);
    });
    return resultantData;
  };

  /**
   * 
   * @returns 
   */
  getPartnerToken = async (email, password) => {
    const params = this.getUrlEncodedData({
      email,
      password,
    });

    return await axios.post(this.url.login, params);
  }

  getPartnerAppsList = async () => await axios.get(this.url.partnerAllApps, this.config);
}

module.exports = {
  Client,
}
