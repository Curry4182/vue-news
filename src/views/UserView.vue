<template>
    <div>
        <UserProfile>
            <template v-slot:username>
                <div >{{ userInfo.id }}</div>
            </template>
            <template v-slot:time>
                <span >Joined {{ userInfo.created }},</span>
            </template>
            <template v-slot:karma>
                <span >{{ userInfo.karma }}</span>
            </template>
        </UserProfile>
    </div>
</template>

<script>
import UserProfile from '@/components/UserProfile.vue';

    export default {
        created() {
            const username = this.$route.params.id;
            this.$store.dispatch('FETCH_USERINFO', username);
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            }
        },
        components: {
            UserProfile
        }
    }
</script>

<style scoped>



</style>