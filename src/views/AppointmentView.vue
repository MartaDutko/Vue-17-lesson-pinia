<template>
  <main-master-page>
    <div class="wraper">
      <div v-show="getFillListAppointment.length">
        <div v-for="item in getFillListAppointment" :key="item.id">
          {{ item.friends }} - {{ item.gifts }}
        </div>
      </div>

      <selected-form
        :dataFirstSelect="listFriends"
        :dataSecondSelect="listGifts"
        @userChoose="addAppointment"
      />
    </div>
  </main-master-page>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useAppointmentStore } from "../store/appointment";
import { useFriendsStore } from "../store/friends";
import { useGiftsStore } from "../store/gifts";
import MainMasterPage from "../masterpage/MainMasterPage.vue";
import SelectedForm from "../components/SelectedForm.vue";

export default {
  name: "AppointmentView",
  components: { MainMasterPage, SelectedForm },
  computed: {
    ...mapState(useAppointmentStore, ["getFillListAppointment"]),
    ...mapState(useFriendsStore, ["listFriends"]),
    ...mapState(useGiftsStore, ["listGifts"]),
  },
  methods: {
    ...mapActions(useAppointmentStore, ["addAppointment"]),
  },
};
</script>

<style lang="scss" scoped>
.wraper {
  padding: 5%;
}
</style>