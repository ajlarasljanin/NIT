<template >
    <div>
        <TheHeader></TheHeader>
        <CalendarSection></CalendarSection>
        <TheFooter></TheFooter>
    </div>
</template>
<script>
import TheHeader from "../components/base/TheHeader.vue";
import CalendarSection from "../components/sections/CalendarSection.vue"
import TheFooter from "../components/base/TheFooter.vue";


export default {
    components: {
        TheHeader,
        TheFooter,
        CalendarSection

    },
    data() {
        return {
            value: null
        }
    },
}

</script>
<style scoped>
</style>