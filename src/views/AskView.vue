<template>
    <div>
        <p>
            <ul>
                <li v-for="(ask, index) in asks" :key="index">{{ ask.title }}</li>
            </ul>
        </p>
    </div>
</template>

<script>

    import { fetchAskList } from '@/api';

    export default {
        data() {
            return {
                asks: []
            }
        },
        created() {
            fetchAskList()
            .then((res)=> {
                this.asks = res.data;
            })
            .catch((e)=> {
                console.log(e);
            });
        }
    }
</script>

<style lang="scss" scoped>

</style>