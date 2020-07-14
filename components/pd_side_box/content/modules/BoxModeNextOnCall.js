const { VueF8Utils } = require('vue/VueF8Utils');

const BoxModeNextOnCall = {
    name: 'BoxModeNextOnCall',
    inject: ['f8'],
    components: { },

    template: `
        <div class="box-content">
			<div class="timeline timeline--on-call-schedule">
				<div id="ember239" class="ember-view">
					<div class="timeline__line"></div>
					<div class="timeline__shift clearfix">
						<span class="timeline__block timeline__block--not-on-call" title="Off call .">
						<!---->
						</span>

						<div class="shift__not-on-call">
							<em>
							No scheduled on-call
							</em>
						</div>
					</div>
				</div>
            <div class="timeline__line"></div>
          </div>
        </div>
    `,

    methods: {

        funcHere() {
        }

    }

};

module.exports = VueF8Utils.componentDefaults(BoxModeNextOnCall);