import Ember from 'ember';
import moment from 'moment';

export function relativeDateFormatter([date], { relative=true }={}) {
  const old = moment().diff(date, 'days');
  const time = old ? formatDate(date) : formatTime(date);
  if (relative) {
    return `${time} (${relativeTime(date)})`;
  } else {
    return time;
   }
}

function formatTime(date) {
  return moment(date).format('h:mm A');
}

function formatDate(date) {
  return moment(date).format('MMM D');
}

function relativeTime(date) {
  const result =  moment(date).fromNow();
  return result.replace(/^(an|a) /, '1 ');
}

export default Ember.Helper.helper(relativeDateFormatter);
