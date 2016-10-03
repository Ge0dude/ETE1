FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/add-class', {
	name: 'addClass',
	action() {
		BlazeLayout.render('AddClassLayout');
	}
});