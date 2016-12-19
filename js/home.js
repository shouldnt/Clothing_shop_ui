Vue.component('img-slider', {
  template: '#img-slider-template',
  replace: true
});

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
})

var slider = new Vue({
	el: '.slide-container'
});

var product = new Vue({
	el: '#content__right',
	data: {
		show: true,
		show_more: {
			height: '350px',
			overflow: 'hidden'
		},
		show_less: {
			height: 'auto',
			overflow: 'visible'
		}
	},

	methods: {
		toggle: function() {
			this.show = !this.show;
		}
	}

});