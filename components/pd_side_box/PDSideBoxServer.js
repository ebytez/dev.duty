//
// pd side box component class
//

var PageComponent = require("ds.base/PageComponent");
var Knowledge = require("ds.sm/knowledge/Knowledge");

var PDSideBoxServer = PageComponent.create({
	"/": function(attributes, vars) {
		var data = {};
		
		console.log("attributes.mode=" + attributes.mode);
		
		if (attributes.mode == "help") {
			data.knowledge = {
				general:  new Knowledge().getRecentArticles(3, [ [ "category", "eq", "3d9f732d2961422ea2a83694da612c58" ] ]),
				faq: new Knowledge().getRecentArticles(3, [ [ "category", "eq", "666a3423e6f848afbbed7bb409f04b10" ] ])
			}
		}
		
		return new StatusResponse('good', data);
	},
	
	className: "PDSideBoxServer"
});

module.exports = PDSideBoxServer;
