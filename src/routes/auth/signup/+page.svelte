<script lang="ts">
    import { enhance } from "$app/forms"
    import { LOGIN_URL } from "$lib/constants"
</script>

<div class="flex h-screen w-screen items-center justify-center">

    <div class="card flex flex-col max-w-md w-full space-y-4 ">

        <h1 class="text-xl text-center font-semibold">Create your account</h1>

        <form class="flex flex-col space-y-2" method="POST" use:enhance>
            <div class="flex flex-col">
                <label for="username">Username</label>
                <input class="input-text" id="username" name="username"/>
            </div>
            <div class="flex flex-col">
                <label for="password">Password</label>
                <input class="input-text" id="password" name="password" type="password"/>
            </div>
            <input class="btn-primary" type="submit" value="Create account"/>
        </form>
        <a class="btn-text-primary" href={LOGIN_URL}>Already got an account? Login here!</a>
    </div>

</div>