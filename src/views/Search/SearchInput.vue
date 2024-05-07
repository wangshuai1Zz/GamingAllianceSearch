<template>
    <div class="inSearch">
        <van-row class="vanRow" justify="center" gutter="1">
            <van-col span="18" class="vanCol">
                <div class="nes-field is-inline">
                    <input ref="searchInput" type="text" id="inline_field" class="nes-input is-success"
                        placeholder="请输入标签" @input="getInputs">
                </div>
            </van-col>
            <van-col span="4"><button type="button" class="nes-btn is-error" @click="onReset">重置</button></van-col>
        </van-row>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const searchInput = ref(null);
const emit = defineEmits(['getInput']);
const getInputs = () => {
    emit('getInput', searchInput.value.value);
};
const onReset = () => {
    searchInput.value.value = '';
    getInputs()
};

// 在组件挂载后聚焦到输入框
onMounted(() => {
    searchInput.value.focus();
});
</script>

<style lang="scss" scoped>
.inSearch {
    display: flex;
    flex-direction: column;
}

.nes-btn.is-error {
    font-size: 13px;
    width: 100%;
    height: 30px;
    padding: 0;
}

.nes-input.is-success {
    padding: 4px;
    height: 30px;
}
</style>
