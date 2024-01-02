<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Software Engineer, IT consultant <br/>
      <a href="https://github.com/Mac709/about-me" target="_blank" rel="noopener">View the Project on Github</a><br/>
      <h5>Mac709/about-me</h5>
    </h3>
  </div>
  <div style="margin-top: 5%;">
    This project is maintained by 
    <a href="https://github.com/Mac709/about-me" target="_blank" rel="noopener">Mac709</a>
  </div>
  Hosted on Github Pages
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
