<template>
  <section class="hero">
    <video
      class="hero-video"
      src="~/assets/videos/home-yukon.mp4"
      playsinline autoplay muted loop>
    </video>

    <div class="hero-content">
      <div class="container">
        <p class="subtitle">Yukon</p>
        <p class="title">Arctic Ultra</p>
        <p class="tagline">La course d'ultra la plus froide et la plus difficile au monde</p>
        <p><a href="https://youtu.be/yLOG3ipbeNg" class="button" target="_blank">Voir le teaser</a></p>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.hero
  position: relative
  display: grid
  place-items: center
  height: 65vh
  min-height: 450px
  width: 100%

  +tablet
    min-height: 500px

.hero-video
  position: absolute
  z-index: 0
  object-fit: cover
  width: 100%
  height: 99%
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)

.hero-content
  z-index: 1
  width: 100%
  height: 100%
  background: url("~/assets/images/trash-bottom-2.png") repeat-x center bottom
  background-size: 100%
  display: flex
  align-items: center
  text-align: center

  +desktop
    text-align: left

.title
  font-family: Anton
  color: #fff
  font-size: 85px
  line-height: 85px
  font-weight: 400
  letter-spacing: -1px
  text-transform: uppercase
  text-shadow: 2px 2px 6px #333
  margin: 0

.subtitle
  font-family: Allison
  font-size: 110px
  line-height: 90px
  font-weight: 700
  color: $primary
  text-shadow: 1px 1px 6px #333
  margin: 0
  z-index: 1

.tagline
  font-size: 26px
  color: #fff
  margin: 10px 0 30px 0
  text-shadow: 0 0 3px #999

.button
  font-size: 16px
  font-weight: bold
  padding: 15px 20px
  background-color: $secondary
  color: #fff
  text-decoration: none
  text-transform: uppercase
  text-shadow: 0 0 3px #666

  &:hover
    background-color: #d9441c
</style>
