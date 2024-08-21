<template>
    <div>
        <ul>
            <li v-for="(job, index) in this.$store.state.jobs" :key="index">{{ job.title }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('FETCH_JOBS');
        }
    }
</script>

<style lang="scss" scoped>

</style>