<template>
    <van-popup v-model:show="show" @click-overlay="onClickOverlay" round :style="{ padding: '64px' }" transition="fade">
        <div>
            <van-loading vertical>
                <template #icon>
                    <van-icon name="star-o" size="30" />
                </template>
                加载中...
            </van-loading>
        </div>
    </van-popup>
</template>

<script setup>
import { } from "vue"
import { Loading } from 'vant';
import { ref } from 'vue';

const show = ref(true);
const onClickOverlay = () => {
    show.value = false;
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
