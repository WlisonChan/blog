<template>
  <div id="particles-js">
    <vue-particles
      color="#a7dcff"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="polygon"
      :particleSize="4"
      linesColor="#a7dcff"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="2"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
      class="lizi"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'Magic'
}
</script>

<style scoped>

</style>
