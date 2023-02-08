<template>
  <section class="wrapper">
    <div class="container">
      <h1><em>Derniers</em> projets</h1>

      <div class="projects">
        <NuxtLink to="/projects" class="card">
          <div class="card-image">
            <img src="~/assets/images/home/sandrine.jpg" alt="Sandrine" />
          </div>
          <div class="card-content">
            <h2 class="title">Sandrine</h2>
            <h3 class="subtitle">Courir Sierre-Zinal avec une aveugle</h3>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects" class="card">
          <div class="card-image">
            <img src="~/assets/images/home/lapland.jpg" alt="Laponie" />
          </div>
          <div class="card-content">
            <h2 class="title">Laponie</h2>
            <h3 class="subtitle">La revanche du Grand Nord</h3>
          </div>
        </NuxtLink>

        <NuxtLink to="/projects" class="card">
          <div class="card-image">
            <img src="~/assets/images/home/grand-to-grand.jpg" alt="Grand to Grand">
          </div>
          <div class="card-content">
            <h2 class="title">Grand to Grand</h2>
            <h3 class="subtitle">Un ultra-trail de 270 km en Utah</h3>
          </div>
        </NuxtLink>
      </div>

      <div class="has-text-centered my-5">
        <NuxtLink to="/projects" class="button">
          Voir tous les projets
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style lang="sass" scoped>
.wrapper
  background-image: url("~/assets/images/bg-green-dots.jpg")
  background-size: cover

h1
  font-family: Anton
  font-size: 60px
  text-transform: uppercase
  line-height: 1
  margin: 24px 0

  em
    font-family: 'Great Sejagad'
    color: $primary
    display: block
    font-size: 28px
    line-height: 1
    position: relative

.projects
  display: flex
  justify-content: space-between
  column-gap: 30px

.card
  width: 100%
  height: 320px
  overflow: hidden
  position: relative

  &:hover img
    transform: scale(1.1)

.card-image
  width: 100%
  height: 100%
  position: absolute

  img
    width: 100%
    height: 100%
    object-fit: cover
    transition: 0.7s

.card-content
  top: 0
  bottom: 0
  position: absolute
  display: flex
  flex-direction: column
  justify-content: flex-end
  color: #fff
  padding: 16px

  .title
    font-family: Anton
    text-transform: uppercase
    text-shadow: 1px 1px 4px #333
    font-size: 40px
    margin: 0

  .subtitle
    text-shadow: 1px 1px 4px #333
    font-size: 22px
    margin: 0

.button
  font-size: 16px
  font-weight: bold
  padding: 15px 20px
  background-color: $secondary
  color: #fff
  text-decoration: none
  text-transform: uppercase
  text-shadow: 0 0 3px #666
  display: inline-block

  &:hover
    background-color: #d9441c
</style>