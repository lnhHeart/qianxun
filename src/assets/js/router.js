import VueRouter from 'vue-router';
import header from '../../component/index/header.vue';
import classification from '../../component/footer/classification.vue';
import listing from '../../component/footer/listing.vue';
import my from '../../component/footer/my.vue';
import cart from '../../component/footer/cart.vue';
import like from '../../component/footer/like.vue'
export default new VueRouter({
	routes:[
	{path:'/',component:header},
	{path:'/classification',component:classification},
	{path:'/listing',component:listing},
	{path:'/my',component:my},
	{path:'/cart',component:cart},
	{path:'/like',component:like},
	]
})