'use client'

import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useAuth } from './AuthContext'
import { getUserProfile } from '../services/userService'
import { Database } from '../types/supabase'

type UserProfile = Database['public']['Tables']['users']['Row']

type UserProfileContextType = {
    userProfile: UserProfile | null
    loading: boolean
    refreshProfile: () => Promise<void>
}

const UserProfileContext = createContext<UserProfileContextType>({
    userProfile: null,
    loading: true,
    refreshProfile: async () => {}
})

export function UserProfileProvider({ children }: { children: React.ReactNode }) {
    const { user, supabase } = useAuth()
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
    const [loading, setLoading] = useState(true)

    const refreshProfile = useCallback(async () => {
        try {
            if (!user?.id) return
            const data = await getUserProfile(supabase, user.id)
            setUserProfile(data)
        } catch (error) {
            console.error('Error fetching user profile:', error)
        } finally {
            setLoading(false)
        }
    }, [supabase, user?.id])

    useEffect(() => {
        refreshProfile()
    }, [refreshProfile, user?.id])

    return (
        <UserProfileContext.Provider value={{ userProfile, loading, refreshProfile }}>
            {children}
        </UserProfileContext.Provider>
    )
}

export function useUserProfile() {
    const context = useContext(UserProfileContext)
    if (!context) {
        throw new Error('useUserProfile must be used within a UserProfileProvider')
    }
    return context
} 