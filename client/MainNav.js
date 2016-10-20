/*aparently session.set is not a default package anymore...*/
/*Changing to side nav for a min to check
okay it works on side nav, it isn't pretty but it works! Need to set hover to pointer and add some styles.
Or I could just add this all to the header... that makes more sense to me.
*/



Template.MainNav.events({
	'click .login-toggle': ()=> {
		Session.set('nav-toggle', 'open');
	},
	'click .logout': ()=> {
		Meteor.logout();
	}
});