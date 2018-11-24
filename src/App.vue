<template>
  <main>
			<div id="app">
				 <router-view></router-view>
			  	<ul>
			  		<li>
			  			<router-link to="/like">
			  				猜你喜欢
			  			</router-link>
			  		</li>
			  		<li>
			  			<router-link to="/classification" >分类</router-link>
			  		</li>
			  		<li>
			  			<router-link to="/listing">必抢清单</router-link>
			  		</li>
			  		<li>
			  			<router-link to="/cart">购物车</router-link>
			  		</li>
			  		<li>
			  			<router-link to="/my">我的易购</router-link>
			  		</li>
			  	</ul>
			</div>
     

    </main>
</template>

<script>
	
	export default{
		name:'',
	  data () {
	    return {
	      list:["猜你喜欢","分类","必抢清单","购物车","我的易购"]
	    }
	  }
		
	}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  position: fixed;
  bottom: 0px;
  display:flex;
  width: 100%;
  background-color: #fff;
  height: 50px;
}

li {
	  flex:1;
    display: inline-block;
    margin: 30px 10px;
    font-size: 14px;
}

a {
    color: #aaa;
}
</style>
