import { defineStore } from "pinia";
import { useAppointmentStore } from "../store/appointment";
import { searchId } from "@/store/helper";
export const useFriendsStore = defineStore(
    'friends',
    {
        state: () => ({
            listFriends: [
                {
                    id: 1,
                    name: 'Olia',
                },
                {
                    id: 2,
                    name: 'Ivan',
                },
                {
                    id: 3,
                    name: 'Petro',
                },
                {
                    id: 4,
                    name: 'Pavlo',
                },
            ]
        }),
        getters: {
            getFriendById: (state) => (id) => state.listFriends.find(item => item.id === id)
        },
        actions: {
            addFriend(val) {
                this.listFriends.push({
                    id: new Date().getMilliseconds(),
                    name: val
                })

            },
            deleteFrend(id) {
                const appointment = useAppointmentStore()
                const deleteAppoint = searchId(appointment.listAppointment, id, 'friendsId')
                console.log("deleteAppoint");
                console.log(deleteAppoint?.id);
                if (deleteAppoint) {
                    appointment.deleteAppointment(deleteAppoint.id)
                }
                this.listFriends = this.listFriends.filter(item =>
                    item.id !== id)

            }
        }

    })