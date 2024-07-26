import React from 'react';
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"

const RecentActivity = () => {

  return (
    <>
        <Card className='w-[570px] h-[400px]'>

            <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
            </CardHeader>

            <CardContent className='overflow-auto h-[90%]'>

                <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">20 min ago</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">PO No.: 2338</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Status has been Updated - Draft</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">27 min ago</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Quotation No.: 2000279</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Status has been Updated - Secured Job</p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">45 min ago</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Enquiry No. 2312</h3>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Status has been Updated - Received</p>
                    </li>
                </ol>

            </CardContent>

        </Card>
    </>
  );

}

export default RecentActivity