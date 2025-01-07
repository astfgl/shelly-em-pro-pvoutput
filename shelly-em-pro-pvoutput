/*
  PVOutput configuration
  You MUST update your API Key and System Id
*/
let CONFIG = {
  pvURL: "https://pvoutput.org/service/r2/addstatus.jsp";
  httpHeaders: {
    "X-Pvoutput-Apikey": "<API Key>",
    "X-Pvoutput-SystemId": "<System Id>",
    "Content-Type": "application/x-www-form-urlencoded"
  },
};

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
print(myDateString);

