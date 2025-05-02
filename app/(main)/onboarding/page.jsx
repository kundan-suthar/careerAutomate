import { industries } from '@/data/industries'
import React from 'react'
import OnBoardingForm from './_components/onboarding-form'
import { getUserOnBoardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
const Onboarding = async () => {
    const { isOnBoarded } = await getUserOnBoardingStatus();
    if (isOnBoarded) {
        redirect("/dashboard")
    }
    return (
        <div>

            <OnBoardingForm industries={industries} />
        </div>
    )
}

export default Onboarding
