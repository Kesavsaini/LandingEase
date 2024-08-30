"use server"
import connect from '@/lib/db/mongo'

export async function register() {
    await connect()
}