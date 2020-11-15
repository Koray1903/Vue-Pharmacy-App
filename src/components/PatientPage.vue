<template>
    <section class="PatientPage">

        <div class="PatientPage__LeftBar">

            <!-- CONTROL BUTTONS -->
            <ControlButtons :reset="reset"/>
            <!-- CONTROL BUTTONS -->

            <!-- MEDICATION SALES -->
            <MedicationSales/>
            <!-- MEDICATION SALES -->

            <!-- PATIENT QUEUE -->
            <PatientQueue/>
            <!-- PATIENT QUEUE -->
        </div>


        <div class="PatientPage__Swipe">

            <!-- SWIPE -->
            <Vue2InteractDraggable
                    class="Vue2InteractDraggableClass"
                    v-if="isShowing"
                    :interact-event-bus-events="interactEventBusEvents"
                    @draggedLeft="draggedLeft"
                    @draggedRight="draggedRight"
                    @draggedUp="draggedUp"
                    :interact-block-drag-down="interactBlockDragDown"
                    :interact-block-drag-left="interactBlockDragLeft"
                    :interact-block-drag-right="interactBlockDragRight"
                    :interact-block-drag-up="interactBlockDragUp"
                    :interact-lock-x-axis="interactLockXAxis"
                    :interact-lock-y-axis="interactLockYAxis"
                    :interact-lock-swipe-down="interactLockSwipeDown"
                    :interact-lock-swipe-left="interactLockSwipeLeft"
                    :interact-lock-swipe-right="interactLockSwipeRight"
                    :interact-lock-swipe-up="interactLockSwipeUp"
                    :interact-max-rotation="15"
                    :interact-out-of-sight-x-coordinate="250"
                    :interact-x-threshold="200"
                    :interact-out-of-sight-y-coordinate="250"
                    :interact-y-threshold="200">

                <!-- PATIENT DETAILS -->
                <PatientDetails v-for="patient in patients.slice(startIndex,endIndex)"
                                :key="patient.id"
                                :patient="patient"/>
                <!-- PATIENT DETAILS -->

            </Vue2InteractDraggable>
            <!-- SWIPE -->

            <!-- MEDICATION SELECTOR -->
            <MedicationSelector
                    v-if="areThereAnyPatientsLeft"
                    :dragLeft="dragLeft"
                    :dragRight="dragRight"
                    :dragUp="dragUp"
                    :buttonActivationStatus="buttonActivationStatus"/>
            <!-- MEDICATION SELECTOR -->

        </div>

    </section>
</template>

<script>
    import PatientQueue from "@/components/Elements/PatientQueue";
    import MedicationSales from "@/components/Elements/MedicationSales";
    import ControlButtons from "@/components/Elements/ControlButtons";
    import MedicationSelector from "@/components/Elements/MedicationSelector";
    import PatientDetails from "@/components/Elements/PatientDetails";
    import {mapState} from "vuex";
    import {Vue2InteractDraggable, InteractEventBus} from "vue2-interact";

    const INTERACT_DRAGGED_LEFT = "INTERACT_DRAGGED_LEFT";
    const INTERACT_DRAGGED_RIGHT = "INTERACT_DRAGGED_RIGHT";
    const INTERACT_DRAGGED_UP = "INTERACT_DRAGGED_UP";


    export default {
        name: "PatientPage",
        components: {
            PatientQueue,
            MedicationSales,
            ControlButtons,
            PatientDetails,
            MedicationSelector,
            Vue2InteractDraggable
        },
        data() {
            return {
                startIndex: 0,
                endIndex: 1,
                chosenMedication: "",
                buttonActivationStatus: false,
                isShowing: true,
                interactBlockDragDown: true,
                interactBlockDragLeft: false,
                interactBlockDragRight: false,
                interactBlockDragUp: false,
                interactLockXAxis: false,
                interactLockYAxis: false,
                interactLockSwipeDown: true,
                interactLockSwipeLeft: false,
                interactLockSwipeRight: false,
                interactLockSwipeUp: false,
                interactEventBusEvents: {
                    draggedLeft: INTERACT_DRAGGED_LEFT,
                    draggedRight: INTERACT_DRAGGED_RIGHT,
                    draggedUp: INTERACT_DRAGGED_UP
                },
            };
        },
        computed: {
            ...mapState({
                patients: state => state.patients,
                areThereAnyPatientsLeft: state => state.patientsLeft
            })
        },
        methods: {
            draggedLeft() {
                this.hideCard();
                this.newCard();
                this.chosenMedication = "medicationOne";
                this.$store.dispatch("assignMedication", this.chosenMedication);
                !this.areThereAnyPatientsLeft && this.goToResults();
            },

            draggedRight() {
                this.hideCard();
                this.newCard();
                this.chosenMedication = "medicationTwo";
                this.$store.dispatch("assignMedication", this.chosenMedication);
                !this.areThereAnyPatientsLeft && this.goToResults();
            },

            draggedUp() {
                this.hideCard();
                this.newCard();
                this.chosenMedication = "medicationThree";
                this.$store.dispatch("assignMedication", this.chosenMedication);
                !this.areThereAnyPatientsLeft && this.goToResults();
            },

            hideCard() {
                this.buttonActivationStatus = true;
                setTimeout(() => this.isShowing = false, 250);
            },

            newCard() {
                setTimeout(() => {
                    this.startIndex++;
                    this.endIndex++;
                    this.isShowing = true;
                    this.buttonActivationStatus = false;
                }, 1000);
            },

            goToResults() {
                setTimeout(() => this.$router.push("/results"), 500);
            },

            dragLeft() {
                InteractEventBus.$emit(INTERACT_DRAGGED_LEFT);
            },

            dragRight() {
                InteractEventBus.$emit(INTERACT_DRAGGED_RIGHT);
            },

            dragUp() {
                InteractEventBus.$emit(INTERACT_DRAGGED_UP);
            },

            reset() {
                this.startIndex = 0;
                this.endIndex = 1;
                this.$store.dispatch("reset");
            }
        },
        mounted() {
            this.reset();
        }
    };
</script>

<style scoped>
    .PatientPage {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
    }

    .PatientPage__LeftBar {
        background: url("../../public/PatientLeftBackground.png") no-repeat;
        background-size: cover;
        height: 100vh;
        width: 550px;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    .PatientPage__Swipe {
        width: 100%;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 600px;
    }
</style>
