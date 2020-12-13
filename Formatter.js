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
}