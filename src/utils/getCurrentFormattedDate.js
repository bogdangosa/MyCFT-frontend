export function getCurrentFormattedDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
  
    const currentDate = new Date();
    const monthIndex = currentDate.getMonth();
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    const formattedDate = `${months[monthIndex]} ${day} ${year}`;
    return formattedDate;
  }