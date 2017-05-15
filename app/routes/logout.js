import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),

  beforeModel() {

    if(this.get('session.isAuthenticated')) {
      console.log('entrei aqui');
      this.get('session').close().then(() => {
        return this.transitionTo('login');
      });
    } else {
      return this.transitionTo('login');
    }

  }
});
