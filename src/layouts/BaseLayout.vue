<template>
    <div class="BaseLayout">
        <van-nav-bar title="标题" left-arrow class="topBar" fixed safe-area-inset-top placeholder @click-left="Back">
            <template #right>
                <van-icon name="search" size="18" @click="goSearch" />
            </template>
        </van-nav-bar>
        <div class="main">
            <router-view />
        </div>
        <footer class="footer">
            by shuaiwang
        </footer>
        <van-tabbar route fixed placeholder safe-area-inset-bottom class="tabBar">
            <van-tabbar-item replace to="/" icon="home-o" name="home">主页</van-tabbar-item>
            <van-tabbar-item replace to="/team" icon="friends-o" name="Team">组队</van-tabbar-item>
            <van-tabbar-item replace to="/user" icon="manager-o" name="User">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script setup>
import { NavBar } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const route = useRouter()
const goSearch = () => {
    route.push('/search');
};
const Back = () => history.back();
</script>

<style lang="scss" scoped>
.BaseLayout {
    display: flex;
    flex-direction: column;
    height: 100vh;
}

.topBar,
.tabBar,
.footer {
    flex-shrink: 0;
}

.main {
    flex-grow: 1;
    overflow: auto;
}
</style>
