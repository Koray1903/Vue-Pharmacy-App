import Vue from "vue";
import Vuex from "vuex";
import patientArray from "@/store/PatientGenerator";

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        patients: patientArray,
        assignedMedications: {
            medicationOne: 0,
            medicationTwo: 0,
            medicationThree: 0
        },
        patientsLeft: patientArray.length,
        patientsTotal: patientArray.length
    },

    mutations: {
        assignMedication: (state, payload) => {

            switch (payload) {
                case("medicationOne"):
                    state.assignedMedications.medicationOne++;
                    break;
                case("medicationTwo"):
                    state.assignedMedications.medicationTwo++;
                    break;
                case("medicationThree"):
                    state.assignedMedications.medicationThree++;
                    break;
            }
        },
        decreasePatient: (state) => {
            state.patientsLeft--;
        },
        reset: (state) => {
            state.patientsLeft = patientArray.length;
            state.assignedMedications = {
                medicationOne: 0,
                medicationTwo: 0,
                medicationThree: 0
            };
        },
    },

    actions: {
        assignMedication: (context, payload) => {
            context.commit("assignMedication", payload);
            context.commit("decreasePatient");
        },
        reset: (context) => {
            context.commit("reset");
        }
    },

    getters: {}

});
