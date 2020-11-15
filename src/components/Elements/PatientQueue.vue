<template>
    <section class="PatientQueue">

        <p class="PatientQueue__Text">Осталось в очереди:</p>

        <p class="PatientQueue__Quantity"><strong>{{patientsLeft}}</strong>/{{patientsTotal}}</p>

    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "PatientQueue",
        computed: {
            ...mapState({
                patientsLeft: state => state.patientsLeft,
                patientsTotal: state => state.patientsTotal,
            })
        }
    };
</script>

<style scoped>
    .PatientQueue {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        padding: 16px 0;
        justify-self: flex-end;
        background-color: rgba(0, 0, 0, 0.15);
    }

    .PatientQueue__Text {
        color: white;
        font-size: 32px;
        margin: 0;
    }

    .PatientQueue__Quantity {
        color: white;
        font-size: 36px;
        margin: 0;
    }
</style>
