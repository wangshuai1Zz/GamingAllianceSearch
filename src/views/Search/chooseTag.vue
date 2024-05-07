<template>
    <div class="inChooseTag">
        <van-row :gutter="[0, 8]">
            <van-col v-for="(item, index) of activeIds" span="5">
                <van-tag :show="show" closeable size="medium" type="primary" @close="tagClose(item)" mark>
                    {{ item }}
                </van-tag>
            </van-col>
        </van-row>
    </div>
    <div>
        <van-tree-select v-model:active-id="activeIds" v-model:main-active-index="activeIndex" :items="tags"
            @click-item="getTags" />
    </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { Tag } from 'vant';
import { TreeSelect } from 'vant';


const show = ref(false);
const tagClose = (item) => {
    activeIds.value = activeIds.value.filter((id) => id !== item);
};
const props = defineProps({
    Search: String,
})

const activeIds = ref([]);
const activeIndex = ref(0);
const initTags = ref([
    {
        text: '浙江',
        children: [
            { text: '杭州', id: '杭州' },
            { text: '温州', id: '温州' },
            { text: '宁波', id: '宁波' },
        ],
    },
    {
        text: '江苏',
        children: [
            { text: '南京', id: '南京' },
            { text: '无锡', id: '无锡' },
            { text: '徐州', id: '徐州' },
        ],
    },
    {
        text: '福建',
        children: [
            { text: '福州', id: '福州' },
            { text: '厦门', id: '厦门' },
            { text: '泉州', id: '泉州' },
        ],
    },
    {
        text: '广东',
        children: [
            { text: '广州', id: '广州' },
            { text: '深圳', id: '深圳' },
            { text: '东莞', id: '东莞' },
        ],
    },
    {
        text: '广西',
        children: [
            { text: '南宁', id: '南宁' },
            { text: '桂林', id: '桂林' },
            { text: '柳州', id: '柳州' },
        ],
    },
    {
        text: '湖南',
        children: [
            { text: '长沙', id: '长沙' },
            { text: '株洲', id: '株洲' },
            { text: '湘潭', id: '湘潭' },
        ],
    },
    {
        text: '湖北',
        children: [
            { text: '武汉', id: '武汉' },
            { text: '黄石', id: '黄石' },
            { text: '襄阳', id: '襄阳' },
        ],
    },
    {
        text: '河南',
        children: [
            { text: '郑州', id: '郑州' },
            { text: '洛阳', id: '洛阳' },
            { text: '开封', id: '开封' },
        ],
    },
    {
        text: '河北',
        children: [
            { text: '石家庄', id: '石家庄' },
            { text: '唐山', id: '唐山' },
            { text: '秦皇岛', id: '秦皇岛' },
        ],
    },
]);

const tags = ref(initTags.value);
watch(() => props.Search, (newSearch) => {
    if (newSearch) {
        const filteredTags = initTags.value.reduce((acc, item) => {
            // 检查外部 text 是否匹配
            if (item.text.includes(newSearch)) {
                acc.push(item); // 保留整个 item
            } else {
                // 检查内部 text 是否匹配
                const matchedChildren = item.children.filter((child) =>
                    child.text.includes(newSearch)
                );
                if (matchedChildren.length > 0) {
                    acc.push({ ...item, children: matchedChildren }); // 保留 item 的 text 和匹配的 children
                }
            }
            return acc;
        }, []);
        tags.value = filteredTags;
    } else {
        // 如果搜索值为空，则恢复原始标签
        tags.value = initTags.value;
    }
});
const getTags = (item) => {
    show.value = true;
}
</script>

<style lang="scss" scoped></style>
