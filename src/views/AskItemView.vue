<template>
    <div>
        <section>
            <UserProfile>
                <template v-slot:username>
                    <router-link :to="`/user/${askItem.user}`">
                        {{ askItem.user }}
                    </router-link>
                </template>
                <template v-slot:time>
                    <div >Posted {{ askItem.time_ago }}</div>
                </template>
            </UserProfile>
        </section>
        <section>
            <h2> {{ askItem.title }}</h2>
        </section>
        <section>
            <span v-html="askItem.content"></span>
            <p v-if="askItem.content === ''"> no content </p>
        </section>
        <section>
            <h3>comments ({{  askItem.comments_count }})</h3>
            <ul>
                <li v-for="(comment, index) in askItem.comments" :key="index">
                    <span v-html="comment.content"></span>
                    <small> {{ comment.time_ago }} by {{ comment.user }} </small>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

    export default {
        created() {
            const itemId = this.$route.params.id;
            this.$store.dispatch('FETCH_NEWS_ITEM', itemId);
        },
        computed: {
            askItem() {
                return this.$store.state.askItem;
            }
        },
        components: {
            UserProfile
        }
    }
</script>

<style scoped>


</style>