<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>

export default {
    name: 'App',
    mounted () {
        document.title = 'HARVEST FLOW GITHUB'
    }
}
</script>

<style>
#app {
    height: 100%;
}
</style>
