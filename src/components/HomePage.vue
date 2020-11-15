<template>
    <section class="HomePage">
        <div class="HomePage__Gradient">

            <div class="HomePage__Gradient__Circle">

                <div class="HomePage__Gradient__Circle__Flex">
                    <p class="HomePage__Gradient__Circle__Flex__Text1">Добро пожаловать в игру</p>
                    <p class="HomePage__Gradient__Circle__Flex__Text2">Помоги
                        <span class="HomePage__Gradient__Circle__Flex__Text3">Фармацевту</span>
                    </p>

                    <router-link to="/patients" class="router-link">
                        <button class="HomePage__Gradient__Circle__Flex__Button">Начать</button>
                    </router-link>
                </div>

            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: "HomePage"
    };
</script>

<style scoped>
    .HomePage {
        background: url("../../public/HomeImage.png") no-repeat fixed center center;
        background-size: cover;
        height: 100vh;
    }

    .HomePage__Gradient {
        background: url("../../public/HomeImageGradient.png") no-repeat fixed center center;
        background-size: cover;
        height: 100vh;
    }

    .HomePage__Gradient__Circle {
        background: url("../../public/HomeEllipse.png") no-repeat center top;
        background-size: contain;
        height: 600px;
        width: 650px;
        margin-left: 150px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }

    .HomePage__Gradient__Circle__Flex {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: flex-start;
        height: 300px;
        width: 450px;
    }

    .HomePage__Gradient__Circle__Flex__Text1 {
        color: #FFFFFF;
        font-size: 32px;
        text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
        margin: 0;
        text-align: left;
    }

    .HomePage__Gradient__Circle__Flex__Text2 {
        color: #FFFFFF;
        font-size: 55px;
        text-align: left;
        font-weight: 700;
        margin: 0;
    }

    .HomePage__Gradient__Circle__Flex__Text3 {
        text-transform: uppercase;
    }

    /* BUTTON */
    .HomePage__Gradient__Circle__Flex__Button {
        color: #8E9AD5;
        font-size: 32px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #FFFFFF;
        border-radius: 100px;
        padding: 12px 64px;
        cursor: pointer;
        border: none;
    }

    button:focus {
        outline: 0;
    }

    .router-link {
        text-decoration: none;
    }

    /* BUTTON */

</style>
