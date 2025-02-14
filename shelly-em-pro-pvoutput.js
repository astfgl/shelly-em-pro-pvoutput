/*
  PVOutput configuration
  You MUST update your API Key and System Id
*/
let CONFIG = {
  pvURL: "https://pvoutput.org/service/r2/addstatus.jsp";
  httpHeaders: {
    "X-Pvoutput-Apikey": "<API Key>", /* eg "12345" */
    "X-Pvoutput-SystemId": "<System Id>", /* eg "b7ea8f3cd62...e2af72b" */
    "Content-Type": "application/x-www-form-urlencoded"
  },
};

let updateInterval = 5 * 60 * 1000; /* 5 minutes */

/* State information for Energy and Power calculation */
var solarImportTotal;
var solarExportTotal;
var gridImportTotal;
var gridExportTotal;

/* Today's date in YYYYMMDD format, for the device's current timezone */
var myDate = new Date();
var myDateString = myDate.getFullYear() 
  + ('0' + (myDate.getMonth()+1)).slice(-2) 
  + ('0' + myDate.getDate()).slice(-2);
console.log("Today is ", myDateString);

