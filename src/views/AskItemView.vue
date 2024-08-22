<template>
    <div>

        <section>
            <div class="user-container">
                <div>
                    <i class="fa-regular fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${askItem.user}`">
                        {{ askItem.user }}
                    </router-link>
                    <div class="time">
                        {{ askItem.time_ago }}
                    </div>
                </div>
            </div>
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
    export default {
        created() {
            const itemId = this.$route.params.id;
            this.$store.dispatch('FETCH_NEWS_ITEM', itemId);
        },
        computed: {
            askItem() {
                return this.$store.state.askItem;
            }
        }
    }
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}

</style>