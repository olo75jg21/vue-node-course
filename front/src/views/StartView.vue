<template>
    <div>
        <div class="header clearfix">
            Zadzwonimy do Ciebie w ciągu 26 sekund.
        </div>
        <label class="form-label clearfix" for="form-number">
            Wprowadź numer
        </label>
        <input v-model="number" class="form-number clearfix" id="form-number" />
        <div class="call-button" @click="call()">
            Zadzwoń teraz
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ViewManager from '../services/ViewManager';

export default {
    data() {
        return {
            number: ''
        }
    },

    methods: {
        async call() {
            try {
                const { data } = await axios.post('call', { number: this.number })
                ViewManager.checkStatus()
                this.$router.push({ name: 'ringing', params: { callsId: data.id } })
            } catch (e) {
                console.log(e);
            }
        },
    },
}
</script>