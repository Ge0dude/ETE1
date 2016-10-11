Template.ClassDisp.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleListingItem', this._id, this.listed) //last time :id worked and _id didn't 
	}
});