import { date } from 'quasar';

const isDateGreaterThanToday = (enteredDate) => {
  //today - date Object
  const todayArrayFrmt = date.formatDate(new Date(), 'DD-MM-YYYY').split('-');
  const todayObject = new Date(todayArrayFrmt[2], parseInt(todayArrayFrmt[1]) - 1, todayArrayFrmt[0]);

  //entered date - Object
  const dateArrayFrmt = enteredDate.split('-');
  const dateObject = new Date(dateArrayFrmt[2], parseInt(dateArrayFrmt[1]) - 1, dateArrayFrmt[0])

  //find the diff
  const diff = date.getDateDiff(todayObject, dateObject, 'days');

  //if diff is < 0 then user a date that is greater than todays date
  if (parseInt(diff) < 0){
      return true;
  }

  return false;
}

export default {
  isDateGreaterThanToday
}
