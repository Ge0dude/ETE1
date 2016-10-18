/* Click event doesn't seem to be working?  */


Template.LoginModal.events({
	'click .close-login': ()=> {
		Session.set('nav-toggle', '');
	}
});