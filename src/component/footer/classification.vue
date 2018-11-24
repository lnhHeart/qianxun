<template>
	<main>
		<div id="dct">
			<mt-search
			  v-model="value"
			  cancel-text="取消"
			  placeholder="搜索">
			</mt-search>
		</div>
		<div id="next" v-for="(v,i) in nts">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="playOne">{{v.text}}</mt-tab-item>
			</mt-navbar>
			
			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="playOne">
			    <div id="box">
			    	<mt-swipe :show-indicators="false">
					  <mt-swipe-item><img src="../../assets/images/play01.jpg" alt="" /></mt-swipe-item>
					  <mt-swipe-item><img src="../../assets/images/play02.jpg" alt="" /></mt-swipe-item>
					</mt-swipe>
			    </div>
			    <hgroup class="module-title prink" style="width: 100%;">
					<em>热门专场</em>
			    </hgroup>
			    <div class="hot-special" style="width: 100%;">
					<div style="width: 100%;">
						<router-link to="/">
							<img src="//image2.suning.cn/uimg/cms/img/154263062041361627.png" width="48%">
						</router-link>
						<router-link  to="/">
							<img src="//image2.suning.cn/uimg/cms/img/154263063341351217.png" width="48%">
						</router-link>
					</div>
				</div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
	</main>
</template>

<script>
	export default {
		
		data(){
			return {
				name:'',
				selected:'1',
				value:'',
				nts:[
				{
					text:'热门推荐',
				},
				{
					text:'热门推荐',
				},
				]
				
			}
		}
		
	}
</script>

<style>
*{
	margin: 0px;
	padding: 0px;
	list-style: none;
	text-decoration: none;
}
.mint-navbar .mint-tab-item.is-selected {
    color: #FE256B;
    border-right-color: transparent;
    background: #ddd;
    font-size: 18px;
    border-bottom: 0px solid #fff;
    border-left: 3px solid #FE256B;
    margin-bottom: -3px;
}
#dct{
	width: 100%;
	height: 50px;
}
.mint-navbar {
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    display: block;
    float: left;
}
.mint-navbar .mint-tab-item {
    padding: 18px 20px;
    font-size: 15px;
}
font {
    vertical-align: inherit;
    font-size: 24px;
}
#box{
		width: 100%;
}
#box .mint-swipe-items-wrap{
	padding-bottom: 50%;
	height: 0px;
	box-sizing: border-box;
}
#box img{
	width:100%;
}
.prink em{
	display: block;
    white-space: nowrap;
    font-size: 12px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
    font-weight: normal;
    font-style:normal;
    padding-bottom:30px;
}
</style>