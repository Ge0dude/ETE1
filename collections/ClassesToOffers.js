ClassesToOffers = new Mongo.Collection("classesToOffers");

var Schemas = {};

Schemas.ClassesToOffer = new SimpleSchema({
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.UserId
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
	coTeacher: {
		type: String,
		label: "Please be descriptive about level of co-teacher involvement",
		max: 500
	}
});

ClassesToOffers.attachSchema(Schemas.ClassesToOffer); 