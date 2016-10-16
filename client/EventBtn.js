//also want a forum to pop up for the dates needed, but I'll do that in the future


//why don't I need a helper loaded here? 


Template.ClassDisp.events({
	'click .toggle-menu': function() {
		Meteor.call('toggleListingItem', this._id, this.listed) //last time :id worked and _id didn't 
	},
	'click .fa-trash' : function() {
		Meteor.call('deleteClass', this._id);  //deletes a class
	}
});