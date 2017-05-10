import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  firebaseApp: Ember.inject.service(),

  actions: {
   authenticate(email, password) {
    let firebase = this.get('firebaseApp');
    let session = this.get('session');

    //let { email, password } = this.getProperties('email', 'password');
    this.get('session').authenticate('authenticator:firebase', email, password).then(() => {
      this.transitioTo("/admin/seeder");
    }).catch((reason) => {
      this.set('errorMessage', reason.error || reason);
    });
  }
}
});