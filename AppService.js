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
        var currDate = new Date(dateEnd);

        var str = "";//"<table>";
        str+= "<thead><tr><th>Month</th><th>Returns</th><th>calculation</th></tr></thead>"
        
        
        str+= "<tbody>";
        while(formatter.compareDates(dateStart, currDate)!=-1)
        {
            var currStartNavDate = new Date(currDate);
            currStartNavDate = currStartNavDate.addYears(-1);
            var currEndNavDate = new Date(currDate);
            var rowDetails = this.getRowDetails(currStartNavDate, currEndNavDate);
            

            str+= "<tr>";
            str+= rowDetails;
            str+= "</tr>";
            currDate = currDate.addMonths(-1) ; //formatter.addMonths(currDate, -1, dayInDateEnd);
        }
        // for(var row = 0;row<5;row++)
        // {
        //     str+= "<tr>";
        //     for(var col=0;col<2;col++)
        //         str+= ("<td>col" + col + "</td>");
        //     str+= "</tr>";
        // }
        str+= "</tbody>";
        return str;
    }
    getRowDetails = function(startNavDate, endNavDate)
    {
        var strRow = "";
        //Month
        strRow+= "<td>";
        strRow+= endNavDate.toString("MMM-yy");
        strRow+= "</td>";

         //Returns
         strRow+= "<td>";
         strRow+= endNavDate.toString("MMM-yy");
         strRow+= "</td>";

         //Month
         strRow+= "<td>";
         strRow+= ("Start Nav: "+startNavDate.toString("dd-MMM-yy")+"\t\t");
         strRow+= ("End Nav: "+endNavDate.toString("dd-MMM-yy"));strRow+= "</td>";
        return strRow;
    }
  
}