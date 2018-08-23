var json = require('json-file');
var file = json.read('./pageObjects/billingAndPayments.page.json');

class BillingAndPayments {

    get sliderBar() { return $(file.get('billingAndPayments.selector.sliderBar')); }

  }
  
  module.exports = new BillingAndPayments();