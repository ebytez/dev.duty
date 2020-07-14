const { VueF8Utils } = require('vue/VueF8Utils');
const BoxModeNextSteps = require('pd_side_box/BoxModeNextSteps');
const BoxModeNextOnCall = require('pd_side_box/BoxModeNextOnCall');
const BoxModeHelp = require('pd_side_box/BoxModeHelp');

const PDBoxComponent = {
    name: 'PDBoxComponent',
    props: ['serverData'],
    inject: ['f8'],
	
    components: {
        BoxModeNextSteps,
        BoxModeNextOnCall,
        BoxModeHelp,
    },
	
    template: `
        <div class="pd-side-box">
			<div :class="getTitleClasses()" v-if="haveTitle()">
	            {{this.f8.attributes.title}}
			</div>

			<box-mode-next-steps v-if="isNextSteps()"/>
			<box-mode-next-on-call v-if="isNextOnCall()"/>
			<box-mode-help v-if="isHelp()" :serverData="serverData"/>
        </div>
    `,

    methods: {
		
		haveTitle() {
			return this.f8.attributes.title_style != "none";
		},
		
		isNextSteps() {
			return this.f8.attributes.mode == "next_steps";
		},
		
		isNextOnCall() {
			return this.f8.attributes.mode == "next_on_call";
		},
		
		isHelp() {
			return this.f8.attributes.mode == "help";
		},
		
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

module.exports = VueF8Utils.componentDefaults(PDBoxComponent);
