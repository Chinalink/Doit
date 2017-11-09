<template>
  <div id="app">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <router-view class="page-warp"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
  .page-warp {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
</style>
