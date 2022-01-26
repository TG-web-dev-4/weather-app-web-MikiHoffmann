export const ConvertDate = ({date}) => {
    let unixTimestamp = date;

    const milliseconds = unixTimestamp * 1000;
  
    const dateObject = new Date(milliseconds);
  
    //const humanDateFormat = dateObject.toLocaleString(); //2022-01-19 10:30:15
    const weekday = dateObject.toLocaleString("en-US", { weekday: "long", month: "numeric",day: "numeric"  }); // Monday,1/20
  
    dateObject.toLocaleString("en-US", { weekday: "long" }); // Monday
    dateObject.toLocaleString("en-US", { month: "long" }); // January
    dateObject.toLocaleString("en-US", { day: "numeric" }); // 19
    dateObject.toLocaleString("en-US", { year: "numeric" }); // 2022
    dateObject.toLocaleString("en-US", { hour: "numeric" }); // 10 AM
    dateObject.toLocaleString("en-US", { minute: "numeric" }); // 30
    dateObject.toLocaleString("en-US", { second: "numeric" }); // 15
    dateObject.toLocaleString("en-US", { timeZoneName: "short" }); // 01/19/2022, 10:30:15 AM CST
  
    // console.log(humanDateFormat);
    // console.log(dateObject.toLocaleString("en-US", {day: "numeric"}));
  
    return <>{weekday}</>;
}


export const ConvertTime = ({time}) => {
    let UnixTimestamp = time
    const milliseconds = UnixTimestamp * 1000
    const dateObject = new Date(milliseconds)
    
    //const humanDateFormat = dateObject.toLocaleString(); //2022-01-19 10:30:15
    const hour = dateObject.toLocaleString("en-US", { weekday: "short", hour: "numeric" }); // Monday,1/20
  
    dateObject.toLocaleString("en-US", { weekday: "short" }); // Monday
    dateObject.toLocaleString("en-US", { month: "long" }); // January
    dateObject.toLocaleString("en-US", { day: "numeric" }); // 19
    dateObject.toLocaleString("en-US", { year: "numeric" }); // 2022
    dateObject.toLocaleString("en-US", { hour: "numeric" }); // 10 AM
    dateObject.toLocaleString("en-US", { minute: "numeric" }); // 30
    dateObject.toLocaleString("en-US", { second: "numeric" }); // 15
    dateObject.toLocaleString("en-US", { timeZoneName: "short" }); // 01/19/2022, 10:30:15 AM CST
  
    // console.log(humanDateFormat);
    // console.log(dateObject.toLocaleString("en-US", {day: "numeric"}));
  
    return <>{hour}</>
}