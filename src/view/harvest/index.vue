<template>
    <div>
        <div class="titleBnner">
            <img src="@/assets/images/logo.svg">
            <p>A FRESH WEB3 ARTICLE EVERY XXX</p>
        </div>
        <el-main style="height: calc(100% - 130px);">
            <div class="left">
                <div class="title titleText">
                    <h3>HARVEST</h3>
                </div>
                <div class="banner">
                    <div class="icon">
                        <span>100</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <img src="@/assets/images/banner.png">
                </div>
            </div>
            <div class="right">
            </div>
        </el-main>
    </div>
</template>

<script>
export default {
    name: 'HARVEST'
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
        width: 45%
        height: 100%
        background: #f5f5f5
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
            height: 100%
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
                color: #4f4f4f
                background: #fff
                border: 1px solid #4f4f4f
                img
                    width: 20px
                    height: 20px
            & img
                height: 100%
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
    width: calc( 55% - 30px )
    height: 100%
    background: #f5f5f5
</style>