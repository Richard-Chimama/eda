
export function GET_DATE_TIME(timestamp:Date) {
    // Convert the timestamp to a Date object.
    var date = new Date(timestamp);
  
    // Get the date and time components of the Date object.
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0"+(date.getMonth()+1) : (date.getMonth() + 1);
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
  
    // Return the date and time in a formatted string.
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
  }