import { industries } from '@/data/industries'
import React from 'react'
import OnBoardingForm from './_components/onboarding-form'

const Onboarding = () => {
    return (
        <div>

            <OnBoardingForm industries={industries} />
        </div>
    )
}

export default Onboarding
