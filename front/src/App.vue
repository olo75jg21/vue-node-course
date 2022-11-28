<template>
  <div v-if="!isVisible"
    class="sticky mt-5 ml-5 bg-zinc-800 w-12 h-12 text-gray-300 rounded-full hover:text-white cursor-pointer animate-bounce">
    <div class="flex justify-center h-full m-auto">
      <button @click="isVisible = !isVisible">
        <font-awesome-icon icon="fa-solid fa-phone" />
      </button>
    </div>
  </div>

  <div v-if="isVisible" class="flex mt-44 justify-center mx-auto w-80 h-128 bg-zinc-800 text-slate-50 rounded-2xl">
    <div class="absolute w-80">
      <button @click="isVisible = !isVisible">
        <font-awesome-icon icon="fa-solid fa-minimize" class="mt-4 ml-4" />
      </button>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true
    }
  },
}
</script>