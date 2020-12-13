class StatisticsService
{
    constructor()
    {

    }
    getCalculatedReturnsStr = function(MFData,  period , mfId ,dateStart ,dateEnd , years)
    {
        var currDate = new Date(dateEnd);

        var str = "";//"<table>";
        str+= "<thead><tr><th>Month</th><th>Returns</th><th>start Nav</th><th>End Nav</th><th>Start Date</th><th>End Date</th></tr></thead>"
        
        
        str+= "<tbody>";
        while(formatter.compareDates(dateStart, currDate)!=-1)
        {
            var currStartNavDate = new Date(currDate);
            currStartNavDate = currStartNavDate.addYears(-years);
            var currEndNavDate = new Date(currDate);
            var rowDetails = this.getRowDetails(currStartNavDate, currEndNavDate, years);
            

            str+= "<tr>";
            str+= rowDetails;
            str+= "</tr>";
            currDate = currDate.addMonths(-1) ; 
        }
        str+= "</tbody>";
        return str;
    }
    getRowDetails = function(startNavDate, endNavDate, years)
    {
        var strRow = "";
        //Month
        strRow+= "<td>";
        strRow+= endNavDate.toString("MMM-yy");
        strRow+= "</td>";

         //Returns
         strRow+= "<td>";
         strRow+= this.getReturnsForPeriod(startNavDate, endNavDate, years);
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
    getReturns = function(startVal, endVal, years)
    {
        if(startVal==0||years<=0)
            return 0;
        var TR = (endVal - startVal)/startVal;
        var lhs = 1+TR;
        var rhs = 1/years;
        return Math.round(10000*(Math.pow(lhs, rhs)-1))/100;
    }
    getReturnsForPeriod = function(startNavDate, endNavDate,years)
    {
        var startNav = this.getNAVForDate(startNavDate);
        var endNav = this.getNAVForDate(endNavDate);
        startNav = Math.round(startNav * 100) / 100;
        endNav = Math.round(endNav*100)/100;
        var str = this.getReturns(startNav ,endNav , years);
        str+= ("%" + "</td><td>"+startNav + "</td><td>"+endNav);
        return str;        
    }
    getNAVForDate = function(date)
    {
        if(MFData[date.toString("dd-MM-yyyy")])
            return MFData[date.toString("dd-MM-yyyy")];

        var MFEndDate = new Date(MFData["endDate"]);
        var MFStartDate = new Date(MFData["startDate"]);
        //date<MFStartdate
        if(formatter.compareDates(date,MFStartDate)==1)
            return 0;
        //date>MFEnddate(last day in data)
        if(formatter.compareDates(date,MFEndDate)==-1)
           return 0;
        for(var i=0;i<120;i++)
        {
            date.addDays(1);
            if(MFData[date.toString("dd-MM-yyyy")])
                return MFData[date.toString("dd-MM-yyyy")];
        }
        return 0;//this.getNAVForDate(MFData["startDate"]);
    }
}