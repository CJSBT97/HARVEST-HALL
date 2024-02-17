<template>
    <div class="home">
        <pageBlack v-show="pageName == 'pageBlack'"></pageBlack>
        <PageWhite v-show="pageName == 'pageWhite'"></PageWhite>
    </div>
</template>

<script>
import pageBlack from './components/pageBlack'
import PageWhite from './components/pageWhite'
import { mapState } from 'vuex'
export default {
    name: 'HOME',
    components: {
        pageBlack,
        PageWhite
    },
    data () {
        return {
        }
    },
    computed: {
        ...mapState('app', ['pageName'])
    },
    mounted () {
        document.addEventListener('mousewheel', (e) => {
            let wheelDelta = e.wheelDelta ? e.wheelDelta : (-e.detail * 50)
            if (wheelDelta > 0) {
                if (this.pageName == 'pageBlack') return
                this.$store.commit('app/savePageName', 'pageBlack')
            } else {
                if (this.pageName == 'pageWhite') return
                this.$store.commit('app/savePageName', 'pageWhite')
            }
        });
    }
}
</script>

<style lang="sass" scoped>
.home
    height: 100%
</style>