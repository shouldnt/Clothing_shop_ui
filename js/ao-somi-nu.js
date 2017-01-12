
// main menu
var main_menu = new Vue({
	el: '#main-menu',
	data: {
		scrollPosition: null
	},
	methods: {
		updateScroll() {
			this.scrollPosition = window.scrollY
		}
	},

	mounted: function() {
		window.addEventListener('scroll', this.updateScroll);
	}
});


var products = new Vue({
	el: '.products'
})