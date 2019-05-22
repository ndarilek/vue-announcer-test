<template>
  <div>
    <vue-announcer/>
    <ul>
      <li><router-link :to="{name: 'index'}">Home</router-link></li>
      <li><router-link :to="{name: 'about'}">About</router-link></li>
    </ul>
    <router-view/>
  </div>
</template>
