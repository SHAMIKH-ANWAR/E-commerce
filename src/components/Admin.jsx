"use client";

import React from "react";
import {
  Card5,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  BarChart,
  PieChart,
  Line,
  Bar,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { Package, DollarSign, ShoppingCart, Users } from "lucide-react";

// Dummy data (replace with actual data from your backend later)
const revenueData = [
  { month: "Jan", revenue: 2400 },
  { month: "Feb", revenue: 1398 },
  { month: "Mar", revenue: 9800 },
  { month: "Apr", revenue: 3908 },
  { month: "May", revenue: 4800 },
  { month: "Jun", revenue: 3800 },
];

const salesData = [
  { category: "Electronics", sales: 4000 },
  { category: "Clothing", sales: 3000 },
  { category: "Books", sales: 2000 },
  { category: "Home", sales: 2780 },
  { category: "Beauty", sales: 1890 },
];

const stockData = [
  { name: "In Stock", value: 400 },
  { name: "Low Stock", value: 300 },
  { name: "Out of Stock", value: 100 },
];

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card5>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card5>
            <Card5>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sales</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+2350</div>
                <p className="text-xs text-muted-foreground">
                  +180.1% from last month
                </p>
              </CardContent>
            </Card5>
            <Card5>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Products</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+12,234</div>
                <p className="text-xs text-muted-foreground">
                  +19% from last month
                </p>
              </CardContent>
            </Card5>
            <Card5>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Users
                </CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+573</div>
                <p className="text-xs text-muted-foreground">
                  +201 since last hour
                </p>
              </CardContent>
            </Card5>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card5 className="col-span-4">
              <CardHeader>
                <CardTitle>Revenue Overview</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ChartContainer
                  config={{
                    revenue: {
                      label: "Revenue",
                      color: "hsl(var(--chart-1))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="var(--color-revenue)"
                        name="Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card5>
            <Card5 className="col-span-3">
              <CardHeader>
                <CardTitle>Sales by Category</CardTitle>
                <CardDescription>
                  Top selling product categories
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    sales: {
                      label: "Sales",
                      color: "hsl(var(--chart-2))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Legend />
                      <Bar
                        dataKey="sales"
                        fill="var(--color-sales)"
                        name="Sales"
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card5>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card5 className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  You made 265 sales this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* Replace with actual order data */}
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center">
                      <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">
                          Order #{1000 + i}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {new Date().toLocaleDateString()}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        +$
                        {(Math.random() * 100).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card5>
            <Card5 className="col-span-3">
              <CardHeader>
                <CardTitle>Stock Status</CardTitle>
                <CardDescription>Current inventory levels</CardDescription>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={{
                    stock: {
                      label: "Stock",
                      color: "hsl(var(--chart-3))",
                    },
                  }}
                  className="h-[300px]"
                >
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8884d8"
                        name="Revenue"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  // For the Sales by Category chart:
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="category" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sales" fill="#82ca9d" name="Sales" />
                    </BarChart>
                  </ResponsiveContainer>
                  // For the Stock Status chart:
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={stockData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                      />
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card5>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
