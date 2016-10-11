/* switiching to CurrentClass... I hope */

Template.CurrentClasses.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('classes');
	});
});

Template.CurrentClasses.helpers({
	classes: ()=> {
		return Classes.find({});
	}
});


/*
Template.CurrentClasses.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('classes');
	});
});


Template.SingleClass.helpers({
	class: ()=> {
		var id = FlowRouter.getParam('id');
		return Classes.findOne({_id: id});
	}
});

*/