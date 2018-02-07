$('#post-form').submit(function(event) {
	var data = {
		title: $('#form-title').val(),
		link: $('#form-link').val(),
		content: $('#form-content').val(),
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
			console.log(err);
		},
	});
	event.preventDefault();
});