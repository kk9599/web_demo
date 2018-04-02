<template>
  <div id="app">
    <el-card class="index-card">
      <div slot="header">
        My Codes
      </div>
      <h1>{{msg}}</h1>
      <ul>
        <li>
          <a href="https://github.com/Plortinus/vue-multiple-pages" target="_blank">
            Vue Multiple Pages
          </a>
        </li>
        <li>
          <a href="https://github.com/Plortinus/element-china-area-data" target="_blank">
            Element China Area Data
          </a>
        </li>
      </ul>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'main page',
    data() {
      return {
        msg: 'Use Vue 2.0 Today!'
      }
    }
  }
</script>
