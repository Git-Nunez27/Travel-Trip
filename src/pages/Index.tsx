import { useState } from "react";
import { Search, Filter, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { InventoryCard, InventoryItem } from "@/components/InventoryCard";
import { InventoryStats } from "@/components/InventoryStats";
import { InventoryDialog } from "@/components/InventoryDialog";

// Mock data
const initialInventoryItems: InventoryItem[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    sku: "IPH15P-256",
    category: "electronics",
    quantity: 25,
    minStock: 10,
    price: 45900,
    location: "warehouse-a",
    lastUpdated: "2024-01-15"
  },
  {
    id: "2",
    name: "Samsung Galaxy S24",
    sku: "SGS24-128",
    category: "electronics",
    quantity: 8,
    minStock: 15,
    price: 32900,
    location: "store-front",
    lastUpdated: "2024-01-14"
  },
  {
    id: "3",
    name: "MacBook Air M3",
    sku: "MBA-M3-512",
    category: "electronics",
    quantity: 0,
    minStock: 5,
    price: 52900,
    location: "warehouse-b",
    lastUpdated: "2024-01-13"
  },
  {
    id: "4",
    name: "AirPods Pro 2",
    sku: "APP2-USB",
    category: "electronics",
    quantity: 45,
    minStock: 20,
    price: 8900,
    location: "store-front",
    lastUpdated: "2024-01-15"
  },
  {
    id: "5",
    name: "เสื้อโปโลสีขาว",
    sku: "POLO-W-L",
    category: "clothing",
    quantity: 12,
    minStock: 20,
    price: 599,
    location: "storage-room",
    lastUpdated: "2024-01-12"
  },
  {
    id: "6",
    name: "หนังสือการเขียนโปรแกรม",
    sku: "BOOK-PROG-01",
    category: "books",
    quantity: 18,
    minStock: 10,
    price: 450,
    location: "store-front",
    lastUpdated: "2024-01-11"
  }
];

const Index = () => {
  const [items, setItems] = useState<InventoryItem[]>(initialInventoryItems);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const { toast } = useToast();

  const filteredItems = items.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.sku.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
    
    let matchesStatus = true;
    if (statusFilter === "in-stock") {
      matchesStatus = item.quantity > item.minStock;
    } else if (statusFilter === "low-stock") {
      matchesStatus = item.quantity > 0 && item.quantity <= item.minStock;
    } else if (statusFilter === "out-of-stock") {
      matchesStatus = item.quantity === 0;
    }

    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleSaveItem = (itemData: Omit<InventoryItem, 'id' | 'lastUpdated'>) => {
    const newItem: InventoryItem = {
      ...itemData,
      id: Date.now().toString(),
      lastUpdated: new Date().toISOString().split('T')[0]
    };
    
    setItems(prev => [...prev, newItem]);
    toast({
      title: "สำเร็จ",
      description: "เพิ่มสินค้าใหม่เรียบร้อยแล้ว",
    });
  };

  const handleEditItem = (item: InventoryItem) => {
    toast({
      title: "แก้ไขสินค้า",
      description: `กำลังแก้ไข ${item.name}`,
    });
  };

  const handleRefresh = () => {
    toast({
      title: "รีเฟรชข้อมูล",
      description: "ข้อมูลได้รับการอัปเดตแล้ว",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">ระบบตรวจสอบสินค้า</h1>
              <p className="text-muted-foreground mt-1">จัดการและตรวจสอบสต็อกสินค้าของคุณ</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleRefresh} className="gap-2">
                <RefreshCw className="h-4 w-4" />
                รีเฟรช
              </Button>
              <InventoryDialog onSave={handleSaveItem} />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Statistics */}
        <div className="mb-8">
          <InventoryStats items={items} />
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="ค้นหาสินค้าหรือ SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[150px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทุกหมวดหมู่</SelectItem>
                <SelectItem value="electronics">อิเล็กทรอนิกส์</SelectItem>
                <SelectItem value="clothing">เสื้อผ้า</SelectItem>
                <SelectItem value="books">หนังสือ</SelectItem>
                <SelectItem value="home">ของใช้ในบ้าน</SelectItem>
                <SelectItem value="sports">กีฬา</SelectItem>
                <SelectItem value="other">อื่นๆ</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">ทุกสถานะ</SelectItem>
                <SelectItem value="in-stock">มีสต็อก</SelectItem>
                <SelectItem value="low-stock">สต็อกต่ำ</SelectItem>
                <SelectItem value="out-of-stock">หมดสต็อก</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item) => (
            <InventoryCard 
              key={item.id} 
              item={item} 
              onEdit={handleEditItem}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">ไม่พบสินค้าที่ตรงกับเงื่อนไขการค้นหา</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;