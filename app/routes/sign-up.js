import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  firebaseApp: Ember.inject.service(),

  beforeModel: function() {
    if(this.get('session.isAuthenticated')) {
     return this.transitionTo('/'); 
   }
 },

 actions: {
  
  signUp(email, password) {
    let firebase = this.get('firebaseApp');

    firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
      let newUser = this.store.createRecord('user', {
        id : user.uid,
        email : user.email
      });

      newUser.save().then(() => this.transitionTo('login'));
      
    });

  }
}
});
