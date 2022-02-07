<script>
import { prevent_default } from "svelte/internal";

    export let val;
    // export let type; 
    //'type' attribute cannot be dynamic if input uses two-way binding

    export function empty() {
        val = ''
    }
</script>

<input type="text" bind:value="{val}">
