import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel: function() {
    if(this.get('session.isAuthenticated')) {
     return this.transitionTo('/'); 
   }
 },

  actions: {
   authenticate(email, password) {

    let session = this.get('session');

    session.open('firebase', {
      provider: 'password',
      email: email,
      password: password,
    }).then(() => {
      this.transitionTo('logged.admin.seeder');
    }, (error) => {
      console.log(error);
    });
  }
}
});
