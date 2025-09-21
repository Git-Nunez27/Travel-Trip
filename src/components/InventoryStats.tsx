import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import { InventoryItem } from "./InventoryCard";

interface InventoryStatsProps {
  items: InventoryItem[];
}

export function InventoryStats({ items }: InventoryStatsProps) {
  const totalItems = items.length;
  const inStockItems = items.filter(item => item.quantity > item.minStock).length;
  const lowStockItems = items.filter(item => item.quantity > 0 && item.quantity <= item.minStock).length;
  const outOfStockItems = items.filter(item => item.quantity === 0).length;
  const totalValue = items.reduce((sum, item) => sum + (item.quantity * item.price), 0);

  const stats = [
    {
      title: "รายการทั้งหมด",
      value: totalItems,
      icon: Package,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "มีสต็อก",
      value: inStockItems,
      icon: CheckCircle,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "สต็อกต่ำ",
      value: lowStockItems,
      icon: AlertTriangle,
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      title: "หมดสต็อก",
      value: outOfStockItems,
      icon: AlertTriangle,
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <div className={`${stat.bgColor} p-2 rounded-md`}>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
      
      <Card className="md:col-span-2 lg:col-span-4 hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            มูลค่าสต็อกรวม
          </CardTitle>
          <div className="bg-info/10 p-2 rounded-md">
            <TrendingUp className="h-4 w-4 text-info" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-info">
            ฿{totalValue.toLocaleString()}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}