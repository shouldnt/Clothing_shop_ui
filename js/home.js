// vue filter
Number.prototype.format = function(n, x, s, c) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
	    num = this.toFixed(Math.max(0, ~~n));

		return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
	};

	Vue.filter('vnd', function(value) {
		return value.format(0, 3, '.');
	});



// component
Vue.component('content-item', {
	template: '#content-item',

	props: ['cloths'],

	data: function() {
		return {
			show: true,
			show_more: {
				height: '370px',
				overflow: 'hidden'
			},
			show_less: {
				height: 'auto',
				overflow: 'visible'
			},
		}
	},

	methods: {
		toggle: function() {
			this.show = !this.show;
		}
	}
})


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
		somi_nu: somi_data.cloths,
		vest_nu: vest_nu.cloths,
		chan_vay: chan_vay.cloths,
		quan: quan.clohts,
		vay_dam: vay_dam.cloths
	}

});