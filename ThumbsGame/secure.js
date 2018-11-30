$.ajaxSetup({
	beforeSend: function(jqXHR, settings) {
		jqXHR.setRequestHeader('X-Csrf-Token', $('#csrf_token').html());
	}
});