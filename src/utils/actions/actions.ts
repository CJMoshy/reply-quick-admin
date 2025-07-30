"use server"
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
export async function signOut() {
    const supabase = await createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
        console.error('Error signing out:', error)
        return redirect('/error')
    }
    return redirect('/login')
}

export async function getUser() {
    const supabase = await createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()
    return user
}