<template>
    <van-nav-bar title="标题" left-arrow class="topBar" fixed safe-area-inset-top placeholder>
        <template #right>
            <van-icon name="search" size="18" />
        </template>
    </van-nav-bar>
    <div v-if="active === 'home'">
        <h1 style="color: aliceblue;">首页</h1>
    </div>
    <div v-if="active === 'friends'">
        <h1 style="color: aliceblue;">组队</h1>
    </div>
    <div v-if="active === 'mine'">
        <h1 style="color: aliceblue;">我的</h1>
    </div>
    <slot name="body_slot"></slot>
    <van-tabbar v-model="active" @change="onChange" fixed placeholder safe-area-inset-bottom>
        <van-tabbar-item icon="home-o" name="home">主页</van-tabbar-item>
        <van-tabbar-item icon="friends-o" name="friends">组队</van-tabbar-item>
        <van-tabbar-item icon="manager-o" name="mine">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';

const active = ref("home");
const onChange = (index) => {
    console.log(index);
}
</script>

<style scoped>
/* 禁止文本选择 */
.van-tabbar-item {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>
