<template>
  <div id="app">
    <router-view class="view"/>
    <tab-bar v-show="!$route.meta.visible"/>
  </div>
</template>

<script lang="ts">

import TabBar from '@/components/tab-bar.vue'
 
export default{
components:{
  TabBar
}
}

</script>

<style lang="scss">
</style>
