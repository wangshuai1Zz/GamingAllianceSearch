<template>
  <div class="user-profile">
    <van-nav-bar title="个人信息" />
    <van-cell-group inset>
      <van-cell title="头像" center>
        <template #default>
          <van-image round width="4rem" height="4rem" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        </template>
      </van-cell>
      <van-cell title="姓名" value="张三" />
      <van-cell title="年龄" value="28" />
      <van-cell title="职业" value="前端开发工程师" />
      <van-cell title="城市" value="北京" />
      <van-cell title="简介" value="我是一个热爱编程的前端开发者。" />
      <van-cell title="技能" value="HTML, CSS, JavaScript, Vue.js" />
    </van-cell-group>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NavBar, Cell, CellGroup, Image } from 'vant';

const onBack = () => {
  // 处理返回逻辑，例如返回上一页
  // 如果是在 Vue Router 中，可以使用 this.$router.go(-1)
  console.log('返回');
};
</script>

<style>
.user-profile {
  font-family: 'Arial', sans-serif;
}

.user-profile .van-nav-bar {
  background-color: #66d2e0;
  /* 顶部导航栏背景色 */
  color: white;
  /* 顶部导航栏文字颜色 */
}

.user-profile .van-nav-bar .van-icon {
  color: white;
  /* 顶部导航栏图标颜色 */
}

.user-profile .van-cell {
  display: flex;
  /* 使用 flex 布局 */
  align-items: center;
  /* 细胞内的内容垂直居中 */
}

.user-profile .van-cell .van-cell__title {
  flex: 1;
  /* 标题占据剩余空间 */
  font-weight: bold;
  /* 标题加粗 */
}

.user-profile .van-cell .van-cell__value {
  flex: 5;
  /* 值占据更多的空间 */
  color: #616161;
  /* 值的颜色 */
}

.user-profile .van-cell-group {
  background-color: #f5f5f5;
  /* 细胞组背景色 */
}

.user-profile .van-image {
  margin-right: 10px;
  /* 头像图片间距 */
}
</style>
