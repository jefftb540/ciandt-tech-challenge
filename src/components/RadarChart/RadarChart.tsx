import React, { useLayoutEffect, useRef } from 'react'
import * as am5 from '@amcharts/amcharts5'
import { CategoryAxis, ValueAxis } from '@amcharts/amcharts5/xy'
import {
  RadarChart,
  RadarLineSeries,
  AxisRendererRadial,
  AxisRendererCircular,
} from '@amcharts/amcharts5/radar'
import am5themes_Material from '@amcharts/amcharts5/themes/Material'

type Stat = { name: string; value: number }

export default function StatsRadarChart({
  stats,
  color,
}: {
  stats: Stat[]
  color: string
}) {
  const chartRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!chartRef.current) return

    const root = am5.Root.new(chartRef.current)

    const myTheme = am5.Theme.new(root)

    myTheme.rule('RadarLineSeries').setAll({
      fill: am5.color(color),
      stroke: am5.color(color),
    })

    root.setThemes([am5themes_Material.new(root), myTheme])

    const chart = root.container.children.push(
      RadarChart.new(root, {
        startAngle: 0,
        endAngle: 360,
      })
    )
    const xAxis = chart.xAxes.push(
      CategoryAxis.new(root, {
        categoryField: 'name',
        renderer: AxisRendererCircular.new(root, {}),
      })
    )

    xAxis.data.setAll(stats)

    const yAxis = chart.yAxes.push(
      ValueAxis.new(root, {
        min: 0,
        max: Math.max(...stats.map((s) => s.value), 150),
        strictMinMax: true,
        renderer: AxisRendererRadial.new(root, {}),
      })
    )

    yAxis.get('renderer').labels.template.setAll({
      fill: am5.color(0xffffff),
      centerX: 14,
      fontSize: 10,
    })

    xAxis.get('renderer').labels.template.setAll({
      fill: am5.color(0x64c8ff),
      fontSize: 10,
    })
    xAxis.get('renderer').grid.template.setAll({
      stroke: am5.color(0x64c8ff),
      strokeOpacity: 0.2,
    })
    yAxis.get('renderer').grid.template.setAll({
      stroke: am5.color(0x64c8ff),
      strokeOpacity: 0.2,
    })

    const series = chart.series.push(
      RadarLineSeries.new(root, {
        name: 'Stats',
        categoryXField: 'name',
        valueYField: 'value',
        xAxis,
        yAxis,
      })
    )

    series.fills.template.setAll({
      visible: true,
      fillOpacity: 0.4,
      strokeOpacity: 1,
      strokeWidth: 2,
    })

    series.data.setAll(stats)

    return () => root.dispose()
  }, [color, stats])

  return <div ref={chartRef} style={{ width: '100%', height: '350px' }} />
}
