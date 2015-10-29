Template.layout.events({
	"click #show-sidebar": function(event) {
		event.preventDefault()
		$("#sidebar").sidebar({
			dimPage: false
		}).sidebar("toggle")

	}
})