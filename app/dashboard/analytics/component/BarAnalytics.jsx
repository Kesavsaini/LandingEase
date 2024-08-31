"use client"

import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { runReport } from "@/app/action/analytics"
import SelectAnalyticsProject from "./SelectAnalyticsProject"
import { getPagesByUser } from "@/app/action/pageJson"
import { LoadingSpinner } from "@/app/components/Icons"
import AnalyticsFind from '../../../../public/AnalyticsFind.svg'
import Image from "next/image"

const chartConfig = {
  views: {
    label: "Page Views",
  },
//   desktop: {
//     label: "Desktop",
//     color: "hsl(var(--chart-1))",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "hsl(var(--chart-2))",
//   },
}

export function BarAnalytics() {
    const [chartData, setChartData] =
    React.useState([])
    const [selected, setSelected] = React.useState();
    const [projectsArray, setProjectsArray] =React.useState([]);
    const getCharData=async()=>{
        const data=await runReport({domain:selected});
        setChartData(data);
    }
    const getPages=async()=>{
     const projects=await getPagesByUser();
     const projectsArr=projects.map((page)=>{
        return {name:page.name,subdomain:page.subdomain};
     })
     setProjectsArray(projectsArr);
    if(projectsArr.length>0) setSelected("/"+projectsArr[0].subdomain);
    }

    React.useEffect(()=>{
        getPages();
     },[])

    React.useEffect(()=>{
       getCharData();
    },[selected])

  const total = React.useMemo(
    () => chartData.reduce((acc, curr) => acc + parseInt(curr.views), 0),
    [selected,chartData]
  );

  if(!selected && chartData.length>0){
    return <div className="w-full h-full flex justify-center items-center">
      <LoadingSpinner/>
    </div>
  }

  return (
    <Card className="h-full w-full">
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row justify-around">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6 items-baseline">
          <CardTitle>
            <SelectAnalyticsProject projectsArray={projectsArray} selected={selected} setSelected={setSelected}/>
          </CardTitle>
          <CardDescription className="text-xs">
            Data can take up to 24 hours to update
          </CardDescription>
        </div>
        <div className="flex flex-col h-full p-6 items-center justify-center">
        <CardDescription>
            Total views in 28 days
          </CardDescription>
          <div className="text-4xl font-extrabold justify-center items-center">
           {total}
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6 h-[26rem]">
       {chartData.length>0 ? 
       <ChartContainer
          config={chartConfig}
          className="aspect-auto h-full w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })
                  }}
                />
              }
            />
            <Bar dataKey={"views"} fill={`#F97316`} />
          </BarChart>
        </ChartContainer>:
         <div className="w-full h-full flex justify-center items-center flex-col">
         <Image src={AnalyticsFind} width={500} height={500}/>
         <div>Unable to find page views</div>
       </div>
        }
      </CardContent>
    </Card>
  )
}
