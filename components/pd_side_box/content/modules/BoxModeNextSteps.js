const { VueF8Utils } = require('vue/VueF8Utils');

const BoxModeNextSteps = {
    name: 'BoxModeNextSteps',
    inject: ['f8'],
    components: {},

    template: `
        <div class="box-content">
			<div>Add all your tools to begin monitoring your systems today:</div>
			<div class="next-steps-new-service">
				<button class="btn" @click="newService()">
					<span v-html="f8.icon('plus', { 'classes': 'fa-fw' })"></span>
					Add new services
				</button>
			</div>
        </div>
    `,

    methods: {

        newService() {
			var pageURL = new PageURL();
			var pageName = "details.default.service";
			var url = pageURL.setLastPage(pageName).clearParms().setParms({ new: true });

			gBrowserUser.navigate(url);
        }

    }

};

module.exports = VueF8Utils.componentDefaults(BoxModeNextSteps);