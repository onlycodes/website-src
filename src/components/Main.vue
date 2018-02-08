<template>
	<div id="main">
	  <div id="content" class="content" v-html="content"></div>
	</div>
</template>

<script>
import doGet from '@/assets/xhr.js'

export default {
  name: 'Main',
  data () {
    return {
      content: '<div style="text-align:center;margin-top: 1rem;font-size:1.3rem;padding-left:80px;">'+
      '<h2>博学之</h2>' +
      '<h2>审问之</h2>' +
      '<h2>慎思之</h2>' +
      '<h2>明辨之</h2>' +
      '<h2>笃行之</h2>' +
      '</div>'
    }
  },
  watch: {
    '$route' (to, from) {
      let that = this
      let url = '/static/note/' +
                to.params.folder +
                '/' +
                to.params.filename;
      // 请求 html 文件
	  doGet(url).then(function (res) {
        that.content = res
      }).catch((err) => {
        
      });
    }
  }
}
</script>

<style scope>
#main {
  padding-right: 160px;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
#content {
  padding: .8rem 1.3rem;
  padding-left: 1.5rem;
}
#content p {
  font-size: .8rem;
  line-height: 1.2rem;
  padding: .4rem;
  margin-bottom: .25rem;
}
#content li {
  font-size: .8rem;
  line-height: 1.2rem;
}
.content a {
  text-decoration: none;
  color: #6600CC;
}
pre {
  background-color: #CCE8CF;
  padding: .5rem;
  line-height: 1.1rem;
  border-radius: 5px;
}

#table-of-contents {
  width: 160px;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  font-size: .6rem;
  padding-top: 60px;
  overflow-y: auto;
  border-left: 1px solid #99CCCC;
}
#table-of-contents h2 {
  font-size: .7rem;
  padding: .6rem 0 .4rem 0;
}
#content #table-of-contents li {
  font-size: .6rem;
  line-height: .8rem;
}
#text-table-of-contents {
  padding-left: .3rem;
}
#text-table-of-contents a {
  text-decoration: none;
  color: #9966CC;
  font-size: .6rem;
  line-height: .8rem;
}
#text-table-of-contents > ul > li > ul{
  padding-left: .6rem;
}
</style>
