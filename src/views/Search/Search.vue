<template>
    <div class="container">
        <div class="Search">
            <searchInput @getInput="getSearchChange" />
        </div>
        <div class="chooseTag">
            <chooseTag :Search="SearchChange" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { Col, Row, Form, } from 'vant';
import chooseTag from './chooseTag.vue'
import SearchInput from "./SearchInput.vue";

const SearchChange = ref('');
const getSearchChange = (value) => {
    SearchChange.value = value;
};
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.Search {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 40px;
    width: 100%;
    padding: 0;
    margin-bottom: 0;
}

.chooseTag {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    overflow: auto;
    touch-action: none;
    overflow: auto
}
</style>