<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    
    <h2>Ecosystem111</h2>
     
  </div>
</template>

<script>
import axios from 'axios'
//import '../../mockData/mockSimple'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js Apps'
    }
  },
  created(){
    axios.get('api/getComment',{dataType:'json'})
      .then(res=>{
       this.msg = res.data.result.author
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="styl" scoped>
h1, h2 
  font-weight: normal;

ul 
  list-style-type: none;
  padding: 0;

li 
  display: inline-block;
  margin: 0 10px;

a 
  color: #42b983;
a:hover
  color:red;
</style>
