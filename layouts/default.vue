<template>
  <div>
    <TheHeader @sidenavToggle="displaySideNav=!displaySideNav"/>
    <TheSidenav 
    :show="displaySideNav"
    @close="displaySideNav=false"
    />
    <TheSideNavToggle/>
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "~/components/Navigation/TheHeader";
import TheSidenav from "~/components/Navigation/TheSidenav";
import TheSideNavToggle from "~/components/Navigation/TheSideNavToggle";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheSideNavToggle
  },
  data(){
    return {
      displaySideNav:false
    }
  }
};
</script>

<style scoped>
html {
  font-family: "Open Sans", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}
</style>
