var json = require('json-file');
var file = json.read('./pageObjects/billingAndPayments.page.json');

class BillingAndPayments {

    get sliderBar() { return $(file.get('billingAndPayments.selector.sliderBar')); }
    get sliderBarMonthMarker() { return $(file.get('billingAndPayments.selector.sliderBarMonthMarker')); }
    get sliderHandleStart() { return $(file.get('billingAndPayments.selector.sliderHandleStart')); }
    get sliderHandleEnd() { return $(file.get('billingAndPayments.selector.sliderHandleEnd')); }

  }
  
  module.exports = new BillingAndPayments();