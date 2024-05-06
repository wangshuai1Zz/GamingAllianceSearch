<template>
    <div class="Search">
        <van-row class="vanRow" justify="center" gutter="1">
            <van-col span="18" class="vanCol">
                <div class="nes-field is-inline">
                    <input type="text" id="inline_field" class="nes-input is-success" placeholder="请输入标签">
                </div>
            </van-col>
            <van-col span="4"><button type="button" class="nes-btn is-error">确认</button></van-col>
        </van-row>
    </div>
</template>

<script setup>
import { } from "vue"
import { Col, Row } from 'vant';
</script>

<style lang="scss" scoped>
.Search {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding: 0;
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