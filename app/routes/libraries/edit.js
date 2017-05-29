import Ember from 'ember';

export default Ember.Route.extend({

  confirmation: false,

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit library');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('libraries/form');
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));

    },

    confirmLeaving() {
      let model = this.controller.get('model');
      this.set('confirmation', true);
      this.get('transition').retry().then(() => {
        this.set('confirmation', false);
        model.rollbackAttributes();
        $('#transitionModal').modal('hide');
      });
    },

    willTransition(transition) {
      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes') && !this.get('confirmation')) {
        this.set('transition', transition);

        transition.abort();

        $('#transitionModal').modal('show');        
      }
    }
  }
});
