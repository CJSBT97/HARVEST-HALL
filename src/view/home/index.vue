<template>
    <div>
        <div class="titleBnner">
            <img src="@/assets/images/logo.svg">
            <p>A FRESH WEB3 ARTICLE EVERY XXX</p>
        </div>
        <el-main style="height: calc(100% - 130px);">
            <div class="left">
                <div class="title titleText">
                    <h3>EDITION</h3>
                    <span>FEB WEEK I</span>
                </div>
                <div class="title2 titleText">
                    <h3>WEEKLY</h3>
                </div>
                <div class="banner">
                    <div class="icon">
                        <span>100</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <img src="@/assets/images/banner.png">
                </div>
                <ul class="list">
                    <li>
                        <h4>FOLLOW HARVEST <br> HALL ON X</h4>
                        <div class="icon">
                            <span>50</span>
                            <img src="@/assets/images/previewSmiley.svg">
                        </div>
                    </li>
                    <li>
                        <h4>FOLLOW HARVEST <br> HALL ON X</h4>
                        <div class="icon">
                            <span>50</span>
                            <img src="@/assets/images/previewSmiley.svg">
                        </div>
                    </li>
                    <li>
                        <h4>FOLLOW HARVEST <br> HALL ON X</h4>
                        <div class="icon">
                            <span>50</span>
                            <img src="@/assets/images/previewSmiley.svg">
                        </div>
                    </li>
                    <li>
                        <h4>FOLLOW HARVEST <br> HALL ON X</h4>
                        <div class="icon">
                            <span>50</span>
                            <img src="@/assets/images/previewSmiley.svg">
                        </div>
                    </li>
                </ul>
                <div class="logoFooter">
                    <h4>HARVEST</h4>
                    <img style="width: 30px;height: 30px;"
                         src="@/assets/images/previewSmiley.svg">
                </div>
            </div>
            <div class="right">
                <div class="bannerList">
                    <div class="titleText">
                        <h3>MY GALLERY</h3>
                    </div>
                    <div class="banner"><img src="@/assets/images/banner2.png"></div>
                    <ul>
                        <li><img src="@/assets/images/banner3.png"></li>
                        <li><img src="@/assets/images/banner4.png"></li>
                        <li>
                            <p>
                                EXPLORE<br>
                                COMMUNITY<br>
                                GALLERY...
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="bannerBottom">
                    <div class="icon">
                        <span>3000</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <img src="@/assets/images/banner5.png">
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>


export default {
    name: 'HOME1',
    components: {

    },
    computed: {
    },
    data () {
        return {

        }
    },
    watch: {

    },
    mounted () {

    },
    destroyed () {

    },
    methods: {
    }
}
</script>
<style lang="sass" scoped>
.titleBnner
    text-align: center
    img
        width: 495px
        height: 110px
    p
        font-size: 15px
        font-family: 'Roboto'
        letter-spacing: 3px
.el-main
    position: relative
    display: flex
    justify-content: space-between
    padding: 0 30px
    overflow: visible
    .left
        padding-top: 25px
        box-sizing: border-box
        width: 60%
        height: 100%
        .title
            position: absolute
            top: -18px
            & span
                position: absolute
                font-size: 12px
                letter-spacing: 2.4px
                padding-left: 15px
                top: 58px
                left: 125px
                width: 200px
        .title2
            position: absolute
            left: -38px
            top: 58px
            transform: rotate(-90deg)
        .banner
            position: relative
            height: 70%
            overflow: hidden
            & .icon
                position: absolute
                right: 2%
                top: 4%
                display: flex
                align-items: center
                padding: 5px 10px
                border: 1px solid #FFF
                font-family: 'MPLUSRounded1c Blod'
                font-size: 20px
                letter-spacing: 3px
                color: #fff
                img
                    width: 20px
                    height: 20px
            & img
                height: 100%
        .list
            display: flex
            justify-content: space-between
            flex-wrap: wrap
            & li
                margin-top: 10px
                padding: 10px
                display: flex
                justify-content: space-between
                align-items: center
                box-sizing: border-box
                width: 48%
                border: 1px solid #000
                & h4
                    font-family: 'Roboto'
                    text-align: center
                    color: #4A4A4A
                    font-size: 15px
                    letter-spacing: 3px
                    font-weight: normal
                & .icon
                    display: flex
                    align-items: center
                    padding: 2px 10px
                    border: 1px solid rgb(79, 79, 79)
                    font-family: 'MPLUSRounded1c Blod'
                    font-size: 15px
                    letter-spacing: 3px
                    img
                        width: 20px
                        height: 20px
        .logoFooter
            padding-top: 20px
            box-sizing: border-box
            display: flex
            align-items: center
            justify-content: center
            & h4
                font-family: 'Marvel'
                font-size: 30px
                letter-spacing: 3px
.titleText
    font-family: "Marvel"
    color: #000
    & h3
        font-size: 30px
        letter-spacing: 6px
        font-weight: normal

.right
    padding-top: 25px
    box-sizing: border-box
    width: calc( 100% - 60% - 30px )
    height: 100%
    .bannerList
        display: flex
        flex-wrap: wrap
        height: 70%
        overflow: hidden
        .banner
            padding: 2% 0
        ul
            display: flex
            justify-content: space-between
            align-items: center
            width: 100%
            li
                width: 30%
                font-size: 20px
                letter-spacing: 2px
                font-family: 'Marvel'
                color: #000
                text-align: center
                line-height: 30px
    .bannerBottom
        position: relative
        overflow: hidden
        margin-top: 10px
        height: calc( 30% - 10px )
        & .icon
            position: absolute
            right: 2%
            top: 4%
            display: flex
            align-items: center
            padding: 5px 10px
            border: 1px solid #4f4f4f
            font-family: 'MPLUSRounded1c Blod'
            font-size: 20px
            letter-spacing: 3px
            color: #4f4f4f
            img
                width: 20px
                height: 20px
</style>