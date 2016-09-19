import Ember from 'ember';

export default Ember.Route.extend({
  model({ mailID }) {
    return this.modelFor('application')[mailID-1];
  },
  serialize(model) {
    return {mailID: model.id};
  }
});
