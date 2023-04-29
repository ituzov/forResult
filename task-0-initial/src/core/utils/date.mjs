import moment from 'moment';
import 'moment-precise-range-plugin';


export const getTodayDateFormat = (date) => {
 return moment(date).format('MMM Do YY');
}

export const getPreciseDateDifference = (date1, date2) =>{
    return moment.preciseDiff(moment(date1), moment(date2));
}


