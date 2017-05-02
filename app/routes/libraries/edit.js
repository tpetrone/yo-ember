import Ember from 'ember';

export default Ember.Route.extend({

  confirmation: false,

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));

    },

    confirmLeaving() {
      this.set('confirmation', true);
      this.get('transition').retry().then(() => {
        this.set('confirmation', false);
        $('#transitionModal').modal('hide');
      });
    },


    willTransition(transition) {
      let model = this.controller.get('model');
      if (model.get('hasDirtyAttributes') && !this.get('confirmation')) {
        console.log(this.get('confirmation'))
        this.set('transition', transition);
        transition.abort();
        $('#transitionModal').modal('show');
      }
    }
  }
});
