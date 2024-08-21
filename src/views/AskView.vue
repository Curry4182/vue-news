<template>
    <div>
        <p>
            <ul>
                <li v-for="(ask, index) in this.$store.state.asks" :key="index">{{ ask.title }}</li>
            </ul>
        </p>
    </div>
</template>

<script>
    export default {
        created() {
            this.$store.dispatch('FETCH_ASKS');
        }
    }
</script>

<style lang="scss" scoped>

</style>