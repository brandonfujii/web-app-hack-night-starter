$('#subreddit-form').submit(function(event) {
	var data = {
		title: $('#form-title').val(),
		description: $('#form-description').val(),
	};

	$.ajax({
		data: JSON.stringify(data),		// form data
		type: $(this).attr('method'),
		url: $(this).attr('action'),
		contentType: "application/json",
		success: function(response) {
			window.location.reload();
		},
		error: function(jqXHR, status, err) {
			// TODO: Handle error adding to database
		},
	});
	event.preventDefault();
});