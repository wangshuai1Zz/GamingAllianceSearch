<template>
    <van-nav-bar title="标题" left-arrow class="topBar" fixed safe-area-inset-top placeholder>
        <template #right>
            <van-icon name="search" size="18" @click="goSearch" />
        </template>
    </van-nav-bar>
    <router-view />
    <van-tabbar route fixed placeholder safe-area-inset-bottom>
        <van-tabbar-item replace to="/" icon="home-o" name="home">主页</van-tabbar-item>
        <van-tabbar-item replace to="/team" icon="friends-o" name="Team">组队</van-tabbar-item>
        <van-tabbar-item replace to="/user" icon="manager-o" name="User">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';

const goSearch = () => {
    console.log('goSearch');
};
</script>

<style lang="scss" scoped></style>
