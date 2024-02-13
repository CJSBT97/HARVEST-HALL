<template>
    <div class="layout">
        <Header></Header>
        <router-view style="height: calc(100% - 49px);" />
    </div>
</template>

<script>
import Header from '@/components/header'
export default {
    name: 'LayOut',
    components: {
        Header
    },
    computed: {
    },
    methods: {

    }
}
</script>

<style lang="sass" scoped>
.layout
    padding: 1%
    box-sizing: border-box
    width: 100%
    height: 100vh
</style>
