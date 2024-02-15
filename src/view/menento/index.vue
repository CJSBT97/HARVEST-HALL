<template>
    <div>

        <el-main style="height: 100%">
            <div class="titleText">
                <h3>MEMENTO OF THE MONTH</h3>
            </div>
            <div class="content">
                <div class="left">
                    <div class="banner">
                        <img src="@/assets/images/memento.png">
                    </div>
                </div>
                <div class="right">
                    <div class="titleText2">
                        <h3>GHIBLI EXPRESS BY KANIZA</h3>
                    </div>
                    <div class="text">
                        <span style="text-align: center">
                            作品の説明や <br>
                            作品に対する思い
                        </span>
                        XxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXX
                        xXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXXXxXXXXX
                    </div>
                    <div style="text-align: center;padding: 5% 0;"
                         class="titleText">
                        <h3>ABOUT ARTIST KANIZA</h3>
                    </div>
                    <div class="textImg">
                        <div class="icon"></div>
                        <div class="text">
                            <span>
                                XXXXXXXXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXXXXXXXX<br>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                            </span>
                        </div>
                    </div>
                    <div style="margin-top:2%;display: flex;justify-content: center;">
                        <el-button type="text"
                                   class="mementoBtn">WALLET CONNECT</el-button>
                    </div>
                </div>
            </div>
        </el-main>
    </div>
</template>

<script>
export default {
    name: 'MEMENTO'
}
</script>

<style lang="sass" scoped>
.content
    position: relative
    display: flex
    justify-content: space-between
    overflow: visible
    height: calc(100% - 40px)
.el-main
    padding: 0 30px
    .left
        width: 55%
        height: 100%
        background: #f5f5f5
        .banner
            position: relative
            height: 100%
            width: 100%
            overflow: hidden
            img
                width: 100%
                object-fit: cover
                height: 100%
.titleText
    font-family: "Roboto"
    color: #000
    & h3
        font-size: 15px
        letter-spacing: 3px
        font-weight: normal
.titleText2
    padding-bottom: 5%
    font-family: "Roboto Blod"
    color: #000
    text-align: center
    & h3
        font-size: 15px
        letter-spacing: 3px
        line-height: 180%
        font-weight: normal

.right
    box-sizing: border-box
    width: calc(45% - 30px)
    height: 100%
    background: #f5f5f5
    .text
        word-wrap: break-word
        line-height: 180%
        font-size: 15px
        letter-spacing: 3px
        font-family: 'Roboto'
        text-align: center
    .textImg
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        align-items: center
        & .icon
            width: 74px
            height: 74px
            background: #D9D9D9
    .mementoBtn
        padding: 10px
        border: 1px solid #000
        border-radius: 5px
        font-size: 15px
        line-height: 130%
        letter-spacing: 3px
        color: #000
        font-family: 'Roboto'
</style>