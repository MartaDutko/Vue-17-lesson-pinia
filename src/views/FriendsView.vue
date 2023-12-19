<template>
  <main-master-page>
    <div class="wraper">
      <h2>Список друзів:</h2>
      <form-add title="Додати друга" @onAdd="addFriend" />
      <div class="block__list">
        <div v-for="item in listFriends" :key="item.id" class="list-item">
          <item-card :data-item="item" @deleteItem="deleteFrend" />
        </div>
      </div>
    </div>
  </main-master-page>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useFriendsStore } from "../store/friends";
import ItemCard from "@/components/ItemCard.vue";
import MainMasterPage from "../masterpage/MainMasterPage.vue";
import FormAdd from "../components/FormAdd.vue";
export default {
  name: "FriendsView",
  components: { MainMasterPage, ItemCard, FormAdd },
  computed: {
    ...mapState(useFriendsStore, ["listFriends"]),
  },
  methods: {
    ...mapActions(useFriendsStore, ["deleteFrend", "addFriend"]),
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