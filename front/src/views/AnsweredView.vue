<template>
    <div>
        <p class="text-2xl mt-4 mb-40">Połączenie zakończone</p>
        <div @click="$router.push('/')"
            class="text-center text-md text- cursor-pointer border-2 border-zinc-800 rounded-md border-white bg-zinc-500 mx-auto w-40 duration-75 hover:rounded-full hover:scale-110 hover:text-white hover:border-white">
            Spróbuj ponownie
        </div>
    </div>
</template>