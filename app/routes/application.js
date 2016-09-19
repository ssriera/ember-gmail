import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      from:'recruiter@startup.com',
      to:'dev@me.com',
      subject:'Opportunity',
      body:'Foo Body',
      sentAt:new Date()
    }, {
      from:'ceo@startup.com',
      to:'dev@me.com',
      subject:'Wassup',
      body:'Bruh',
      sentAt:new Date()
    }];
  }
});
