import Ember from 'ember';
import Faker from 'faker';

export default Ember.Controller.extend({

  libraries: [],
  books: [],
  authors: [],

  actions: {

  	generateLibraries(volume) {
      this.set('generateLibrariesInProgress', true);

      const counter = parseInt(volume);
      let savedLibraries = [];

      for (let i = 0; i < counter; i++) {
        // Collect all Promise in an array
        savedLibraries.push(this._saveRandomLibrary());
      }

      // Wait for all Promise to fulfill so we can show our label and turn off the spinner.
      Ember.RSVP.all(savedLibraries)
      .then(() => {
       this.set('generateLibrariesInProgress', false);
       this.set('libDone', true);
     });

    },

    deleteLibraries() {
      // Progress flag, data-down to seeder-block button spinner.
      this.set('deleteLibrariesInProgress', true);

       // Our local _destroyAll return a promise, we change the label when all records destroyed.
       this._destroyAll(this.get('libraries'))

         // Data down via seeder-block to fader-label that we ready to show the label.
         // Change the progress indicator also, so the spinner can be turned off.
         .then(() => {
           this.set('libDelDone', true);
           this.set('deleteLibrariesInProgress', false);
         });
       },

       generateBooksAndAuthors(volume) {
          // Progress flag, data-down to seeder-block button spinner.
          this.set('generateBooksInProgress', true);

          const counter = parseInt(volume);
          let booksWithAuthors = [];
          for (let i = 0; i < counter; i++) {
          // Collect Promises in an array.
          const books = this._saveRandomAuthor().then(newAuthor => this._generateSomeBooks(newAuthor));
          booksWithAuthors.push(books);
        }

        // Let's wait until all async save resolved, show a label and turn off the spinner.
        Ember.RSVP.all(booksWithAuthors)

         // Data down via seeder-block to fader-label that we ready to show the label
         // Change the progress flag also, so the spinner can be turned off.
         .then(() => {
           this.set('authDone', true);
           this.set('generateBooksInProgress', false);
         });

       },

       /*deleteBooksAndAuthors() {
          // Progress flag, data-down to seeder-block button to show spinner.
          this.set('deleteBooksInProgress', true);
          }

*/
          },

          _saveRandomAuthor(isLast) {
           const newAuthor = this.store.createRecord('author').randomize();
           newAuthor.save().then(() => {
            if (isLast) {

              this.set('authDone', true);
            }
          });

           return newAuthor;
          },

          _generateSomeBooks(author) {
           const bookCounter = Faker.random.number(10);

           for (let j = 0; j < bookCounter; j++) {
            const library = this._selectRandomLibrary();
            this.store.createRecord('book')
            .randomize(author, library).save().then(() => {
              author.save();
              library.save();
            });
          }
          },

_selectRandomLibrary() {
 const libraries = this.get('libraries');
 const librariesCounter = libraries.get('length');

 const libraryIds = libraries.map(lib => lib.get('id'));

 const randomNumber = Faker.random.number(librariesCounter-1);
 const randomLibrary = libraries.findBy('id', libraryIds[randomNumber]);

 return randomLibrary;
},

_destroyAll(records) {
 records.forEach(
  item => item.destroyRecord()
  );
}

});