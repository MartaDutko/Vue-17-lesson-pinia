<template>
  <div class="block__add">
    <div class="title">{{ title }}</div>
    <v-text-field
      v-model="name"
      outlined
      class="text-field bloc-input"
    ></v-text-field>
    <v-btn variant="tonal" @click="onAdd">Додати</v-btn>
  </div>
</template>

<script>
export default {
  name: "FormAdd",
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onAdd() {
      if (this.name !== null && this.name !== undefined && this.name !== "") {
        this.$emit("onAdd", this.name);
        this.name = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.block__add {
  padding: 2%;
  display: flex;
  align-items: center;
}

.title {
  margin-right: 20px;
}

.text-field {
  width: 200px;
}

.bloc-input {
  margin-right: 20px;
}
</style>
