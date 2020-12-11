class AppService
{
    
    constructor()
    {
        this.dataService = new DataService();
    }
    getJSON(url, callback)
    {
        return this.dataService.getJSON(url, callback);
    }
    getMFDataMap = function(data)
    {
      return  this.dataService.getMFDataMap(data);
    }
    getReturns = function(startVal, endVal, years)
    {
      var TR = (endVal - startVal)/startVal;
      var lhs = 1+TR;
      var rhs = 1/years;
      return Math.round(100*(Math.pow(lhs, rhs)-1));
    }
  
}