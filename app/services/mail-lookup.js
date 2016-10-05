import Ember from 'ember';
import moment from 'moment';

const fixtures = [{
  id: 1,
  from:'recruiter@startup.com',
  to:'dev@me.com',
  subject:'Opportunity',
  body:'Foo Body',
  sentAt:moment(new Date()).subtract(2, 'day').toDate(),
  readDate: null,
  trashedDate: null,
  starred: null
}, {
  id: 2,
  from:'ceo@startup.com',
  to:'dev@me.com',
  subject:'Wassup',
  body:'Bruh',
  sentAt:moment(new Date()).subtract(2, 'minute').toDate(),
  readDate: null,
  trashedDate: null,
  starred: null
}];

const { get, set, setProperties } = Ember;

export default Ember.Service.extend({
  store: Ember.inject.service(),
  mailCounts: Ember.inject.service(),
  tagging: Ember.inject.service(),
  currentFolder: Ember.computed('currentFolderName', function() {
    return get(this, get(this, 'currentFolderName'));
  }),

  update() {
    return this.retrieve(get(this, 'currentFolderName'));
  },
  retrieve(folderName) {
    return get(this, 'store').query('email', { folderName }).then((emails) => {
      setProperties(this, get(emails, 'meta'));
      set(this, folderName, emails);
      set(this, 'currentFolderName', folderName);

      return emails;
    });
  },
  addTag(tag, email) {
    return get(this, 'tagging').addTag(email, tag);
  },
  removeItems(items) {
    const currentFolder = get(this, 'currentFolder');
    items.forEach( item => {
      set(item, 'trashedDate', new Date());
      set(item, 'checked', false);
      item.save().then((email) => {
        setProperties(this, get(email, 'meta'));
        currentFolder.removeObject(item);
      });
    });
  }
});
