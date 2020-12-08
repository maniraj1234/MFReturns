class AppService
{
    
    AppService()
    {
        this.dataService = new DataService();
    }
    getJSON(url, callback)
    {
        return this.dataService.getJSON(url, callback);
    }
}