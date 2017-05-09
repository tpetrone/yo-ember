import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.findAll('contact');
  },

  actions: {
  	deleteContact(contact) {
  		let confirmation = confirm("Are you sure you want to delete?");

  		if (confirmation) {
  			contact.destroyRecord();
  		}
  	}
  }
});
