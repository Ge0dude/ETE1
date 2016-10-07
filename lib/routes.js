FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/add-class', {
	name: 'addClass',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', {main: 'AddClassLayout'});
	}
});