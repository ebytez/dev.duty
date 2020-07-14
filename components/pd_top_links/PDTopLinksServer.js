//
// pd top links component class
//

var PageComponent = require("ds.base/PageComponent");

var PDTopLinksServer = PageComponent.create({
	"/": function(attributes, vars) {
		var data = {};				
		return new StatusResponse('good', data);
	},
	
	className: "PDTopLinksServer"
});

module.exports = PDTopLinksServer;
