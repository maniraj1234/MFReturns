  var appService = new AppService();
  var formatter = new Formatter();
  onClickCalculateReturns = function()
  {
    var inputValidationError = getInputValidationError();
    if(inputValidationError!="")
    {
        alert(inputValidationError);
        return;
    }
    // var horizon = 1;
    period = document.getElementById('period').value;
    mfId = document.getElementById('folioID').value;
    dateStart = new Date(document.getElementById('startDate').value);
    dateEnd = new Date(document.getElementById('endDate').value);
    appService.getJSON('https://api.mfapi.in/mf/'+mfId, onMFDataLoaded);
  }
  onMFDataLoaded = function(err, data) {
      if (err !== null) {
        alert('Something went wrong: ' + err);
      } else {
          if(data && data.data && data.data.length==0)
          {
            alert('No Data Found for this scheme id!');
            return;
          }
        //console.log(JSON.stringify(data));
        console.log(appService.getReturns(1000,2500,7));
        MFData = appService.getMFDataMap(data.data);
        populateReturns();
      }
  }
  populateReturns = function()
  {
    //MFData,  period , mfId ,dateStart ,dateEnd 
    var strReturns = appService.getCalculatedReturnsStr(MFData,  period , mfId ,dateStart ,dateEnd );
    document.getElementById('resultstable').innerHTML = strReturns;

  }
  getInputValidationError = function()
  {
    var errMessage = "";
    var mfId = document.getElementById('folioID').value;
    if(mfId=="" || mfId<=0)
        errMessage = errMessage + "Foilo Id is Invalid";
    
    var period = document.getElementById('period').value;
    if(period=="" || period<=0)
        errMessage = errMessage + "\n Period number is Invalid";
        
    var dateStart = new Date(document.getElementById('startDate').value);
    if(!formatter.isValidDate(dateStart))
        errMessage = errMessage + "\n Start date is Invalid";

    var dateEnd = new Date(document.getElementById('endDate').value);
    if(!formatter.isValidDate(dateEnd))
        errMessage = errMessage + "\n end date is Invalid";

    if(formatter.compareDates(startDate,new Date().today()) == -1)
        errMessage = errMessage + "\n Start date can't be in future";
        
    if(formatter.compareDates(endDate,new Date().today()) == -1)
    errMessage = errMessage + "\n End date can't be in future";

    if(formatter.compareDates(dateStart,dateEnd)<=0)
        errMessage+= "start date should be less than end date";
    
    return errMessage;
  }
 