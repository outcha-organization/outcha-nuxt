<script lang="ts" setup>
import { onMounted, onUnmounted } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    required: true
  }
})

function parallaxEffect() {
  const distance = window.scrollY
  document.querySelector('.banner-image').style.transform = `translateY(${distance * 0.2}px)`
}

onMounted(() => {
  window.addEventListener('scroll', parallaxEffect)
})

onUnmounted(() => {
  window.removeEventListener('scroll', parallaxEffect)
})
</script>

<template>
  <div class="banner">
    <div class="banner-image">
      <img :src="`images/${imageURL}`" :alt="title">
    </div>

    <h1 class="banner-title">{{ title }}</h1>
  </div>
</template>

<style lang="sass" scoped>
.banner
  position: relative
  background: url("../assets/images/trash-bottom-1.png") repeat-x bottom center
  background-size: 100%
  height: 250px
  display: flex
  justify-content: center
  align-items: center

  +tablet
    height: 300px

  +desktop
    height: 350px

  .banner-image
    z-index: -1
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    object-fit: cover

    img
      position: absolute
      top: -8px
      left: 0
      width: 100%
      height: 100%
      object-fit: cover

  .banner-title
    color: #fff
    text-transform: uppercase
    font-size: 45px
    font-weight: bold
    letter-spacing: -3px
    text-shadow: 2px 2px 8px #333
    text-align: center
    position: relative

    +tablet
      font-size: 59px
</style>
