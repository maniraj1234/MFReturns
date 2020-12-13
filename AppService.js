class AppService
{
    
    constructor()
    {
        this.dataService = new DataService();
        this.statisticsService = new StatisticsService();
    }
    getJSON(url, callback)
    {
        return this.dataService.getJSON(url, callback);
    }
    setMFData = function(data)
    {
        this.dataService.setMFData(data);
    }
    getMFDataMap = function(data)
    {
        return  this.dataService.getMFDataMap(data);
    }
    getCalculatedReturnsStr = function(MFData,  period , mfId ,dateStart ,dateEnd , years)
    {
        return this.statisticsService.getCalculatedReturnsStr(MFData,  period , mfId ,dateStart ,dateEnd , years);
    }
    
  
}