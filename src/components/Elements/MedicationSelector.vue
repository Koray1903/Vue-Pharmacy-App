<template>
    <section class="MedicationSelector__Flex">

        <button @click="dragLeft"
                :disabled="buttonActivationStatus"
                class="MedicationSelector__Flex__Medication1">Препарат 1
        </button>

        <button @click="dragUp"
                :disabled="buttonActivationStatus"
                class="MedicationSelector__Flex__Medication2">Препарат 2
        </button>

        <button @click="dragRight"
                :disabled="buttonActivationStatus"
                class="MedicationSelector__Flex__Medication3">Препарат 3
        </button>
    </section>
</template>

<script>
    export default {
        name: "MedicationSelector",
        props: ["dragLeft", "dragRight", "dragUp", "buttonActivationStatus"]
    };
</script>

<style scoped>
    .MedicationSelector__Flex {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
        margin-top: auto;
        height: min-content;
        width: 900px;
    }

    .MedicationSelector__Flex__Medication1 {
        color: #FFFFFF;
        font-size: 28px;
        background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
        border-radius: 100px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-weight: 600;
        padding: 16px 48px;
        border: none;
        cursor: pointer;
    }

    button:focus {
        outline: 0;
    }

    .MedicationSelector__Flex__Medication2 {
        color: #FFFFFF;
        font-size: 28px;
        background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
        border-radius: 100px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-weight: 600;
        padding: 16px 48px;
        border: none;
        cursor: pointer;
    }

    .MedicationSelector__Flex__Medication3 {
        color: #FFFFFF;
        font-size: 28px;
        background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
        border-radius: 100px;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        font-weight: 600;
        padding: 16px 48px;
        border: none;
        cursor: pointer;
    }
</style>
