class DataService
{
    constructor()
    {

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
    getMFDataMap = function(data)
    {
      var tempMFMap = {};
      for(var entrySet of data)
      {
        tempMFMap[entrySet["date"]] = entrySet["nav"];
      }
      if(data.length>0)
      {
        tempMFMap["endDate"] = data[0]["date"];
        tempMFMap["startDate"] = data[data.length-1]["date"];
      }
      return tempMFMap;
    }
}