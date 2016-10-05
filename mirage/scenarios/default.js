export default function(server) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.

    Make sure to define a factory for each model you want to create.
  */

  // server.createList('post', 10);
  server.create('email', {
    id: 1,
    from:'recruiter@startup.com',
    to:'dev@me.com',
    subject:'Opportunity',
    body:'Foo Body',
    sentAt:moment(new Date()).subtract(2, 'day').toDate(),
    readDate: null,
    tags: []
   }),
  server.create('email', {
    id: 2,
    from:'ceo@startup.com',
    to:'dev@me.com',
    subject:'Wassup',
    body:'Bruh',
    sentAt:moment(new Date()).subtract(2, 'minute').toDate(),
    readDate: null,
    tags: []
  });
}
