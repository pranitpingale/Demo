const { Given, When, Then } = require('cucumber')

Given(/^user navigates to messages$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.msgarrowDown.click()
  browser.pause(5000)
  console.log("message arrow clicked")
});

When(/^user see the messages available in the section with message icon and title$/, function () {

  dashboardPage.messageIcon.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.messageIcon.isExisting()) 
  dashboardPage.messageTitle.waitForExist(2000)
  commonLib.assertValue(true, dashboardPage.messageTitle.isExisting()) 
   

});

Then(/^user can download the selected pdf messages$/, function () {

    //dashboardPage.conservationTipsText.waitForExist(10000)
    dashboardPage.btnDownload.click()
    console.log("download clicked")
    browser.pause(3000)

});

Given(/^user navigates to Open Request$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.requestarrowDown.click()
  browser.pause(5000)
  console.log("alerts arrow clicked")
});

When(/^user see the open request available in the section or not$/, function () {

  dashboardPage.noAlerts.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.noAlerts.isExisting())   

});

Given(/^user navigates to alerts$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.alertarrowDown.click()
  browser.pause(5000)
  console.log("message arrow clicked")
});

When(/^user see the alerts available in the section with each having alert icon$/, function () {

  dashboardPage.alertIcon.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.alertIcon.isExisting()) 

});

Then(/^user see the alerts available in the section with each having alert title$/, function () {

   dashboardPage.alertTitle.waitForExist(2000)
   commonLib.assertValue(true, dashboardPage.alertTitle.isExisting()) 
   browser.pause(1000)

});


Given(/^user again navigates to alerts$/, function () {
  
  //dashboardPage.headerusageMenu.waitForExist(10000)
  dashboardPage.alertarrowDown.click()
  browser.pause(5000)
  console.log("message arrow clicked")
});

When(/^user see the alerts available in the section with each of them having the alert icon$/, function () {

  dashboardPage.alertIcon.waitForExist(4000)
  commonLib.assertValue(true, dashboardPage.alertIcon.isExisting()) 

});

Then(/^user see the latest alert is displaying on the top$/, function () {

   var monthsName = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

   dashboardPage.alertTitle1.waitForExist(2000)
   commonLib.assertValue(true, dashboardPage.alertTitle1.isExisting())
  //  var alertTitle1 =  dashboardPage.alertTitle1.getText()
   //var alertTimestamp1 =  dashboardPage.alertTimestamp1.getText()





   browser.pause(2000)

    var alertTimestamp1 =  dashboardPage.alertTimestamp1.getText()
    var alertTimestamp2 =  dashboardPage.alertTimestamp2.getText()
    var alertTimestamp3 =  dashboardPage.alertTimestamp3.getText()

    console.log("#################################")
    console.log(alertTimestamp1)
    console.log("#################################")
    console.log(alertTimestamp2)
    console.log("#################################")
    console.log(alertTimestamp3)

    var timestamps = ['alertTimestamp1', 'alertTimestamp2', 'alertTimestamp3'];
    var testSuccess = true;
    for(let i=0; i<timestamps.length; i++){
    if(!!timestamps[i] && !!timestamps[i+1] && testSuccess){
        var firstDateSplit = timestamps[i].split(" ");
        var secondDateSplit = timestamps[i+1].split(" ");

        var date1 = {"day":firstDateSplit[1],"monthIndex": monthsName.indexOf(firstDateSplit[0])};

        var date2 = {"day":secondDateSplit[1],"monthIndex": monthsName.indexOf(secondDateSplit[0])};


        if(date1.day>=date2.day && date1.monthIndex>=date2.monthIndex){
            // testSuccess = false;
        }else{
            testSuccess = false;
        }
    }
  }

  if(testSuccess){
    console.log("test is successful")
  }

    //var firstDate = "Jul 28";
    // var firstDateSplit = alertTimestamp1.split(" ");
    // var secondDateSplit = alertTimestamp2.split(" ");

    // var date1 = {"day":firstDateSplit[1],"monthIndex": monthsName.indexOf(firstDateSplit[0])};

    // var date2 = {"day":secondDateSplit[1],"monthIndex": monthsName.indexOf(secondDateSplit[0])};


    // for(i=0; i<=3; i++){
    // if(date1.day>=date2.day && date1.monthIndex>=date2.monthIndex){
    //   console.log('First alert is grater than second');
    // }else{
    //   console.log('First alert is laser than second');      
    // }
    // }
    // //var date2 =  dashboardPage.alertTimestamp1.getText()

    // var compareDates = [];
    // compareData.push(date1);


    // if(date1.monthIndex >= date2.monthIndex) {
  	// console.log("Date1 is greater than Date2");
    // } else if(date1.monthIndex < date2.monthIndex) {
	  // console.log("Date2 is greater than Date1");
    // } else {
    // if(date1.day >= date2.day) {
	  // console.log("Date1 is greater than Date2");
    // } else if(date1.day < date2.day) {
    // console.log("Date2 is greater than Date1");
    // }
  // }

  // for(var i = 0; i < compareData.length; i++){

  // }

});
