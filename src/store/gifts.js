import { defineStore } from "pinia";
import { useAppointmentStore } from "../store/appointment";
import { searchId } from "@/store/helper";
export const useGiftsStore = defineStore(
    'gifts',
    {
        state: () => ({
            listGifts: [
                {
                    id: 1,
                    name: 'Торт',
                },
                {
                    id: 2,
                    name: 'Цукерки',
                },
                {
                    id: 3,
                    name: 'Листівки',
                },
            ]
        }),
        getters: {
            getGiftById: (state) => (id) => state.listGifts.find(item => item.id === id)
        },
        actions: {
            addGift(val) {
                this.listGifts.push({
                    id: new Date().getMilliseconds(),
                    name: val
                })
            },
            deleteGift(id) {
                console.log(id);
                const appoint = useAppointmentStore()
                const deletAppoint = searchId(appoint.listAppointment, id, 'giftsId')
                if (deletAppoint) {
                    appoint.deleteAppointment(id)
                }
                this.listGifts = this.listGifts.filter(item =>
                    item.id !== id)
            }
        }

    })