import React from 'react'

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
