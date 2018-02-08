<template>
  <div id="app">
    <Header />
  	<SideMenu/>
    <router-view/>
  </div>
</template>

<script>
import SideMenu from '@/components/SideMenu'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
  	SideMenu,
	Header
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  padding-left: 300px;
  padding-top: 60px;

}
</style>
