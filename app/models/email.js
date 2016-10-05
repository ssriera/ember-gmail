import DS from 'ember-data';
import Ember from 'ember';

const { attr } = DS;
const { get } = Ember;

export default DS.Model.extend({
  from: attr(),
  to: attr(),
  subject: attr(),
  body: attr(),
  sentAt: attr('date'),
  readDate: attr('date'),
  tags: attr({ defaultValue:() => [] }),
  meta: attr(),
  starred: Ember.computed('tags.[]', function() {
    return get(this, 'tags').contains('starred');
  }),
  trashed: Ember.computed('tags.[]', function() {
    return get(this, 'tags').contains('trashed');
  })
});
