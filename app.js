const axios = require('axios');

class App {
  constructor ({APP_ID, APP_TOKEN}) {
    this.APP_ID = APP_ID;
    this.APP_TOKEN = APP_TOKEN;

    this.url = {
      ratings: `https://partner.gupshup.io/partner/app/${this.APP_ID}/ratings`,
      callback: `https://partner.gupshup.io/partner/app/${this.APP_ID}/callbackUrl`,
      templates: `https://partner.gupshup.io/partner/app/${this.APP_ID}/templates`,
      balance: `https://partner.gupshup.io/partner/app/${this.APP_ID}/wallet/balance`,
      userStatus: `https://partner.gupshup.io/partner/app/${this.APP_ID}/userStatus`,
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

  getRatings = async () => await axios.get(this.url.ratings, this.config);

  getTemplates = async () => await axios.get(this.url.templates, this.config);

  getBalance = async () => await axios.get(this.url.balance, this.config);

  getUserStatus = async (phone) => {
    return await axios.get(`${this.url.userStatus}?phone=${phone}`, this.config);
  }

  setCallbackUrl = async (callbackUrl) => {
    const params = this.getUrlEncodedData({
      callbackUrl,
    })
    return await axios.put(this.url.callback, params, this.config);
  }
}

module.exports = {
  App,
}
