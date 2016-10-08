Meteor.subscribe('classes');

Template.AddClassLayout.helpers({
	classes: ()=> {
		return Classes.find({});
	}
});