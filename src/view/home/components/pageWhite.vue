<template>
    <div class="PageWhite">
        <div class="bannerList">
            <h3 style="left: 0;">FEBRUARY <br> WEEK 1</h3>
            <div class="banner">
                <div class="icon">
                    <span>100</span>
                    <img src="@/assets/images/bannerIcon.svg">
                </div>
                <img src="@/assets/images/banner.png">
            </div>
            <h3 style="right: 0;">ARTISTS <br> IN <br> WEB3</h3>
        </div>
        <div>
            <div class="title">PAST EDITIONS</div>
            <ul class="whiteList">
                <li>
                    <div class="icon">
                        <span>50</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <div class="white-img"><img src="@/assets/images/whiteList01.png"></div>
                    <p>JAN WEEk 4: anime</p>
                </li>
                <li>
                    <div class="icon">
                        <span>50</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <div class="white-img"><img src="@/assets/images/whiteList02.png"></div>
                    <p>JAN WEEk 3: community</p>
                </li>
                <li>
                    <div class="icon">
                        <span>50</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <div class="white-img"><img src="@/assets/images/whiteList03.png"></div>
                    <p>JAN WEEk 2: new world</p>
                </li>
                <li>
                    <div class="icon">
                        <span>50</span>
                        <img src="@/assets/images/bannerIcon.svg">
                    </div>
                    <div class="white-img"><img src="@/assets/images/whiteList04.png"></div>
                    <p>JAN WEEk 1: security</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageWhite',
}
</script>

<style lang="sass" scoped>
.PageWhite
    width: 100%
    height: 100%
    background-color: #000
    color: #FFFFFF
    display: flex
    flex-direction: column
    justify-content: space-between
    .bannerList
        position: relative
        display: flex
        align-items: center
        justify-content: space-between
        & h3
            text-align: center
            font-family: 'Roboto'
            font-size: 40px
            letter-spacing: 8px
            line-height: 180%
            font-weight: normal
            position: absolute
            z-index: 3
    .banner
        position: relative
        width: 80%
        margin: 0 auto
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
            img
                width: 20px
                height: 20px
        & img
            max-height: 527px
    .title
        font-family: 'Roboto'
        font-size: 15px
        letter-spacing: 3px
    .whiteList
        display: flex
        justify-content: space-between
        li
            position: relative
            width: 30%
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
                img
                    width: 20px
                    height: 20px
            & .white-img
                width: 100%
                overflow: hidden
            & p
                text-align: center
</style>