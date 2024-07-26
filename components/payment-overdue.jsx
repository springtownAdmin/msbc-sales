import React from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    { amount: "$ 30.00", overdue: 1419 },
    { amount: "$ 273.00", overdue: 1200 },
    { amount: "$ 21.00", overdue: 1000 },
    { amount: "$ 18.00", overdue: 1130 },
]

const chartConfig = {
    overdue: {
      label: "Overdue in day(s)",
      color: "hsl(var(--chart-1))",
    },
    label: {
      color: "hsl(var(--background))",
    },
}

const PaymentOverdue = () => {

  return (

    <Card className='w-[400px]'>

        <CardHeader>
            <CardTitle>Payment Overdue</CardTitle>
            <CardDescription>$ 112K</CardDescription>
        </CardHeader>
    
        <CardContent>

            <ChartContainer config={chartConfig}>

                <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ right: 16 }}>
                    <CartesianGrid horizontal={false} />
                    <YAxis
                        dataKey="amount"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        hide
                    />
                    <XAxis dataKey="overdue" type="number" hide />

                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />

                    <Bar dataKey="overdue" layout="vertical" fill="green" radius={4}>
                        <LabelList
                            dataKey="amount"
                            position="insideLeft"
                            offset={8}
                            className="fill-[--color-label]"
                            fontSize={12}
                        />
                        <LabelList
                            dataKey="overdue"
                            position="right"
                            offset={8}
                            className="fill-foreground"
                            fontSize={12}
                        />
                    </Bar>

                </BarChart>

            </ChartContainer>
            
        </CardContent>

    </Card>

  )
}

export default PaymentOverdue