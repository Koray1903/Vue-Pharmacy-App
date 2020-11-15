<template>
    <section class="PatientDetails">

        <img class="PatientDetails__Photo" alt="patient" :src="getPatientImage(patient.id)"/>

        <div class="PatientDetails__Info">

            <p class="PatientDetails__Info__NameAge">{{patient.name}}, {{patient.age}}
                {{getAgeDefinition(patient.age)}}</p>

            <p class="PatientDetails__Info__Comment">{{patient.comment}}</p>

        </div>
    </section>
</template>

<script>

    export default {
        name: "PatientDetails",
        props: ["patient"],
        data() {
            return {
                id: 1
            };
        },
        methods: {
            getPatientImage: function (id) {
                return require('../../assets/Patient' + id + '.png');
            },

            getAgeDefinition: function (age) {
                if (age === 1) {
                    return "рiк";
                } else if (age === 2 || age === 3 || age === 4) {
                    return "роки";
                } else if (5 <= age && age <= 20) {
                    return "років";
                } else {
                    let lastDigit = +age.toString().split("").pop();

                    switch (lastDigit) {
                        case 1:
                            return "рiк";
                        case 2 || 3 || 4:
                            return "роки";
                        default:
                            return "років";
                    }
                }
            }
        }
    };
</script>

<style scoped>
    .PatientDetails {
        width: 450px;
        height: 500px;
        border-radius: 36px;
        box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
        background: white;
        z-index: 10;
    }

    .PatientDetails__Photo {
        width: 450px;
        border-radius: 36px 36px 0 0;
    }

    .PatientDetails__Info {
        padding: 0 40px;
        height: 175px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .PatientDetails__Info__NameAge {
        text-align: left;
        color: #8E9AD5;
        font-size: 32px;
        font-weight: 600;
        margin: 0;
    }

    .PatientDetails__Info__Comment {
        text-align: left;
        color: #424242;
        margin: 0;
        font-size:16px;
        font-weight: 500;
    }
</style>
