import Ember from 'ember';

export default Ember.Route.extend({

  isClicked: false,

  waitConfirmation() {
    return new Promise((resolve, reject) => {
      console.log("Wait");
      resolve(true);
    });
  },

  model(params) {
    return this.store.findRecord('library', params.library_id);
  },

  actions: {
    saveLibrary(newLibrary) {
      newLibrary.save().then(() => this.transitionTo('libraries'));

    },

    isClicked() {
      this.set('isClicked', true);
    },


    willTransition(transition) {

      let model = this.controller.get('model');
      let isClicked = this.get('isClicked');
        
      
      return this.waitConfirmation().then((value) => {
        console.log(value);
        if (value) {
          transition.abort();
        }
        
        // if (model.get('hasDirtyAttributes')) {
        //   console.log(model);
        //   //$('#transitionModal').modal('show');
        //   transition.abort();
        //   // if (isClicked) {
        //   //   model.rollbackAttributes();
        //   // } else {
        //   //   this.set('isClicked', false);
        //   //   transition.abort();

        //   // }
        // }
      });
      
    }
  }
});
