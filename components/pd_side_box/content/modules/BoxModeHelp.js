const { VueF8Utils } = require('vue/VueF8Utils');

const BoxModeHelp = {
    name: 'BoxModeHelp',
	props: ['serverData'],
    inject: ['f8'],
    components: { },

    template: `
        <div class="box-content">
			<div class="help-title box-title-compact">Getting started</div>
			<div class="knowledge-article" v-for="article in this.serverData.knowledge.general" :key="article.id">
			  <div class="knowledge-link">
				<a class="link-hover link-color" :href="getKnowledge(article.id)">{{ article.title }}</a>
			  </div>
			</div>
			<div class="help-title box-title-compact">Info</div>
			<div class="knowledge-article" v-for="article in this.serverData.knowledge.faq" :key="article.id">
			  <div class="knowledge-link">
				<a class="link-hover link-color" :href="getKnowledge(article.id)">{{ article.title }}</a>
			  </div>
			</div>

		</div>
    `,

    methods: {
		getKnowledge(id) {
			return "knowledge_view?id=" + id;
		}
    }

};

module.exports = VueF8Utils.componentDefaults(BoxModeHelp);