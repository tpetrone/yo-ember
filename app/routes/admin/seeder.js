import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend({

	model() {
		return Ember.RSVP.hash({
			libraries: this.store.findAll('library'),
			books: this.store.findAll('book'),
			authors: this.store.findAll('author')
		});
	},

	setupController(controller, model) {
		controller.set('libraries', model.libraries);
		controller.set('books', model.books);
		controller.set('authors', model.authors);
	}
});
