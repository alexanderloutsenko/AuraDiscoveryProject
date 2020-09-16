public class BusScheduleCache {
	private Cache.OrgPartition part ;
    
    public BusScheduleCache (String partitionName) {
        part = Cache.Org.getPartition(partitionName);
    }
    
    public void putSchedule(String busLine, Time[] schedule) {
        part.put(busLine, schedule);
    }
    
    public Time[] getSchedule(String busLine) {
        Time[] busSheduleTime = (Time[])part.get(busLine);
        
        if(busSheduleTime != null) {
            return busSheduleTime;
        }
        else {
            busSheduleTime = new Time[]{Time.newInstance(8,0,0,0), Time.newInstance(17,0,0,0)};
        	return busSheduleTime;    
        }
        
    }
    
    public void putCarName(String carBrend, String carName) {
        part.put(carBrend, carName);
    }   
    
    public String getCar(String autoName) {
        String carNameCachedValue = (String)part.get(autoName);
        
        if(carNameCachedValue != null) {
            return carNameCachedValue;
        }
        else {
        	return null;    
        }
        
    }
}