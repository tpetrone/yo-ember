import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  actions: {
   authenticate(email, password) {
    
    console.log(email);

    this.get('session').open('firebase', {
      provider: 'password',
      email: email,
      password: password,
    }).then(() => {
      this.transitionTo('/admin/seeder');
    }, (error) => {
      console.log(error);
    });
  }
}
});
