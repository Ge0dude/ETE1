Template.ListedClasses.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('classes');
	});
});

Template.ListedClasses.helpers({
	classes: ()=> {
		return Classes.find({listed: true});
	}
});