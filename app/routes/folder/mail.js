import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
  model({ mailID }) {
    return this.modelFor('application')[mailID-1];
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
    }
  }
});
