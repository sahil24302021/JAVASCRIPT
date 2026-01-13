// day 3 challenge
let currentDate = new Date();
console.log(currentDate);
function formatDate(date) {
  let dateObj = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear()
  };
  let day = String(dateObj.day);
  let month = String(dateObj.month);
  if (dateObj.day < 10) {
    day = "0" + day;
  }
  if (dateObj.month < 10) {
    month = "0" + month;
  }
  return day + "-" + month + "-" + dateObj.year;
}
console.log(formatDate(currentDate));
export { formatDate };
