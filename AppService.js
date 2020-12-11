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
      return Math.round(10000*(Math.pow(lhs, rhs)-1))/100;
    }
    getCalculatedReturnsStr(MFData,  period , mfId ,dateStart ,dateEnd )
    {
        var currDate = new Date(dateEnd);

        var str = "";//"<table>";
        str+= "<thead><tr><th>Month</th><th>Returns</th><th>start Nav</th><th>End Nav</th><th>Start Date</th><th>End Date</th></tr></thead>"
        
        
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
         strRow+= this.getReturnsForPeriod(startNavDate, endNavDate,1);
         strRow+= "</td>";

         //Month
         strRow+= "<td>";
         strRow+= (startNavDate.toString("dd-MMM-yy")+"\t\t");
         strRow+= "</td>";
        
         strRow+= "<td>";
         strRow+= (endNavDate.toString("dd-MMM-yy"));
         strRow+= "</td>";
        return strRow;
    }
    getReturnsForPeriod = function(startNavDate, endNavDate,years)
    {
        var MFEndDate = new Date(MFData["endDate"]);
        var MFStartDate = new Date(MFData["startDate"]);
        if(formatter.compareDates(startNavDate,MFStartDate)==1)
            startNavDate = MFStartDate;
        if(formatter.compareDates(endNavDate,MFEndDate)==-1)
            endNavDate = MFEndDate;
        var startNav = this.getNAVForDate(startNavDate);
        var endNav = this.getNAVForDate(endNavDate);
        startNav = Math.round(startNav * 100) / 100;
        endNav = Math.round(endNav*100)/100;
        var str = this.getReturns(startNav ,endNav ,1);
        str+= ("%" + "</td><td>"+startNav + "</td><td>"+endNav);
        return str;        
    }
    getNAVForDate = function(date)
    {
        if(MFData[date.toString("dd-MM-yyyy")])
            return MFData[date.toString("dd-MM-yyyy")];
        for(var i=0;i<10;i++)
        {
            date.addDays(-1);
            if(MFData[date.toString("dd-MM-yyyy")])
                return MFData[date.toString("dd-MM-yyyy")];
        }
        return 1;
    }
  
}