ClassesToOffer = new Mongo.Collection("ClassesToOffer");

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
	}


})