//also want a forum to pop up for the dates needed, but I'll do that in the future

Template.ClassDisp.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleListingItem', this._id, this.listed) //last time :id worked and _id didn't 
	}
});