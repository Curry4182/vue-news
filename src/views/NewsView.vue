<template>
    <div>
        <ListItem></ListItem>
    </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    },
    computed: {
        news() {
            return this.$store.state.news;
        }
    },
    components: {
        ListItem
    }
}
</script>

<style scoped>

</style>