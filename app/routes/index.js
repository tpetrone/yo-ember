import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.createRecord('invitation');
	},

	/*emailAddress: '',

	isValid: 
	Ember.computed.match('emailAddress', /^.+@.+\..+$/),
	isDisabled: 
	Ember.computed.not('isValid'),*/

	actions: {
		saveInvitation(newInvitation) {
			newInvitation.save().then(() => this.transitionTo('/admin/invitations'));
		},

		willTransition() {
			this.controller.get('model').rollbackAttributes();
		}

	}
	

});
