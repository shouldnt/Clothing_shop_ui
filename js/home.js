Vue.component('img-slider', {
  template: '#img-slider-template',
  replace: true
})

var slider = new Vue({
	el: '.slide-container'
})

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

})