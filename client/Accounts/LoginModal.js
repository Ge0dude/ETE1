/* Click event doesn't seem to be working? 
The lack of functionality has to be coming from here?
aparently session.set is not a default package anymore...
yup, added session... :) yay but ugh*/ 



Template.LoginModal.events({
	'click .close-login': ()=> {
		Session.set('nav-toggle', '');
	}
});