<script lang="ts">
    import "$lib/styles/app.css"
    import type { LayoutData } from "./$types"
    import { LOGIN_URL, SIGNUP_URL } from "../lib/constants"

    export let data: LayoutData

</script>

<div class="min-h-screen min-w-screen bg-neutral-50">

    <div class="flex shadow h-16 px-6">

        <div class="flex w-full items-center justify-start space-x-4">

            <a href="/">Home</a>

            <a href="/about">About</a>

        </div>

        <div class="flex w-full items-center justify-end space-x-4">

            {#if data.user}
                <a href="/account">Account</a>
            {:else}
                <a href={LOGIN_URL} class="btn-text-primary">Login</a>
                <a href={SIGNUP_URL} class="btn-primary">Create account</a>
            {/if}

        </div>

    </div>

    <slot/>
</div>
