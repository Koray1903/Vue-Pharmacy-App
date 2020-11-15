<template>
    <section class="FinalPage">

        <div class="FinalPage__HomeIcon__Background">
            <router-link to="/" class="router-link">
                <i class="fas fa-home FinalPage__HomeIcon"/>
            </router-link>
        </div>

        <div class="FinalPage__Outer__Flex">
            <div class="FinalPage__Inner__Flex">

                <div class="FinalPage__Result">
                    <p class="FinalPage__Result__Percentage">{{getPercentage(medicationOneQty)}}%</p>
                    <p class="FinalPage__Result__Description">Препарат 1</p>
                </div>

                <div class="FinalPage__Result">
                    <p class="FinalPage__Result__Percentage">{{getPercentage(medicationTwoQty)}}%</p>
                    <p class="FinalPage__Result__Description">Препарат 2</p>
                </div>

                <div class="FinalPage__Result__MedicationThree">
                    <p class="FinalPage__Result__Percentage">{{getPercentage(medicationThreeQty)}}%</p>
                    <p class="FinalPage__Result__Description">Препарат 3</p>
                </div>

            </div>

            <div class="FinalPage__HorizontalLine"/>

            <div class="FinalPage__Text__Flex">
                <p class="FinalPage__Text__Title">Ваш результат: <br/><strong>«Что я здесь делаю?»</strong></p>
                <p class="FinalPage__Text__Body">Это тестовое задание, так что не будем углубляться в глубины проблем
                    фармацевтов.</p>
            </div>

            <router-link to="/patients" class="router-link">
                <button class="FinalPage__RepeatButton">Попробовать еще</button>
            </router-link>
        </div>

    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "FinalPage",
        methods: {
            getPercentage: function (qty) {
                return qty * 100 / (this.medicationOneQty + this.medicationTwoQty + this.medicationThreeQty);
            }
        },
        computed: {
            ...mapState({
                medicationOneQty: state => state.assignedMedications.medicationOne,
                medicationTwoQty: state => state.assignedMedications.medicationTwo,
                medicationThreeQty: state => state.assignedMedications.medicationThree,
            })
        }
    };
</script>

<style scoped>
    .FinalPage {
        background: url("../../public/FinalImage.png") no-repeat top right;
        background-size: contain;
        height: 600px;
    }

    /* HOME ICON */
    .FinalPage__HomeIcon__Background {
        background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
        border-radius: 100px;
        width: 75px;
        height: 75px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 50px;
        left: 50px;
    }

    .FinalPage__HomeIcon {
        font-size: 36px;
        color: white;
        cursor: pointer;
    }

    /* HOME ICON */

    .FinalPage__Outer__Flex {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: flex-start;
        height: 450px;
        padding: 100px 0 0 200px;
    }

    /* RESULTS */
    .FinalPage__Inner__Flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        width: 550px;
    }

    .FinalPage__Result {
    }

    .FinalPage__Result__Percentage {
        font-size: 48px;
        margin: 0;
    }

    .FinalPage__Result__Description {
        font-size: 16px;
        margin: 0;
    }

    /* RESULTS */


    /* HORIZONTAL LINE */
    .FinalPage__HorizontalLine {
        width: 600px;
        height: 2px;
        opacity: 0.5;
        background: #424242;
    }

    /* HORIZONTAL LINE */


    /* TEXT */
    .FinalPage__Text__Flex {
        width: 550px;
        height: 170px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .FinalPage__Text__Title {
        font-size: 32px;
        color: #8E9AD5;
        text-align: left;
        margin: 0;
    }

    .FinalPage__Text__Body {
        color: #424242;
        font-size: 24px;
        text-align: left;
        margin: 0;
    }

    /* TEXT */


    /* BUTTON */
    .FinalPage__RepeatButton {
        background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
        border-radius: 100px;
        font-size: 24px;
        color: #FFFFFF;
        border: none;
        font-weight: 600;
        padding: 15px 40px;
        cursor: pointer;
        position: absolute;
        bottom: 50px;
    }

    .router-link {
        text-decoration: none;
    }

    button:focus {
        outline: 0;
    }
    /* BUTTON */
</style>
