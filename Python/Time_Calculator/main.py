
# converts string time from 3:10 to 3 and 10
def convertStringTimeToInt(time):
    splitted_list = time.split(':')
    splitted_list[1] = splitted_list[1][:2]
    hour = int(splitted_list[0])
    minute = int(splitted_list[1])


    return hour,minute

# main fun()
def add_time(start, duration,weekday=''):
    isNextDay = False
    num_of_days = 0
    targetDay = ''
    start_hour,start_min = convertStringTimeToInt(start)
    meridian = start[5:].strip()
    
    duration_hour,duration_min = convertStringTimeToInt(duration)

    total_hour = start_hour + duration_hour
    total_min = start_min+duration_min

    #check if its the next day or not
    isDay=True if meridian == 'AM' else False;
     

    if total_hour >12 and total_hour<24:
        total_hour = total_hour-12
        isDay = not isDay
        #add day if pm is converted to am
        if isDay:
            num_of_days += 1
    #if the total hour exceeds 24 hours 
    elif total_hour>24:
        # get the number of days
        num_of_days = total_hour // 24
        #sub the number of days with 24
        total_hour -= num_of_days * 24
        #change the time and also meridian
        if total_hour >12 :
            total_hour = total_hour-12
            isDay = not isDay
            num_of_days +=1
            
    elif total_hour == 24:
        total_hour = 12
        num_of_days +=1

    if total_min >= 60:
        
        total_min =total_min-60
        total_hour +=1
        #change meridian if hour becomes 12
        if total_hour == 12:
            isDay = not isDay
        if isDay:
            num_of_days +=1


    if len(str(total_min))==1:
        total_min = f'0{total_min}'
    #no. of days
    if num_of_days == 0:
        days = ''
    elif num_of_days == 1:
        days = ' (next day)'
    else:
        days = f' ({num_of_days} days later)'


    #find weekday
    weekdays = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ]
    if weekday:
    #find if each day matches and then appropriate day
        for day in weekdays:
            if day.lower() == weekday.lower():
                targetDay = f', {weekdays[(weekdays.index(day)+num_of_days) % 7]}'
            


    new_time = f'{total_hour}:{total_min} {"AM" if isDay else "PM" }' +  targetDay + days 

    
    return new_time

print(add_time('8:16 PM', '466:02', 'tuesday'))

