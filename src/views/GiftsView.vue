<template>
  <main-master-page>
    <div class="wraper">
      <h2>Список подарунків:</h2>
      <form-add title="Додати подарунок" @onAdd="addGift" />
      <div class="block__list">
        <div v-for="item in listGifts" :key="item.id">
          <item-card :data-item="item" @deleteItem="deleteGift" />
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useGiftsStore } from "../store/gifts";
import FormAdd from "../components/FormAdd.vue";
import ItemCard from "../components/ItemCard.vue";
import MainMasterPage from "../masterpage/MainMasterPage.vue";

export default {
  name: "GiftsView",
  components: { MainMasterPage, FormAdd, ItemCard },
  computed: {
    ...mapState(useGiftsStore, ["listGifts"]),
  },
  methods: {
    ...mapActions(useGiftsStore, ["addGift", "deleteGift"]),
  },
};
</script>

<style lang="scss" scoped>
.wraper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block__list {
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>