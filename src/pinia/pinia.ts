import { defineStore } from 'pinia';

export const LoadingStore = defineStore('loadingStore', {
    state: () => ({
        show: 'false',
    }),
});