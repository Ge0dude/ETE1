Meteor.publish('classes', function () {
	return Classes.find({author: this.userId});
});