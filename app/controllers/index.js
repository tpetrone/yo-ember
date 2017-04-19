import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',

  isValid: 
  Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: 
  Ember.computed.not('isValid'),

  actions: {
   saveInvitation() {
      alert(`Saving of the following email adress is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', `Thnak you! We've just saved you email adress: ${this.get('emailAddress')} `);
      this.set('emailAddress', '');
    }
  }

});
