import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, ScatterChart, Scatter, Cell } from 'recharts';

interface ChartPreviewProps {
  colors: string[];
}

// 模拟数据
const barData = [
  { name: 'Sample A', value: 85, category: 'Group 1' },
  { name: 'Sample B', value: 72, category: 'Group 2' },
  { name: 'Sample C', value: 91, category: 'Group 3' },
  { name: 'Sample D', value: 68, category: 'Group 4' },
  { name: 'Sample E', value: 78, category: 'Group 5' },
];

const lineData = [
  { time: 0, group1: 20, group2: 15, group3: 25, group4: 18 },
  { time: 1, group1: 35, group2: 28, group3: 40, group4: 30 },
  { time: 2, group1: 45, group2: 38, group3: 35, group4: 42 },
  { time: 3, group1: 60, group2: 48, group3: 55, group4: 52 },
  { time: 4, group1: 75, group2: 65, group3: 70, group4: 68 },
];

const scatterData = [
  { x: 20, y: 45, size: 100 },
  { x: 35, y: 65, size: 150 },
  { x: 50, y: 35, size: 200 },
  { x: 65, y: 75, size: 120 },
  { x: 80, y: 55, size: 180 },
];

export const ChartPreview: React.FC<ChartPreviewProps> = ({ colors }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* 条形图预览 */}
      <div className="space-y-2">
        <h5 className="text-xs font-medium text-muted-foreground text-center">条形图</h5>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData}>
              <XAxis 
                dataKey="name" 
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              <Bar dataKey="value" radius={[2, 2, 0, 0]}>
                {barData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 折线图预览 */}
      <div className="space-y-2">
        <h5 className="text-xs font-medium text-muted-foreground text-center">折线图</h5>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis hide />
              {['group1', 'group2', 'group3', 'group4'].map((key, index) => (
                <Line
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                  strokeWidth={2}
                  dot={{ r: 3, fill: colors[index % colors.length] }}
                  activeDot={{ r: 4, fill: colors[index % colors.length] }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 散点图预览 */}
      <div className="space-y-2">
        <h5 className="text-xs font-medium text-muted-foreground text-center">散点图</h5>
        <div className="h-32 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart data={scatterData}>
              <XAxis 
                type="number" 
                dataKey="x" 
                domain={[0, 100]}
                tick={{ fontSize: 10, fill: 'hsl(var(--muted-foreground))' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                type="number" 
                dataKey="y" 
                domain={[0, 100]}
                hide
              />
              <Scatter dataKey="size">
                {scatterData.map((entry, index) => (
                  <Cell key={`scatter-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};