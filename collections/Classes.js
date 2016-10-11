/*collection and schema set up*/

/*should add a school section and use that as a filter, only allow the entry of one of the 8 branches
maybe even make it a drop down in stead of enter*/

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
	}	
}));

/*rules*/
Classes.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});
