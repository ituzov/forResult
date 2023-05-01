import moment from 'moment';

export const getTodayDateFormat = () => {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
}




