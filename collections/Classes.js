/*collection and schema set up*/

/*should add a school section and use that as a filter, only allow the entry of one of the 8 branches
maybe even make it a drop down in stead of enter*/

/*
Can have a sub date value that is hidden when collection entry is created but can be later changed with
an autoform? 
*/

Classes = new Mongo.Collection("classes");
Classes.attachSchema(new SimpleSchema({
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	listed: {
		type: Boolean,
		defaultValue: false,
		optional: true,
		autoform: {
			type: "hidden"
		}
	},
	postingTime: {
		type: Date, 
		label: "Posted At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	},
	className: {
		type: String,
		label: "Class Name",
		max: 100
	},
	classSize: {
		type: String,
		label: "Class Size (ex. 12)", 
		max: 10
	},
	arrivalTime: {
		type: String, 
		label: "Time teacher is expected to arrive at school",
		max: 200
	},
	classStart: {
		type: String, 
		label: "Time class begins",
		max: 50
	},
	classLength: {
		type: String,
		label: "Length of class time",
		max: 50
	},
	branch: {
		type: String,
		label: "Columbia branch name",
		max: 25
	},
	dateNeeded: {
		type: Date,
		label: "Date to sub"
	},
}));

/*using this dateNeeded means I'm going back to the original format. This
should have more overlap with selling the app to others schools */

/*rules*/
/*eventually need this to be Elisa only, not just any ID. Or 
I could controll who visits this page via Id
*/
Classes.allow({
	insert: function(userId, doc) {       
		return !!userId;
	},
	update: function(userId, doc) {
		return !!userId;
	}
});

Meteor.methods({
	toggleListingItem: function(id, currentState) {
		Classes.update(id, {
			$set: {
				listed: !currentState //why not just label true?
			}
		});
	},
	deleteClass: function(id) {
		Classes.remove(id);
	}
});
