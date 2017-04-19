import Ember from 'ember';

export default Ember.Controller.extend({

	emailAddress2: '',
	message: '',

	inputClass: Ember.computed('isEmailValid', function() {
		if (this.get('isEmailValid')) {
			return 'has-success';
		} else {
			return 'has-error';
		}
	}),

	textAreaClass: Ember.computed('isMessageCorrect', function() {
		if (this.get('isMessageCorrect')) {
			return 'has-success';
		} else {
			return 'has-error';
		}
	}),

	isGreater:
	Ember.computed.gte('message.length', 5),

	isLess:
	Ember.computed.lte('message.length', 10),

	isEmailValid:
	Ember.computed.match('emailAddress2', /^.+@.+\..+$/),

	isMessageCorrect:
	Ember.computed.and('isGreater', 'isLess'),

	isAllCorrect:
	Ember.computed.and('isMessageCorrect', 'isEmailValid'),

	isValid:
	Ember.computed.not('isAllCorrect'),

	actions: {
		sendMessage() {
			alert(`Sending the following message: ${this.get('message')} to ${this.get('emailAddress2')}`);
			this.set('responseMessage', `Thank you! We just send your message: ${this.get('message')}` );			
		}
	}

});
