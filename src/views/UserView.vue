<template>
    <div>
        <h1>
            <P>name : {{ userInfo.id }}</P>
            <P>karma : {{ userInfo.karma }}</P>
            <P>created : {{ userInfo.created }}</P>
        </h1>
    </div>
</template>

<script>
    export default {
        created() {
            const username = this.$route.params.id;
            this.$store.dispatch('FETCH_USERINFO', username);
        },
        computed: {
            userInfo() {
                return this.$store.state.userInfo;
            }
        }
    }
</script>

<style scoped>

</style>