<template>
    <div class="grid grid-cols-3 gap-4 mt-8 mb-4">
        <button v-for="key in keys" :key="key" :class="btnStyle" @click="press(key)">
            {{ key }}
        </button>
        <button @click="clear()" class="" :class="btnStyle">&larr;</button>
        <button @click="press(0)" :class="btnStyle">0</button>
        <button @click="clear('all')" :class="btnStyle">C</button>
    </div>
</template>

<script>
export default {
    props: ['selfValue'],
    data() {
        return {
            value: '',
            keys: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            buttonTheme: 'btn-danger',
            btnStyle: `border-2 border-gray-300 rounded-full h-14 w-14 text-xl text-gray-300 hover:text-white
                       hover:border-white hover:text-2xl transition duration-150 ease-in-out hover:scale-110`
        };
    },
    methods: {
        press(key) {
            this.value = `${this.value}${key}`;
        },
        clear(type) {
            if (type === 'all') this.value = '';
            else this.value = this.value.substring(0, this.value.length - 1);
        },
    },
    watch: {
        value() {
            this.$emit('pressed', this.value);
        },
        selfValue() {
            this.value = this.selfValue;
        },
    },
};
</script>