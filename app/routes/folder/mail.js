import Ember from 'ember';

const { set, get } = Ember;

export default Ember.Route.extend({
  mailLookup: Ember.inject.service(),
  model({ mailID }) {
    return this.store.find('email', mailId);
  },

  afterModel(model) {
    set(model, 'readDate', new Date());
  },
  serialize(model) {
    return {mailID: model.id};
  },
  actions:  {
    moveToTrash(email) {
      set(email, 'trashedDate', new Date());
      this.transitionTo('application');
    },
    starEmail(email) {
      set(email, 'starred', !get(email, 'starred'));
      get(this, 'mailLookup').update();
    }
  }
});
