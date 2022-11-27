<template>
    <div class="flex flex-col h-full mx-auto">
        <p class="text-2xl mt-4 mb-4">Trwa połączenie</p>

        <div>
            <p class="text-center text-xl">{{ stopwatch.hours }}:{{ stopwatch.minutes }}:{{ stopwatch.seconds }}</p>
        </div>
        <div class="flex justify-between mt-24">
            <div>
                <font-awesome-icon class="h-12 animate-bounce" icon="fa-solid fa-person" />
            </div>
            <div class="dot-pulse mt-4"></div>
            <div>
                <font-awesome-icon class="h-12 animate-bounce" icon="fa-solid fa-person" />
            </div>
        </div>
    </div>
</template>

<script>
import { useStopwatch } from 'vue-timer-hook';
import('../animations/dotPulse.css');

export default {
    setup() {
        const autoStart = true;
        const stopwatch = useStopwatch(autoStart);
        return {
            stopwatch
        };
    },
}
</script>