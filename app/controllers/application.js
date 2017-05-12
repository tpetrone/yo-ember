import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    invalidateSession() {
      let session = this.get('session');
      session.close().then(() => {
        this.transitionToRoute('/login');
      });

    }
  }

});