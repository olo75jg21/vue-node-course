<template>
    <div>
        <input type="text" v-model="value" placeholder="Press any button"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <KeyboardComponent @pressed="value = $event" :selfValue="value" v-model="number"></KeyboardComponent>

        <div class="">
            <div @click="call()"
                class="flex items-center justify-center mx-auto w-14 h-14 border-2 rounded-full text-gray-300 border-gray-300 hover:border-lime-600 hover:text-lime-600 transition duration-150 ease-in-out cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-phone" class=" w-6 h-6" />
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import ViewManager from '../services/ViewManager';
import KeyboardComponent from '@/components/KeyboardComponent.vue';

export default {
    components: { KeyboardComponent },
    data() {
        return {
            value: '',
            number: ''
        }
    },

    methods: {
        async call() {
            try {
                const { data } = await axios.post('call', { number: this.value })
                ViewManager.checkStatus()
                this.$router.push({ name: 'ringing', params: { callsId: data.id } })
            } catch (e) {
                console.log(e);
            }
        },
    },
}
</script>