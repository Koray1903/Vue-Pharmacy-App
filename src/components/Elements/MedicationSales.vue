<template>
    <section class="MedicationSales">

        <p class="MedicationSales__Title">Параметри:</p>

        <div class="MedicationSales__InnerFlex">

            <div class="MedicationSales__InnerFlex__Medication">
                <i class="fas fa-frown MedicationSales__InnerFlex__Medication__IconOne"/>
                <span class="MedicationSales__InnerFlex__Medication__Quantity">{{medicationOne}}</span>
            </div>

            <div class="MedicationSales__InnerFlex__Medication">
                <i class="fas fa-smile MedicationSales__InnerFlex__Medication__IconTwo"/>
                <span class="MedicationSales__InnerFlex__Medication__Quantity">{{medicationTwo}}</span>
            </div>

            <div class="MedicationSales__InnerFlex__Medication">
                <i class="fas fa-heart MedicationSales__InnerFlex__Medication__IconThree"/>
                <span class="MedicationSales__InnerFlex__Medication__Quantity">{{medicationThree}}</span>
            </div>

        </div>

    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "MedicationSales",
        computed: {
            ...mapState({
                medicationOne: state => state.assignedMedications.medicationOne,
                medicationTwo: state => state.assignedMedications.medicationTwo,
                medicationThree: state => state.assignedMedications.medicationThree,
            })
        }
    };
</script>

<style scoped>
    .MedicationSales__Title {
        color: white;
        font-weight: 600;
        font-size: 36px;
        text-align: left;
        margin: 0;
        padding: 16px;
    }

    .MedicationSales__InnerFlex {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        height: 175px;
    }

    .MedicationSales__InnerFlex__Medication {
        background: #FFFFFF;
        box-shadow: 0 0 50px rgba(131, 42, 64, 0.4);
        border-radius: 40px;
        width: 150px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    }

    .MedicationSales__InnerFlex__Medication__IconOne {
        color: #A1A1A1;
        font-size: 48px;
    }

    .MedicationSales__InnerFlex__Medication__IconTwo {
        color: #FFB2AD;
        font-size: 48px;
    }

    .MedicationSales__InnerFlex__Medication__IconThree {
        color: #FFB2AD;
        font-size: 48px;
    }

    .MedicationSales__InnerFlex__Medication__Quantity {
        color: #424242;
        font-size: 48px;
    }
</style>
