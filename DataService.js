class DataService
{
    constructor()
    {
      this.dataModel = new DataModel();
    }
    getJSON = function(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function() {
          var status = xhr.status;
          if (status === 200) {
            callback(null, xhr.response);
          } else {
            callback(status, xhr.response);
          }
        };
        xhr.send();
    };
    setMFData = function(data)
    {
      this.dataModel.setMFData(data);
      //prepare map [date] = nav
      var MFData = data.data;
      var tempMFMap = {};
      for(var entrySet of MFData)
      {
        tempMFMap[entrySet["date"]] = entrySet["nav"];
      }
      if(MFData.length>0)
      {
        tempMFMap["endDate"] = MFData[0]["date"];
        tempMFMap["startDate"] = MFData[MFData.length-1]["date"];
      }
      this.dataModel.setMFDataMap(tempMFMap);
    }
    getMFDataMap = function(data)
    {
      
      return this.dataModel.getMFDataMap();
    }
}