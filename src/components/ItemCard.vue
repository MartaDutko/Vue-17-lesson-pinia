<template>
  <div class="item__block">
    <p>
      {{ dataItem.name }}
    </p>
    <v-btn variant="tonal" @click="onDelete(dataItem.id)">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "ItemCard",
  props: {
    dataItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onDelete(id) {
      this.$emit("deleteItem", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item__block {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>