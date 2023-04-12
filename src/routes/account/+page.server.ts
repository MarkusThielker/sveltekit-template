import type { Actions, PageServerLoad } from "./$types"
import { fail, redirect } from "@sveltejs/kit"
import { auth } from "$lib/server/lucia"
import { LOGIN_URL } from "$lib/constants"

export const load: PageServerLoad = async ({locals}) => {
    const {user} = await locals.validateUser()
    if (!user) throw redirect(302, LOGIN_URL)
    return {
        user,
    }
}

export const actions: Actions = {
    default: async ({request, locals}) => {
        const session = await locals.validate()
        if (!session) return fail(401)
        await auth.invalidateSession(session.sessionId)
        locals.setSession(null)
    },
}
