<template>
    <div class="box">
        <div class="text">
            Trwa połączenie...
            <p>{{ stopwatch.seconds }}</p>
        </div>
    </div>
</template>

<script>
import { useStopwatch } from 'vue-timer-hook';

export default {
    setup() {
        const autoStart = true;
        const stopwatch = useStopwatch(autoStart);
        return {
            stopwatch,
        };
    },
}
</script>