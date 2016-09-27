import Ember from 'ember';

const { Controller } = Ember;

export default Ember.Controller.extend({
  mailLookup: Ember.inject.service(),
  inboxCount: Ember.computed.alias('mailLookup.inboxCount'),
  trashCount: Ember.computed.alias('mailLookup.trashCount')
});
