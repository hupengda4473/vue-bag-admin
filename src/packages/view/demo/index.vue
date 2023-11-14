<template>
    <div class="content">
        <n-button strong secondary type="primary" @click="back">
            返回系统
        </n-button>
    </div>
</template>

<script setup>
    const back = () => {
        window.location.href="javascript:history.go(-1)";
    }
</script>

<style scoped lang="less">
.content{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
