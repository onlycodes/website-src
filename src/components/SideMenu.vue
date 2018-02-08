<template>
  <nav id="nav">
	<ul>
	  <li v-for="menu in menus">
        <h2>{{ menu.title }}</h2>
      	<ul class="subnav">
      	  <li v-for="subMenu in menu.subMenus">
	        <router-link :to="subMenu.path">{{ subMenu.name }}</router-link>
          </li>
      	</ul>
      </li>
	</ul>
  </nav>
</template>

<script>
  import doGet from '@/assets/xhr.js';
  const url = '/static/menus.json';

  export default {
    name: 'SideMenu',
    data () {
      return {
        menus: {}
      }
    },
    created () {
      const that = this;
      doGet(url).then((res) => {
        let data = JSON.parse(res);
        that.menus = data.menus;
      });
    }
  }
</script>
<style scope>
  #nav {
    width: 300px;
	height: 100%;
    position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	background-color: #66cc66;
    padding: .8rem;
    padding-top: 60px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  #nav a {
    text-decoration: none;
    color: #FFFFCC;
    font-size: .8rem;
    line-height: 1.1rem;
  }
  #nav h2 {
    font-size: .85rem;
    color: #FFFFCC;
    font-weight: normal;
    padding: .4rem 0;
  }
  .subnav {
    padding-left: .8rem;
  }
  #nav .subnav .router-link-active {
    color: #CC6633;
  }
  @media scree and (max-width: 720px) {
    #nav {
      display: block;
    }
  }
</style>
