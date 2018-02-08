<template>
  <header>
    <a href="/">
      <img id="logo" src="../assets/logo.png" alt="慎思笃行">
    </a>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style>
  header {
    width: 100%;
	height: 60px;
	line-height: 60px;
	font-size: 1.3rem;
	color: #fff;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: #66CC99;
	box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
	padding-left: 2rem;
  }
  #logo {
    height: 100%;
  }
</style>
