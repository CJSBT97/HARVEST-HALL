<template>
    <div>
        <header class="flexStartSB">
            <el-menu :default-active="activeIndex"
                     class="el-menu-demo"
                     mode="horizontal"
                     :class="{'colorNav':!isMainChange}"
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
                    <img v-show="isMainChange"
                         src="@/assets/images/tongzi.svg">
                    <img v-show="!isMainChange"
                         src="@/assets/images/tongziWhite.svg">
                </div>
                <div class="search flexCenterSB">
                    <img v-show="isMainChange"
                         src="@/assets/images/search.svg">
                    <img v-show="!isMainChange"
                         src="@/assets/images/searchWhite.svg">
                </div>
                <div class="loginBtn"
                     :class="isMainChange ? '' : 'loginBtnWhite'">
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
        <div v-show="isMainChange"
             class="titleBnner">
            <img src="@/assets/images/logo.svg">
            <p>A FRESH WEB3 ARTICLE EVERY XXX</p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header',
    data () {
        return {
            activeIndex: '/',
            colorNav: '',
            isMainChange: true
        }
    },
    computed: {
        ...mapState('app', ['pageName'])
    },
    mounted () {

    },
    watch: {
        '$route': {
            immediate: true,
            deep: true,
            handler (val) {
                this.activeIndex = val.path == null ? '/' : val.path
                this.isMainChange = true
                this.$store.commit('app/savePageName', 'pageBlack')
            }
        },
        'pageName': {
            immediate: true,
            deep: true,
            handler (val) {
                if (this.activeIndex == '/' && val == 'pageWhite') {
                    this.isMainChange = false
                } else {
                    this.isMainChange = true
                }
            }
        }
    },
    methods: {
        handleSelect (key) {
            this.$router.push(key, () => { }, () => { })
        }
    }
}
</script>

<style lang="sass" scoped>
.colorNav
    background: transparent
    &>.el-menu-item
        color: #fff!important
    &>.el-menu-item.is-active
        border-top: 2px solid rgb(255,255 ,255)!important
        border-bottom: 2px solid rgb(255,255 ,255 )!important
.titleBnner
    text-align: center
    img
        width: 495px
        height: 110px
    p
        font-size: 15px
        font-family: 'Roboto'
        letter-spacing: 3px
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
    border-top: 2px solid rgb(51,51 ,51)
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
.loginBtnWhite
    .el-button
        color: #fff
        border: 1px solid #fff
    .text
        color: #fff
header
    padding-right: 30px
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal>.el-submenu .el-submenu__title:hover
    background-color: transparent
</style>