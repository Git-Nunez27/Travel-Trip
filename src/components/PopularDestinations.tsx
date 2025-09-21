import { DestinationCard, Destination } from "./DestinationCard";
import { useToast } from "@/hooks/use-toast";
import mountainImage from "@/assets/mountain-destination.jpg";
import templeImage from "@/assets/temple-destination.jpg";
import cityImage from "@/assets/city-destination.jpg";
import heroBeach from "@/assets/hero-beach.jpg";

const destinations: Destination[] = [
  {
    id: "1",
    name: "ภูเก็ต - เกาะในฝัน",
    location: "ภูเก็ต, ประเทศไทย",
    image: heroBeach,
    price: 8900,
    originalPrice: 12900,
    rating: 4.8,
    reviewCount: 2341,
    duration: "3-5 วัน",
    highlights: ["ชายหาดป่าตอง", "เกาะพีพี", "ดำน้ำ", "นวดแผนไทย"],
    isPopular: true
  },
  {
    id: "2", 
    name: "ดอยอินทนนท์",
    location: "เชียงใหม่, ประเทศไทย",
    image: mountainImage,
    price: 6900,
    originalPrice: 8900,
    rating: 4.6,
    reviewCount: 1879,
    duration: "2-3 วัน",
    highlights: ["ยอดเขาสูงสุด", "ทะเลหมอก", "ดอกไม้หิมาลัย", "อากาศเย็น"]
  },
  {
    id: "3",
    name: "วัดอังกอร์วัต", 
    location: "เสียมเรียบ, กัมพูชา",
    image: templeImage,
    price: 15900,
    rating: 4.9,
    reviewCount: 3456,
    duration: "4-6 วัน",
    highlights: ["มรดกโลก", "สถาปัตยกรรมโบราณ", "พระอาทิตย์ขึ้น", "ประวัติศาสตร์"]
  },
  {
    id: "4",
    name: "สิงคโปร์ โมเดิร์น",
    location: "สิงคโปร์",
    image: cityImage,
    price: 18900,
    originalPrice: 22900,
    rating: 4.7,
    reviewCount: 4123,
    duration: "3-4 วัน", 
    highlights: ["Marina Bay", "Gardens by the Bay", "ช้อปปิ้ง", "อาหารมิชลิน"],
    isPopular: true
  }
];

export function PopularDestinations() {
  const { toast } = useToast();

  const handleDestinationSelect = (destination: Destination) => {
    toast({
      title: "สนใจจุดหมาย",
      description: `คุณเลือก ${destination.name} - เราจะติดต่อกลับในไม่ช้า!`,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">
            จุดหมายยอดนิยม
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            สถานที่ท่องเที่ยวที่นักเดินทางแนะนำมากที่สุด พร้อมประสบการณ์ที่น่าประทับใจ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <DestinationCard 
              key={destination.id}
              destination={destination}
              onSelect={handleDestinationSelect}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-sand/50 to-sunset/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">ไม่พบจุดหมายที่ใช่?</h3>
            <p className="text-muted-foreground mb-6">
              เรามีจุดหมายอื่นๆ อีกมากมายทั่วโลก บอกเราหน่อยว่าคุณอยากไปที่ไหน
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-ocean to-primary text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                ปรึกษาผู้เชี่ยวชาย
              </button>
              <button className="border border-ocean text-ocean px-6 py-3 rounded-lg font-medium hover:bg-ocean hover:text-white transition-all duration-300">
                ดูจุดหมายทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}