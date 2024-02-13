<template>
    <div>
        <header class="flexStartSB">
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect">
                <el-menu-item index="/">MAIN</el-menu-item>
                <el-menu-item index="/HARVEST">HARVEST</el-menu-item>
                <el-menu-item index="/MEMENTO">MEMENTO</el-menu-item>
                <el-menu-item index="/GALLERY">GALLERY</el-menu-item>
                <el-menu-item index="/LEADERBOARD">LEADER BOARD</el-menu-item>
                <el-menu-item index="/FAQ">FAQ</el-menu-item>
            </el-menu>

            <div class="login flexCenterSB">
                <div class="message flexCenterSB">
                    <img src="@/assets/images/tongzi.svg">
                </div>
                <div class="search flexCenterSB">
                    <img src="@/assets/images/search.svg">
                </div>
                <div class="loginBtn">
                    <el-button type="text">
                        <h3>
                            <span>LOGIN</span>
                            HARVEST NOW
                        </h3>
                    </el-button>
                    <div class="text">
                        - <img style="width: 20px;height: 20px;"
                             src="@/assets/images/smiley2.svg"> ・ RANK -
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data () {
        return {
            activeIndex: '/',
        }
    },
    computed: {
        ...mapGetters([
        ]),
    },
    mounted () {
    },
    watch: {
        // '$route' (to) { // to为新的路由信息，from为之前的路由信息
        // if (to.path == '/AccountOverview') {
        // } else {
        // }
        // },
    },
    methods: {
        handleSelect (key) {
            this.$router.push(key, () => { }, () => { })
        }
    }
}
</script>

<style lang="sass" scoped>
.el-menu.el-menu--horizontal
    border: none
.el-menu--horizontal>.el-menu-item
    color: #303133
    font-size: 12px
    margin-right: 60px
    height: 40px
    line-height: 40px
    letter-spacing: 2.4px
    font-family: "Roboto"
    padding: 0
.el-menu--horizontal>.el-menu-item.is-active
    border-top: 2px solid rgb(51,51 ,51 )
    border-bottom: 2px solid rgb(51,51 ,51 )
.message,
.search
    padding-right: 20px
    width: 20px
    height: 20px
.loginBtn
    text-align: center
    .el-button
        padding: 0
        font-family: 'Roboto'
        text-align: center
        width: 150px
        height: 34px
        border: 1px solid #000
        border-radius: 5px
        color: #000
        font-weight: bold
        font-size: 12px
        letter-spacing: 2.4px
        span
            display: block
            font-weight: normal
    .text
        display: flex
        align-items: center
        justify-content: center
        font-weight: bold
        font-family: 'Roboto'
header
    padding-right: 30px
</style>