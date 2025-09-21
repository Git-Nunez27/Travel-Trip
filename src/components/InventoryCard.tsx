import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Edit, Package } from "lucide-react";

export interface InventoryItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  quantity: number;
  minStock: number;
  price: number;
  location: string;
  lastUpdated: string;
}

interface InventoryCardProps {
  item: InventoryItem;
  onEdit: (item: InventoryItem) => void;
}

export function InventoryCard({ item, onEdit }: InventoryCardProps) {
  const getStatusBadge = () => {
    if (item.quantity === 0) {
      return <Badge variant="destructive">หมดสต็อก</Badge>;
    }
    if (item.quantity <= item.minStock) {
      return <Badge className="bg-warning text-warning-foreground">สต็อกต่ำ</Badge>;
    }
    return <Badge className="bg-success text-success-foreground">มีสต็อก</Badge>;
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">{item.name}</CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEdit(item)}
          className="h-8 w-8 p-0"
        >
          <Edit className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">SKU: {item.sku}</span>
            {getStatusBadge()}
          </div>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">จำนวน</p>
              <p className="text-2xl font-bold text-primary">{item.quantity}</p>
            </div>
            <div>
              <p className="text-muted-foreground">ราคา</p>
              <p className="text-lg font-semibold">฿{item.price.toLocaleString()}</p>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm">
              <Package className="h-4 w-4 text-muted-foreground" />
              <span className="text-muted-foreground">หมวดหมู่:</span>
              <span>{item.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">ที่เก็บ:</span>
              <span>{item.location}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              อัปเดตล่าสุด: {new Date(item.lastUpdated).toLocaleDateString('th-TH')}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}