<template>
  <ToolBar></ToolBar>
  <router-view v-slot="{ Component }">
    <transition name="page">
      <component :is="Component" />
    </transition>
</router-view>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
export default {
  name: 'App',
  components: {
    ToolBar,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* Router Transition */
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}

</style>
