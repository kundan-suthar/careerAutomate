"use server"

import { db } from "@/lib/prisma"
import { auth } from "@clerk/nextjs/server"

export async function updateUser(data) {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("unauthorized")
    }
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })
    if (!user) {
        throw new Error("User not found")
    }
    try {
        const result = await db.$transaction(async (tx) => {
            //find if the industry exists
            let industryInsight = await tx.industryInsight.findUnique({
                where: {
                    industry: data.industry
                }
            })
            //if industry dont exist , create it with default value or later ai data
            if (!industryInsight) {
                industryInsight = await tx.industryInsight.create({
                    data: {
                        industry: data.industry,
                        salaryRanges: [],
                        growthRate: 0,
                        demandLevel: "Medium",
                        topskills: [],
                        marketOutlook: "Positive",
                        keyTrends: [],
                        recommendentionSkills: [],
                        nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //1 week from now

                    }
                })
            }
            //update the user
            const updatedUser = await tx.user.update({
                where: {
                    id: user.id,
                },
                data: {
                    industry: data.industry,
                    experince: data.experince,
                    bio: data.bio,
                    skills: data.skills
                }
            })
            return { updateUser, industryInsight }
        },
            {
                timeout: 10000
            }
        )
        return result.user;
    } catch (error) {
        console.error("error updating user and industy:", error.message)
        throw new Error("failed to update profile.")
    }
}

export async function getUserOnBoardingStatus() {
    const { userId } = await auth()

    if (!userId) {
        throw new Error("unauthorized")
    }
    const user = await db.user.findUnique({
        where: {
            clerkUserId: userId,
        }
    })
    if (!user) {
        throw new Error("User not found")
    }
    try {
        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true
            }
        })
        return {
            isOnBoarded: !!user?.industry
        }
    } catch (error) {
        console.error("Error checking onboarding status:", error)
        throw new Error("failed to check onboarding status")
    }
}