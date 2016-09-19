import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      from:'recruiter@startup.com',
      to:'dev@me.com',
      subject:'Opportunity',
      body:'Foo Body',
      sentAt:new Date()
    }, {
      id: 2,
      from:'ceo@startup.com',
      to:'dev@me.com',
      subject:'Wassup',
      body:'Bruh',
      sentAt:new Date()
    }];
  }
});
