<template>
    <div class="container">
        <div class="left">
            <HomeLeft></HomeLeft>
        </div>
        <div class="right">
            <div class="header">
                <HomeHeader></HomeHeader>
            </div>
            <div class="main">
                <HomeMain></HomeMain>
            </div>
        </div>
    </div>
    <div class="footer"></div>
</template>
<style scoped>
    .container {
        display: flex;
        height: calc(100% - 40px);
        width: 100%;
    }
    
    .left {
        height: 100%;
        width: 200px;
    }
    
    .right {
        height: 100%;
        width: 100%;
    }
    
    .header {
        height: 60px;
        width: 100%;
        background-color: antiquewhite;
    }
    
    .main {
        height: calc(100% - 60px);
        width: 100%;
        background-color: aquamarine;
    }
    
    .footer {
        width: 100%;
        background-color: aqua;
        height: 40px;
    }
</style>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import HomeMain from '@/components/home/main.vue'
    import HomeHeader from '@/components/home/header.vue'
    import HomeLeft from '@/components/home/left.vue'

    @Options({
        components: {
            HomeHeader,
            HomeMain,
            HomeLeft
        },
    })
    export default class Home extends Vue {
    }
</script>
