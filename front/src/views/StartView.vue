<template>
    <div class="mt-8">
        <input type="text" v-model="value" placeholder="Press any button"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />

        <div class="invalid-warning h-4">
            <p v-if="!isValidPhoneNumber" class="text-red-600">Invalid phone number!</p>
        </div>

        <KeyboardComponent @pressed="value = $event" :selfValue="value" v-model="value"></KeyboardComponent>

        <div class="grid grid-cols-3 gap-4">
            <div @click="$router.push('/history')"
                class="flex items-center justify-center mx-auto w-14 h-14 border-2 rounded-full text-gray-300 border-gray-300 hover:border-lime-600 hover:text-lime-600 transition duration-150 ease-in-out cursor-pointer hover:scale-110">
                <font-awesome-icon icon="fa-solid fa-book" class=" w-6 h-6" />
            </div>

            <div @click="call()"
                class="flex items-center justify-center mx-auto w-14 h-14 border-2 rounded-full text-gray-300 border-gray-300 hover:border-lime-600 hover:text-lime-600 transition duration-150 ease-in-out cursor-pointer hover:scale-110">

                <font-awesome-icon icon="fa-solid fa-phone" class=" w-6 h-6" />
            </div>

            <div></div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ViewManager from '../services/ViewManager';
import KeyboardComponent from '@/components/KeyboardComponent.vue';


export default {
    components: { KeyboardComponent },
    data() {
        return {
            value: '',
            isValidPhoneNumber: true
        }
    },

    methods: {
        async call() {
            try {
                this.validatePhoneNumber();

                if (!this.isValidPhoneNumber) return;

                this.addToHistory();

                const { data } = await axios.post('call', { number: this.value })
                ViewManager.checkStatus()
                this.$router.push({ name: 'ringing', params: { callsId: data.id } })
            } catch (e) {
                console.log(e);
            }
        },

        validatePhoneNumber() {
            const validationRegex = new RegExp("^\\d{9}$");
            if (this.value.match(validationRegex)) {
                this.isValidPhoneNumber = true;
            } else {
                this.isValidPhoneNumber = false;
            }
        },

        addToHistory() {
            const newNumber = {
                id: uuidv4(),
                number: this.value
            };

            let localStorageNumbers = JSON.parse(localStorage.getItem('numbersHistory'));

            if (!localStorageNumbers) {
                localStorageNumbers = [];
            }

            localStorageNumbers.push(newNumber)

            localStorage.setItem('numbersHistory', JSON.stringify(localStorageNumbers));
        }
    },
}
</script>