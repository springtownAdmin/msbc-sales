"use client";

import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from './ui/button';

const Reminders = () => {

  return (
    <>
        <Card className='w-[400px]'>

            <CardHeader>
                <CardTitle>Reminders</CardTitle>
            </CardHeader>

            <CardContent className='h-full overflow-auto'>

                {[1, 2].map((v) => (

                    <>
                    
                        <div className='flex justify-between'>

                            <div className='flex gap-5'>

                                <Avatar>
                                    <AvatarImage />
                                    <AvatarFallback className='bg-yellow-100'>KM</AvatarFallback>
                                </Avatar>

                                <div>
                                    <div>Kamran</div>
                                    <CardDescription className='text-xs'>13 Feb 2024</CardDescription>
                                </div>

                            </div>

                            <div>

                                <Button variant="outline" disabled>12:00 PM</Button>

                            </div>

                        </div>

                        <hr className='border-gray-100 my-4' />

                    </>

                ))}

            </CardContent>

        </Card>
    </>
  );

}

export default Reminders