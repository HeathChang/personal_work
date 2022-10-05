module.exports = {
	isOwner : function (request, response) {
		console.log("request.user in auth.js: ", request.user);
		if ( request.user ) {
			console.log("auth.js에서 request.user 체크");
			return true;
		} else {
			return false;
		}
	},
	statusUI : function (request, response) {
		var authStatusUI = '<a href="/auth/login">login</a>'
		if ( this.isOwner(request, response) ) {
			authStatusUI = `${ request.user.nickname } | <a href="/auth/logout">logout</a>`;
		}
		return authStatusUI;
	}
}
