"use client"

import React, { useState } from 'react'

import { Label, Pie, PieChart, Sector } from "recharts"
import { PieSectorDataItem } from "recharts/types/polar/Pie"

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartStyle,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export const description = "An interactive pie chart"


const desktopData = [
    { file: "Images", desktop: 186, fill: "#452871" },
    { file: "Videos", desktop: 305, fill: "#E8CCEB" },
    { file: "Documents", desktop: 237, fill: "#9989BC" },
    { file: "Others", desktop: 173, fill: "#D3B1F7" },
]

const chartConfig = {
    images: {
        label: "Images",
        color: '#f000000'
    },
    videps: {
        label: "Videos",
        color: "#f0ff000"
    },
    documents: {
        label: "Documents",
        color: "rgb(59 130 246 / 0.5)"
    },
    others: {
        label: "Others",
        color: "rgbs(59, 130, 246)",
    },
} satisfies ChartConfig


const Storage = () => {
    const id = "pie-interactive"
    const [activeFile, setActiveFile] = useState(desktopData[0].file)

    const activeIndex = React.useMemo(
        () => desktopData.findIndex((item) => item.file === activeFile),
        [activeFile]
    )
    const files = React.useMemo(() => desktopData.map((item) => item.file), [])


    return (
        <div>
            <div>
                <Card data-chart={id} className="flex flex-col">
                    <ChartStyle id={id} config={chartConfig} />
                    <CardHeader className="flex-row items-start space-y-0 pb-0">
                        <h3 className='text-sm font-bold'>
                            Storage
                        </h3>
                    </CardHeader>
                    <CardContent className="flex flex-1 justify-center flex-col items-center pb-0">
                        <ChartContainer
                            id={id}
                            config={chartConfig}
                            className="mx-auto aspect-square w-full max-w-[300px]"
                        >
                            <PieChart>
                                <ChartTooltip
                                    cursor={false}
                                    content={<ChartTooltipContent hideLabel />}
                                />
                                <Pie
                                    data={desktopData}
                                    dataKey="desktop"
                                    nameKey="month"
                                    innerRadius={60}
                                    strokeWidth={5}
                                    activeIndex={activeIndex}
                                    activeShape={({
                                        outerRadius = 0,
                                        ...props
                                    }: PieSectorDataItem) => (
                                        <g>
                                            <Sector {...props} outerRadius={outerRadius + 10} />
                                            <Sector
                                                {...props}
                                                outerRadius={outerRadius + 25}
                                                innerRadius={outerRadius + 12}
                                            />
                                        </g>
                                    )}
                                >
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
                                                            {desktopData[activeIndex].desktop.toLocaleString()}
                                                        </tspan>
                                                        <tspan
                                                            x={viewBox.cx}
                                                            y={(viewBox.cy || 0) + 24}
                                                            className="fill-muted-foreground"
                                                        >
                                                            Images
                                                        </tspan>
                                                    </text>
                                                )
                                            }
                                        }}
                                    />
                                </Pie>
                            </PieChart>
                        </ChartContainer>

                        <div className='py-4 px-4 flex gap-x-6 text-center'>
                            <div>
                                <h3 className='text-xs font-semibold text-gray-500'>Total Space</h3>
                                <p className='text-md text-xl font-bold'>
                                    510GB
                                </p>
                            </div>
                            <div>
                                <h3 className='text-xs font-semibold text-gray-500'>Used Space</h3>
                                <p className='text-md text-xl font-bold'>
                                    11GB
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Storage