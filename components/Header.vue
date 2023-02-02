<template>
  <div class="header">
    <h1 class="logo">
      <NuxtLink to="/">
        <img src="~/assets/images/logo.jpg" alt="OUT'CHA" />
      </NuxtLink>
    </h1>

    <ul class="nav">
      <li>
        <NuxtLink to="/">Accueil</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">L'association</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects">Les projets</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/team">La Team</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="sass" scoped>
.header
  background-color: #fff
  display: flex
  align-items: center
  padding: 30px 45px 20px 45px
  justify-content: center

  +desktop
    justify-content: space-between

.logo
  margin: 0

  img
    height: 70px

.nav
  list-style: none
  margin: 0
  padding: 0
  display: none

  +desktop
    display: flex

  li
    padding: 0 12px 12px 12px

  a
    text-decoration: none
    color: #333
    text-transform: uppercase
    line-height: 40px
    padding: 10px 0

    &:hover
      border-bottom: 2px solid #ff1130

    &.router-link-active
      color: #ff1130
</style>
