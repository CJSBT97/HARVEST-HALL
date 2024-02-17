<template>
    <div class="layout"
         :style="{'backgroundColor':isMainChange ? '#fff': '#000'}">
        <Header></Header>
        <router-view :style="{'height':isMainChange ? 'calc(100% - 190px)': 'calc(100% - 58px)'}" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '@/components/header'
export default {
    name: 'LayOut',
    components: {
        Header
    },
    computed: {
        ...mapState('app', ['pageName'])
    },
    watch: {
        'pageName': {
            immediate: true,
            deep: true,
            handler (val) {
                if (val == 'pageWhite') {
                    this.isMainChange = false
                } else {
                    this.isMainChange = true
                }
            }
        }
    },
    data () {
        return {
            isMainChange: true
        }
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
