import { z } from "zod";

export const onboardingSchema = z.object({
    industry: z.string({
        required_error: "Please select an industry",
    }),
    subIndustry: z.string({
        required_error: "Please select an sub-industry",
    }),
    bio: z.string().max(500).optional(),
    experience: z
        .string()
        .transform((val) => parseInt(val, 10))
        .pipe(
            z
                .number()
                .min(0, "Experince must me least 0 years")
                .max(50, "Experince cannot be exceed 50 years")
        ),
    skills: z.string().transform((val) => {
        val ? val.split(',').map((skill) => skill.trim()).filter(Boolean) : undefined
    })

})