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
    getCalculatedReturnsStr(MFData,  period , mfId ,dateStart ,dateEnd )
    {
        var str = "<table>";
        str+= "<th>Month</th><th>Returns</th><th>calculation</th>"
        str+= "<tr>";
        for(var i=0;i<2;i++)
            str+= ("<td>row" + i + "</td>");
        str+= "</tr>";
        str+= "</table>";
        return str;
    }
  
}