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
        var str = "";//"<table>";
        str+= "<thead><tr><th>Month</th><th>Returns</th><th>calculation</th></tr></thead>"
        for(var row = 0;row<5;row++)
        {
            str+= "<tbody><tr>";
            for(var col=0;col<2;col++)
                str+= ("<td>col" + col + "</td>");
            str+= "</tr>";
        }
        str+= "</tbody>";
        return str;
    }
  
}