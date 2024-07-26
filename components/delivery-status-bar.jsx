"use client"

import { LabelList, Line, LineChart, CartesianGrid, XAxis, Area, AreaChart, YAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardTitle, CardHeader } from "./ui/card"

const chartData = [
  { elements: "Black Handle", planned_qty: 50 },
  { elements: "Door", planned_qty: 30 },
  { elements: "Fix Window 2", planned_qty: 10 },
  { elements: "Folding System - Slider", planned_qty: 30 },
  { elements: "L Angle", planned_qty: 25 },
  { elements: "Side hung window - window elements", planned_qty: 40 },
]

const chartConfig = {
  planned_qty: {
    label: "Planned Qty",
    color: "#2563eb",
  }
}

export function DeliveryStatus() {

  return (
    <Card className='h-[400px] w-[700px]'>

        <CardHeader className="pb-4">
            <CardTitle>Delivery Status</CardTitle>
        </CardHeader>

        <ChartContainer config={chartConfig} className='w-[90%] h-[75%] p-3'>
          {/* <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="elements"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Line
              dataKey="planned_qty"
              type="natural"
              stroke="blue"
              strokeWidth={2}
              dot={{
                fill: "blue",
              }}
              activeDot={{
                r: 6,
              }}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Line>
          </LineChart> */}

          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="elements"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="#8600ff"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="#8600ff"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="planned_qty"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>

    </Card>
  )
}
