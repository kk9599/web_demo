<template>
  <div id="app">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
                 width="112" height="28">
          </a>
          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    <div id="title" class="animated bounce">H-E-L-L-O WORLD Animation</div>
    <!--img src="./assets/logo.png"-->
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import '~animate.css';

  $fa-font-path: '~font-awesome/fonts/';
  @import '~font-awesome/scss/font-awesome';

  .animated {
    animation-duration: .377s;
  }

  @import '~bulma';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: red;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  header {
    height: 55px;
    top: 0;
    left: 0;
    right: 0;
  }
</style>
