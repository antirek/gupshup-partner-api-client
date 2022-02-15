# gupshup-partner-api-client

Unofficial Gupshup Partner API client

[Partner API](https://www.gupshup.io/docs/partner/)

`````javascript
const {GupshupPartner} = require('gupshup-partner-api-client');

const app = new GupshupPartner.App({
    APP_ID: 'XXXX',
    APP_TOKEN: 'XXXXX',
});

async function run () {
    // const response = await app.getRatings();
    // const response = await app.setCallbackUrl('http://test.ru/L0001');

    // const response = await app.getTemplates();
    // const response = await app.getBalance();
    const response = await app.getUserStatus('79135292926');
    console.log(response.data);
}

(run)();
`````
