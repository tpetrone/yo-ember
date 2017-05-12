import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	
	beforeModel: function() {
    if(!this.get('session.isAuthenticated')) {
     return this.transitionTo('login'); 
   }
 },

	model() {
		return this.store.createRecord('library');
	},

	setupController: function (controller, model) {
		this._super(controller, model);

		controller.set('title', 'Create a new library');
		controller.set('buttonLabel', 'Create');
	},

	renderTemplate() {
		this.render('libraries/form');
	},

	actions: {
		saveLibrary(newLibrary) {
			let sessionUid = this.get('session').get('uid');
			this.store.find('user', sessionUid).then((user) => {
				newLibrary.set('user', user);
				newLibrary.save().then(() => this.transitionTo('libraries'));
			});
		},

		willTransition() {
			let model = this.controller.get('model');

			if (model.get('isNew')) {
				model.destroyRecord();
			}
		}

	}

});
