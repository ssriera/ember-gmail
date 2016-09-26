import Ember from 'ember';
import moment from 'moment';

const fixtures = [{
  id: 1,
  from:'recruiter@startup.com',
  to:'dev@me.com',
  subject:'Opportunity',
  body:'Foo Body',
  sentAt:moment(new Date()).subtract(2, 'day').toDate(),
  readDate: null
}, {
  id: 2,
  from:'ceo@startup.com',
  to:'dev@me.com',
  subject:'Wassup',
  body:'Bruh',
  sentAt:moment(new Date()).subtract(2, 'minute').toDate(),
  readDate: null
}];

const { get } = Ember;

export default Ember.Route.extend({
  model() {
    return fixtures.filter(function(item) {
      return !get(item, 'trashedDate');
    });
  }
});
