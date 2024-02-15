<template>
    <div class="home">
        <pageBlack></pageBlack>
    </div>
</template>

<script>
import pageBlack from './components/pageBlack.vue'
export default {
    name: 'HOME',
    components: {
        pageBlack
    },
}
</script>

<style lang="sass" scoped>
.home
    height: 100%
</style>