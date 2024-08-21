<template>
    <div>
        <ul>
            <li v-for="(job, index) in jobs" :key="index">{{ job.title }}</li>
        </ul>
    </div>
</template>

<script>

    import { fetchJobsList } from '@/api';

    export default {
        data() {
            return {
                jobs: []
            }
        },
        created() {
            fetchJobsList()
            .then(
                (res) => {
                    this.jobs = res.data
                }
            )
            .catch(
                (e) => {
                    console.log(e)
                }
            );
        }
    }
</script>

<style lang="scss" scoped>

</style>