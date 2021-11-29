<template>
    <div class="home" id="cccxx">
        <div style="background-color: cadetblue;height: 100px;width: 100%" ></div>
        <!--<div style="background-color: green;height: 100%;width: 100%" ></div>-->
        <HomeMain></HomeMain>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from 'vue-class-component';
    import HomeHeader from '@/components/home/header.vue'
    import HomeMain from '@/components/home/main.vue'
    import HomeMenu from '@/components/home/menu.vue'

    @Options({
        components: {
            HomeHeader,
            HomeMain,
            HomeMenu
        },
    })
    export default class Home extends Vue {
    }
</script>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
        background-color: cadetblue;
    }
    #cccxx {
        width: 100%;
        height: 100%;
        background-color: cadetblue;
    }
    
</style>