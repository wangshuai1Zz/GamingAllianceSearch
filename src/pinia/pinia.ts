import { defineStore } from 'pinia';

export const useMyStore = defineStore('myStore', {
    state: () => ({
        // Define your state properties here
        count: 0,
        name: '',
    }),
    getters: {
        // Define your getters here
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        // Define your actions here
        increment() {
            this.count++;
        },
        setName(name: string) {
            this.name = name;
        },
    },
});