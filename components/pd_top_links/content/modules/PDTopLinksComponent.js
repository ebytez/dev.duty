const { VueF8Utils } = require('vue/VueF8Utils');

const PDTopLinksComponent = {
    name: 'PDTopLinksComponent',
    props: ['serverData'],
    inject: ['f8'],
	
    components: { },
	
    template: `
        <div class="pd-top-links">
			<div class="top-link">
				Incidents
			</div>
			<div class="top-link">
				Alerts
			</div>

			<div class="top-link">
				Configuration 
			</div>
			<div class="top-link">
				Analytics  
	        </div>
			<div class="top-link">
				Visibility
	        </div>
			<div class="top-link">
				Status
        	</div>
        </div>
    `,

    methods: {
        getTitleClasses() {
            return {
				'title': true,
                'box-title-normal': this.f8.attributes.title_style != 'compact',
                'box-title-compact': this.f8.attributes.title_style == 'compact'
            };
        },
		getBundleName() {
            const p = new PageURL();
            return p.getBundleName();
        }

    },
};

module.exports = VueF8Utils.componentDefaults(PDTopLinksComponent);
