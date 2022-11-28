<template>
    <div>
        <div>
            <p class="text-2xl text-center mb-4">History</p>
        </div>
        <div class="overflow-y-scroll h-96 w-80 px-4">
            <div v-for="item in numbersHistory" v-bind:key="item.id">
                <div class="mb-4 flex justify-between">
                    <p class="text-md">{{ item.number }}</p>
                    <button @click="deleteRecord(item.id)" class="ml-14">
                        <font-awesome-icon icon="fa-solid fa-trash" class="hover:text-red-700 hover:scale-110" />
                    </button>
                </div>
            </div>
        </div>

        <div class="text-center">
            <button @click="this.$router.push({ name: 'start' })">
                <font-awesome-icon icon="fa-solid fa-backward" class="h-10 hover:scale-110" />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            numbersHistory: [],
        }
    },

    methods: {
        getItemsFromLocalStorage() {
            this.numbersHistory = JSON.parse(localStorage.getItem('numbersHistory'));
        },

        deleteRecord(id) {
            const numbers = JSON.parse(localStorage.getItem('numbersHistory'));
            const index = numbers.findIndex(number => number.id === id);

            if (index > -1) {
                numbers.splice(index, 1);
            }

            this.numbersHistory = numbers;

            localStorage.setItem('numbersHistory', JSON.stringify(numbers));
        }
    },

    mounted() {
        this.getItemsFromLocalStorage()
    },

}
</script>