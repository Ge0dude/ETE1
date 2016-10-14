FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('home')
	}
}]);

FlowRouter.route('/', {
	name: 'home',
	action() {
		if(Meteor.userId()) {
			FlowRouter.go('addClass'); //this should really be the open classes page
		}
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

/*Maybe make this seciton offlimits if the user isn't Elsia, Leslie or another administrator, and 
then not have to have two user states*/

FlowRouter.route('/add-class', {
	name: 'addClass',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'AddClassLayout'});
	}
});



FlowRouter.route('/current-classes', {
	name: 'currentClasses',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'CurrentClasses'});
	}
});

FlowRouter.route('/listed-classes' , {
	name: 'ListedClasses',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'ListedClasses'});
	}
}); 


//don't think I want to use this feature
 /*

FlowRouter.route('/classDisp/:id', { // {{_id}} didn't work whereas :id does
	name: 'singleClass',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'SingleClass'});
	}
}); 

*/