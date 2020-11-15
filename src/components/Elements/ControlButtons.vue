<template>
    <section class="ControlButtons__Flex">

        <div class="ControlButtons__Background">
            <router-link to="/">
                <i class="fas fa-home ControlButtons__Icon"
                   @click="reset"/>
            </router-link>
        </div>

        <div class="ControlButtons__Background">
            <i class="fas fa-sync ControlButtons__Icon"
               @click="reset"/>
        </div>

    </section>
</template>

<script>
    export default {
        name: "ControlButtons",
        props: ["reset"]
    };
</script>

<style scoped>
    .ControlButtons__Flex {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
        width: 250px;
        height: 150px;
    }

    .ControlButtons__Background {
        background: white;
        padding: 20px;
        border-radius: 36px;
    }

    .ControlButtons__Icon {
        font-size: 35px;
        color: #FF5864;
        cursor: pointer;
    }
</style>
