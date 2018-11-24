<template>
	<main>
		<div id="con">
			<mt-header title="">
			  <router-link to="/classification" slot="left">
			    <mt-button >分类</mt-button>
			  </router-link>
			  <input type="text" />
			  <router-link to="/" slot="right">
			  	<mt-button>登录</mt-button>
			  </router-link>
			</mt-header>
		</div>
		<div id="banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="(v,i) in list">
			  	<img :src="v.src" alt="" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div id="nav">
			<ul>
				<li v-for="(v,i) in navtal">
					<router-link to="/">
						<img :src="v.src" alt="" width="50px"/>
						<div>{{v.title}}</div>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="tt-content">
			<img src="../../assets/images/suning01.png" alt="" width="40px"/>
			<div class="list-wrapper">
				<ul>
					<li v-for="(v,i) in star">
						<router-link to="/">
							<p class="paw">
								<i>{{v.i}}</i>
								<span>{{v.span}}</span>
							</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
		<div id="new-floor">
			<router-link to="/">
				<img src="../../assets/images/suning02.jpg" alt="" width="100%" height="140px"/>
			</router-link>
			<div class="v5-gap" style="margin-bottom: 10px;"><hr /></div>
			<div class="v6-l1r2s hor-view"> 				
					<router-link to="/">
						<p class="title" style="color: #FF6A0C;">新会员专享</p> 
						<p class="des" style="color: #FA4B49;">注册即领新人礼包</p> 
						<img src="../../assets/images/suning03.jpg" alt="" width="48%"/>
						<img src="../../assets/images/suning04.jpg" alt="" width="48%"/>	
					</router-link>
				
			</div>
			
			<div class="pds" v-for="(v,i) in list1">
				<router-link to="/">
					<p class="title" style="color: #e62e2e;">{{v.title}}</p> 
					<p class="des" style="color: #FA4B49;">{{v.des}}</p> 
					<img :src="v.src" alt="" width="100px"/>
				</router-link>
			</div>
		</div>
		<div id="new-floor">
			<div class="v6-l1r2s hor-views"> 				
				<div class="hev">
					<router-link to="/">
						<p class="title" style="color: #FF6A0C;">掌上抢</p> 
						<p class="des" style="color: #FA4B49;">16点场 距离下场</p> 
						<img src="../../assets/images/sun01.jpg" alt="" width="31%"/>
						<img src="../../assets/images/sun02.jpg" alt="" width="31%"/>
						<img src="../../assets/images/sun03.jpg" alt="" width="31%"/>
					</router-link>
				</div>
				<div class="pda">
					<router-link to="/">
						<p class="title" style="color: #e62e2e;">排行榜</p> 
						<p class="des" style="color: #FA4B49;">今日畅销爆款</p> 
						<img src="../../assets/images/sun06.webp.jpg" alt="" width="100%"/>
					</router-link>
				</div>
				<div class="pda">
					<router-link to="/">
						<p class="title" style="color: #e62e2e;">好货</p> 
						<p class="des" style="color: #FA4B49;">品质生活甄选</p> 
						<img src="../../assets/images/sun07.webp.jpg" alt="" width="100%"/>
					</router-link>
				</div>
			</div>
			<div class="v6-l1r2s hor-view"> 				
				<div class="weight">
					<router-link to="/">
						<p class="title" style="color: #FF6A0C;">苏宁Outlets <span style="font-size: 14px; font-weight: normal;">保暖上新季</span></p> 
						<p class="des" style="color: #FA4B49;">折后领卷 满269减50</p> 
						<img src="../../assets/images/sun04.webp.jpg" alt="" width="31%"/>
						<img src="../../assets/images/sun05.png" alt="" width="31%"/>
						<img src="../../assets/images/sun05.png" alt="" width="31%"/>
					</router-link>
				</div>
			</div>
			<div class="v6-l1r2s hor-view">
				<div class="weight"> 				
					<router-link to="/">
						<p class="title" style="color: #FF6A0C;">苏宁拼购</p> 
						<p class="des" style="color: #FA4B49;">板栗糕13.9 棉拖鞋14.9</p> 
						<img src="../../assets/images/sun08.jpg" alt="" width="48%"/>
						<img src="../../assets/images/sun09.jpg" alt="" width="48%"/>
					</router-link>
				</div>
			</div>
			<img src="../../assets/images/sun10.gif" alt="" width="100%"/>
		</div>
		<div id="new-floor">
			<img src="../../assets/images/SUN11.png" alt="" width="100%"/>
			<div class="v6-l1r2s hor-view" v-for="(v,i) in list2"> 				
				<router-link to="/">
					<p class="title" style="color: #FF6A0C;">{{v.title}}</p> 
					<p class="des" style="color: #FA4B49;">{{v.des}}</p> 
					<img :src="v.src" alt="" width="48%"/>
					<img :src="v.scr" alt="" width="48%"/>
				</router-link>
			</div>	
		</div>
		<div id="new-floor">
			<img src="../../assets/images/SUN02.png" alt="" width="100%"/>
			<div class="v6-l1r2s hor-view" v-for="(v,i) in list3"> 				
				<router-link to="/">
					<p class="title" style="color: #FF6A0C;">{{v.title}}</p> 
					<p class="des" style="color: #FA4B49;">{{v.des}}</p> 
					<img :src="v.src" alt="" width="48%"/>
					<img :src="v.scr" alt="" width="48%"/>
				</router-link>
			</div>
			<img src="../../assets/images/SUN03.png" alt="" width="100%"/>
		</div>
		<div id="bnner" style="width: 100%; height: 110px;">
			<mt-swipe :show-indicators="false">
			  <mt-swipe-item v-for="(v,i) in list4">
			  	<img :src="v.src" alt="" />
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div id="new-floor">
			<div class="v6-l1r2s hor-view" v-for="(v,i) in list5"> 				
				<router-link to="/">
					<p class="title" style="color: #FF6A0C;">{{v.title}}</p> 
					<p class="des" style="color: #FA4B49;">{{v.des}}</p> 
					<img :src="v.src" alt="" width="48%"/>
					<img :src="v.scr" alt="" width="48%"/>
				</router-link>
			</div>	
		</div>
		<router-view></router-view>
	</main>
</template>

<script>
	export default {
		name:'',
		data(){
		return {
			list:[
			{src:require('../../assets/images/shuffling01.jpg')},
			{src:require('../../assets/images/shuffling02.jpg')},
			{src:require('../../assets/images/shuffling03.jpg')},
			{src:require('../../assets/images/shuffling04.jpg')},
			{src:require('../../assets/images/shuffling05.jpg')},
			{src:require('../../assets/images/shuffling06.jpg')},
			{src:require('../../assets/images/shuffling07.jpg')}
			],
			navtal:[
			{
				src:require('../../assets/images/banner01.png'),
				title:'爆款手机'
			},
			{
				src:require('../../assets/images/banner02.png'),
				title:'苏宁超市'
			},
			{
				src:require('../../assets/images/banner03.png'),
				title:'生活家电'
			},
			{
				src:require('../../assets/images/banner04.png'),
				title:'苏宁拼购'
			},
			{
				src:require('../../assets/images/banner05.png'),
				title:'母婴玩具'
			},
			{
				src:require('../../assets/images/banner06.png'),
				title:'大聚惠'
			},
			{
				src:require('../../assets/images/banner07.png'),
				title:'赚钱'
			},
			{
				src:require('../../assets/images/banner08.png'),
				title:'领云钻'
			},
			{
				src:require('../../assets/images/banner09.png'),
				title:'苏宁家电'
			},
			{
				src:require('../../assets/images/banner10.png'),
				title:'分类'
			}
			],
			star:[
			{
				i:'热议',
				span:'让你的华为手机变身电脑？这个扩展坞玩法多样'
			},
			{
				i:'热议',
				span:'黑枸杞|枸杞界的劳斯莱斯，营养价值秒杀红枸杞！'
			},
			{
				i:'热议',
				span:'再不买酒，怎么跟老丈人沟通感情'
			},
			{
				i:'热议',
				span:'新款kindle上市：容量更大，支持防水'
			},
			{
				i:'热议',
				span:'水果一股剩饭味？你家的冰箱要升级了！'
			},
			{
				i:'热议',
				span:'买了大黄靴，不会搭也是浪费'
			}
			],
			list1:[
			{
				title:'大牌助力',
				des:'好货任性抢',
				src:require('../../assets/images/suning05.jpg')
			},
			{
				title:'今日爆款',
				des:'特价包邮',
				src:require('../../assets/images/suning06.jpg')
			}
			],
			list2:[
			{
				title:'城市专享',
				des:'必抢好物 低至9.9元包邮',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open02.webp.jpg')
			},
			{
				title:'大聚惠',
				des:'狂欢不落幕 优惠继续在',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open05.webp.jpg')
			},
			{
				title:'领券中心',
				des:'时尚羽绒服 满399减200',
				src:require('../../assets/images/open06.png'),
				scr:require('../../assets/images/open07.png')
			},
			{
				title:'苏宁国际',
				des:'黑五必买榜 低至9.9包邮',
				src:require('../../assets/images/open08.webp.jpg'),
				scr:require('../../assets/images/open09.webp.jpg')
			},
			{
				title:'新品首发',
				des:'苏宁定制版 法兰琳卡面膜',
				src:require('../../assets/images/open10.jpg'),
				scr:require('../../assets/images/open11.jpg')
			},
			{
				title:'0元试用   苏宁生鲜',
				des:'华为mate20  每满99减30',
				src:require('../../assets/images/open12.jpg'),
				scr:require('../../assets/images/open13.png')
			},
			
			],
			list3:[
			{
				src:require('../../assets/images/chao01.jpg'),
			},
			{
				title:'手机馆',
				des:'iPhone XS 稀缺新品限量抢',
				src:require('../../assets/images/open12.jpg'),
				scr:require('../../assets/images/chao02.png')
			},
			{
				title:'电脑办公',
				des:'黑五狂欢 最高抵1000元',
				src:require('../../assets/images/open03.webp.jpg'),
				scr:require('../../assets/images/open04.webp.jpg')
			},
			
			{
				title:'苏宁极物',
				des:'极物感恩节 爆款直降200元,',
				src:require('../../assets/images/chao03.webp.jpg'),
				scr:require('../../assets/images/chao04.webp.jpg')
			},
			{
				title:'苏宁极物  苏宁数码 ',
				des:'购新更省钱   爆款满千减百',
				src:require('../../assets/images/open10.jpg'),
				scr:require('../../assets/images/open11.jpg')
			},
			{
				title:'手机馆',
				des:'iPhone XS 稀缺新品限量抢',
				src:require('../../assets/images/open12.jpg'),
				scr:require('../../assets/images/chao02.png')
			}
			],
			list4:[
			{src:require('../../assets/images/opa1.webp.jpg')},
			{src:require('../../assets/images/opa2.webp.jpg')},
			{src:require('../../assets/images/opa3.jpg')},
			
			],
			list5:[
			{
				
				src:require('../../assets/images/chao01.jpg'),
				
			},
			{
				title:'手机馆',
				des:'iPhone XS 稀缺新品限量抢',
				src:require('../../assets/images/open12.jpg'),
				scr:require('../../assets/images/chao02.png')
			},
			{
				title:'城市专享',
				des:'必抢好物 低至9.9元包邮',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open02.webp.jpg')
			},
			{
				title:'城市专享',
				des:'必抢好物 低至9.9元包邮',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open02.webp.jpg')
			},
			{
				title:'城市专享',
				des:'必抢好物 低至9.9元包邮',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open02.webp.jpg')
			},
			{
				title:'城市专享',
				des:'必抢好物 低至9.9元包邮',
				src:require('../../assets/images/open01.webp.jpg'),
				scr:require('../../assets/images/open02.webp.jpg')
			},
			]
		}
	  } 
	}
</script>

<style>
	*{
		padding: 0px;
		margin:0px;
		list-style: none;
		text-decoration: none;
		
	}
	body{
		width: 100%;
		
	}
	#con{
		width: 100%;
	}
	.mint-header{
		position: fixed;
		top: 0;
		z-index: 1;
		width: 100%;
		background-color: transparent;
	}
	#banner{
		width: 100%;
	}
	#banner .mint-swipe-items-wrap{
		padding-bottom: 50%;
		height: 0px;
		box-sizing: border-box;
	}
	#banner img{
		width:100%;
	}
	#nav{
		margin-bottom:10px;
	}
	#nav ul{
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		padding-left:0px;
		margin-top:0px;
	}
	#nav ul li{
		text-align: center;
		width:20%;
		padding:2%;
		box-sizing: border-box;
		font-size: 14px;
	}
	.tt-content{
	    width: 100%;
    	height: 2.4rem;
    	padding-left: 20px;
    	box-sizing: border-box;
	}
	.tt-content img{
		width: 10%;
		height: 100%;
		float: left;
	    background: 0;
	}
	.tt-content .list-wrapper{
	    float: left;
	    width: 85%;
	    height: 2rem;
	    margin: 0 0 0 -1.48rem;
	    overflow: hidden;
	    font-size: .48rem;
	    line-height: .7rem;
	}
	.tt-content .list-wrapper .paw{
		animation: add 8s linear infinite;
	  	animation-fill-mode: forwards;
		height: 20px;
    	margin-left: 45px;
	}
	@keyframes add{
		0%{
			transform: translateY(0);
		}
		25%{
			transform: translateY(-40px);
		}
		50%{
			transform: translateY(-40px);
		}
		75%{
			transform: translateY(-80px);
		}
		100%{
			transform: translateY(-80px);
		}
	}
	#new-floor{
		width: 100%;
		margin-bottom:10px;
	}
	#new-floor .title{		
        font-family: PingFangSC-Medium;
        font-weight: bold;
        font-size: 18px;
	}
	#new-floor .des{
	    font-size: 14px;
	}
	#new-floor .hor-view{
		display: inline-block;
		float: left;
		width: 50%;
	}
	#new-floor .hev{
		display: inline-block;
		float:left;
		width: 49%;
	}
	#new-floor .pds{
		display: inline-block;
		float:left;
		width: 24%;
	}
	.v5-gap {
    height: 1px;
	}
	#new-floor .pda{
		display: inline-block;
		width: 24%;
		float: left;
	}	
	#bnner img{
		width: 100%;
		height: 100%;
	}
	.hor-views{
		display: inline-block;
	}
</style>