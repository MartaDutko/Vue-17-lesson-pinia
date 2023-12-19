<template>
  <div>
    <v-select
      v-model="selectItem.friendsId"
      :items="dataFirstSelect"
      item-title="name"
      item-value="id"
      label="choose"
    />
    <v-select
      v-model="selectItem.giftsId"
      :items="dataSecondSelect"
      item-title="name"
      item-value="id"
      label="choose"
    />

    <v-btn @click="onChoose"> Add </v-btn>
  </div>
</template>

<script>
export default {
  name: "SelectedForm",
  props: {
    dataFirstSelect: {
      type: Array,
      default: () => [],
    },
    dataSecondSelect: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectItem: {},
    };
  },
  methods: {
    onChoose() {
      this.$emit("userChoose", this.selectItem);
      this.selectItem = {};
    },
  },
};
</script>

<style lang="scss" scoped>
</style>