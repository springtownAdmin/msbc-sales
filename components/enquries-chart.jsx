"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { enquiry: "leadIn", enquiries: 2, fill: "blue" },
  { enquiry: "lost", enquiries: 1, fill: "red" },
  { enquiry: "quoteInProgress", enquiries: 1, fill: "orange" },
  { enquiry: "quoteReady", enquiries: 2, fill: "green" },
]

const chartConfig = {
  enquiries: {
    label: "Enquiries",
  },
  leadIn: {
    label: "Lead In",
    color: "hsl(var(--chart-1))",
  },
  lost: {
    label: "Lost",
    color: "hsl(var(--chart-2))",
  },
  quoteInProgress: {
    label: "Quote In Progress",
    color: "hsl(var(--chart-3))",
  },
  quoteReady: {
    label: "Quote Ready",
    color: "hsl(var(--chart-4))",
  }
}

export function EnquiryChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.enquiries, 0)
  }, [])

  return (

    <Card className="flex flex-col w-[350px]">

      <CardHeader className="pb-0">
        <CardTitle>Enquiries</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 pb-0">

        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />

            <Pie data={chartData} dataKey="enquiries" nameKey="enquiry" innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {

                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Enquiries
                        </tspan>
                      </text>
                    )
                  }

                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>

      </CardContent>
      
    </Card>

  )
}
