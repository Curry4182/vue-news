<template>
    <div>
        <ul>
            <li v-for="(newsItem, index) in this.$store.state.news" :key="index">
                {{ newsItem.title }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {

        created() {
            this.$store.dispatch('FETCH_NEWS');
        }
    }
</script>

<style lang="scss" scoped>

</style>