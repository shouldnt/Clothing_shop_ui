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

	props: ['cloths', 'title'],

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

//img-slider-component
Vue.component('img-slider', {
  template: '#img-slider-template',
  replace: true
});

// main menu vue instance
var main_menu = new Vue({
	el: '#main-menu',
	data: {
		scrollPosition: null,
		cloths: vest_nu.cloths,
		bag: {},
		fav: {}
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

// menu item vue instance

// slide images
var slider = new Vue({
	el: '.slide-container'
});

var product = new Vue({
	el: '#content__right',

	data: {
		my_data: [
			{item: somi_data.cloths, title: "Áo sơmi nữ"}, 
			{item: vest_nu.cloths, title: "Vest nữ"},
			{item: chan_vay.cloths, title: "Chân váy"},
			{item: quan.clohts, title: "Quần công sở"},
			{item: vay_dam.cloths, title: "Vấy đầm"}
		]
			
		
	}

});