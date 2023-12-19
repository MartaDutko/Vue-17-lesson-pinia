import { defineStore } from "pinia";
import { useFriendsStore } from "@/store/friends";
import { useGiftsStore } from "@/store/gifts";
export const useAppointmentStore = defineStore(
    'appointment',
    {
        state: () => ({
            listAppointment: [
                {
                    id: 1,
                    friendsId: 1,
                    giftsId: 1,
                },
                {
                    id: 2,
                    friendsId: 2,
                    giftsId: 2,
                }
            ]
        }),
        getters: {
            getFillListAppointment: (state) => {
                const friends = useFriendsStore()
                const gifts = useGiftsStore()
                return state.listAppointment.map(item => ({
                    id: item.id,
                    friends: friends.getFriendById(item.friendsId).name,
                    gifts: gifts.getGiftById(item.giftsId).name
                })
                )
            }
        },
        actions: {
            deleteAppointment(id) {
                this.listAppointment = this.listAppointment.filter(item => item.id !== id)
            },
            addAppointment(obj) {
                this.listAppointment.push({
                    id: new Date().getMilliseconds(),
                    ...obj
                })
            }
        },

    })