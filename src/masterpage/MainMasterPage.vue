<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'friends' }">Friends</router-link> |
      <router-link :to="{ name: 'gifts' }">Gifts</router-link> |
      <router-link :to="{ name: 'appointment_gifts' }"
        >Appointment gifts</router-link
      >
    </nav>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "MainMasterPage",
};
</script>

<style lang="scss" scoped>
</style>