class Formatter
{
    constructor()
    {

    }
    isValidDate = function(d) {
        return d instanceof Date && !isNaN(d);
    }
    //returns 0 if d1==d2, 1 if d1 is lesser, -1 if d2 is lesser
    compareDates(d1,d2)
    {
        if(!d1)
            return 1;
        if(!d2)
            return -1;
        var t1 = d1.getTime();
        var t2 = d2.getTime();
        if(t1==t2)
            return 0;
        if(t1<t2)
            return 1;
        return -1;

    }
    // addMonths = function(currDate, months , dayInDateEnd)
    // {
    //     var tmpDate = new Date(currDate);
    //     var newMonth = tmpDate.getMonth()+months;
    //     tmpDate.setMonth(newMonth);
    //     var newDate = this.getMaxPossibleDayForMonth(tmpDate.getYear(), tmpDate.getMonth(), dayInDateEnd);
    //     tmpDate.setDate(newDate);
    //     return tmpDate;
    // }
    // getMaxPossibleDayForMonth = function(year, month, date)
    // {
    //     month++;//for indexing from 1
    //     var maxInMonth = 31;
    //     switch(month)
    //     {
    //         case 1:
    //         case 3:
    //         case 5:
    //         case 7:
    //         case 10:
    //         case 12:
    //             maxInMonth = 31;
    //             break;
    //         case 2:
    //             maxInMonth = 28;
    //             if(isLeapYear(year))
    //                 maxInMonth = 29;
    //             break;
    //         default:
    //             maxInMonth = 30;
    //     }
    //     return maxInMonth<date?maxInMonth:date;
    // }
    // isLeapYear = function(year)
    // {
    //     if((year%4)!=0)
    //         return false;
    //     if(year%400==0)
    //         return true;
    //     if(year%100==0)
    //         return false;
    //     return true;
    // }

    
}