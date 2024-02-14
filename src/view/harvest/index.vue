<template>
    <div>
        <div class="titleBnner">
            <img src="@/assets/images/logo.svg">
            <p>A FRESH WEB3 ARTICLE EVERY XXX</p>
        </div>
        <el-main style="height: calc(100% - 130px);">
            <div class="left">
                <div class="title titleText"
                     style="display: flex;">
                    <h3>HARVEST</h3>
                    <img style="padding-left: 20px;"
                         src="@/assets/images/smileyW.svg">
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
                <div class="WEBSITE">
                    <div class="titleText2">
                        <h3>WEBSITE</h3>
                    </div>
                    <ul class="list">
                        <li>
                            <h4>REGISTER TO <br> HARVEST HALL</h4>
                            <div class="icon">
                                <span>300</span>
                                <img src="@/assets/images/smiley2.svg">
                            </div>
                        </li>
                        <li>
                            <h4>READ THIS <br> WEEK’S EDITION</h4>
                            <div class="icon">
                                <span>100</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                        <li>
                            <h4>SHARE THIS <br> WEEK’S <br> EDITTION</h4>
                            <div class="icon">
                                <span>30</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                        <li>
                            <h4>FOLLOW <br>HARVEST HALL <br> ON X</h4>
                            <div class="icon">
                                <span>80</span>
                                <img src="@/assets/images/smiley2.svg">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="DISCORD">
                    <div class="titleText2">
                        <h3>DISCORD</h3>
                    </div>
                    <ul class="list2">
                        <li>
                            <h4>JOIN <br> HARVEST HALL <br> DISCORD </h4>
                            <div class="icon">
                                <span>100</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                        <li>
                            <h4>REACT TO LATEST <br> ANNOUNCEMENT</h4>
                            <div class="icon">
                                <span>30</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="WALLET">
                    <div class="titleText2">
                        <h3>WALLET</h3>
                    </div>
                    <ul class="list2">
                        <li>
                            <h4>GET A <br> MEMENTO</h4>
                            <div class="icon">
                                <span>200</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                        <li>
                            <h4>CREATE YOUR <br> OWN GALLERY</h4>
                            <div class="icon">
                                <span>150</span>
                                <img src="@/assets/images/previewSmiley.svg">
                            </div>
                        </li>
                    </ul>
                </div>
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
.titleText2
    font-family: "Roboto Blod"
    color: #000
    & h3
        font-size: 15px
        letter-spacing: 3px
        font-weight: normal

.right
    padding-top: 25px
    box-sizing: border-box
    width: calc(55% - 30px)
    height: 100%
    background: #f5f5f5
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    flex-direction: column
.WEBSITE
    height: 45%
.DISCORD,
.WALLET
    height: 25%
    display: flex
    flex-direction: column
    justify-content: space-between
.list
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    height: 75%
    flex-direction: column
    height: 88%
    & li
        margin-top: 1%
        padding: 1%
        display: flex
        justify-content: space-between
        align-items: center
        box-sizing: border-box
        height: 45%
        width: 48%
        border: 1px solid #000
        & h4
            font-family: 'Roboto'
            text-align: center
            color: #4A4A4A
            font-size: 15px
            letter-spacing: 3px
            font-weight: normal
            width: 64%
            line-height: 180%
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
.list2
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    height: 75%
    & li
        margin-top: 1%
        padding: 1%
        display: flex
        justify-content: space-between
        align-items: center
        box-sizing: border-box
        width: 48%
        border: 1px solid #000
        background-color: rgba(0, 0, 0, .5)
        & h4
            font-family: 'Roboto'
            text-align: center
            color: #4A4A4A
            font-size: 15px
            letter-spacing: 3px
            font-weight: normal
            width: 64%
            line-height: 180%
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
</style>