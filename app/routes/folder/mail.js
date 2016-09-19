import Ember from 'ember';

export default Ember.Route.extend({
  model({ mailId }) {
    return this.modelFor('application')[mailId-1];
  },
  serialize(model) {
    return {mailId: model.id};
  }
});
