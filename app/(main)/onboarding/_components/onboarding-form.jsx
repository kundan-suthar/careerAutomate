"use client";

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { onboardingSchema } from '../../lib/schema';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SelectContent, SelectLabel } from '@radix-ui/react-select';
import { Label } from '@/components/ui/label';

const OnBoardingForm = ({ industries }) => {
    const [selectedIndustry, setSelectIndustry] = useState(null)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        resolver: zodResolver(onboardingSchema),
    })
    return (
        <div className='flex items-center justify-center bg-background '>
            <div>

            </div>
            <Card className={"w-full max-w-lg mt-10 mx-2"}>
                <CardHeader>
                    <CardTitle>Complete Your Profile</CardTitle>
                    <CardDescription>Select yourindustry to get personalized career insights and recommendation</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div>
                            <Label htmlfor="industry">Industry</Label>
                            <Select>
                                <SelectTrigger id="industry" className="w-full">
                                    <SelectValue placeholder="select an industry" />
                                </SelectTrigger>
                                <SelectContent>
                                    {industries.map((ind) => {
                                        return <SelectItem value={ind.id} key={ind.id}>{ind.name}</SelectItem>

                                    })}
                                </SelectContent>
                            </Select>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem className={"w-full "} value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div>

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default OnBoardingForm
