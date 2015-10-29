FlowRouter.route('/home', {
	name: "yo",
	action: function() {
		BlazeLayout.render("layout", {content: "home"})
	}
})

FlowRouter.route('/', {
	name: "yoyo",
	action: function() {
		FlowRouter.go("yo")
	}
})