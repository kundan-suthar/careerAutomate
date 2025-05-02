import React from 'react'
import { getUserOnBoardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
const IndustryInsights = async () => {
    const { isOnBoarded } = await getUserOnBoardingStatus();
    if (!isOnBoarded) {
        redirect("/onboarding")
    }
    return (
        <div>
            IndustryInsights
        </div>
    )
}

export default IndustryInsights
