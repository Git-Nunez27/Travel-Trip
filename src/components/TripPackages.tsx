import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TripPackage {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  duration: string;
  included: string[];
  features: string[];
  isPopular?: boolean;
  rating: number;
}

const tripPackages: TripPackage[] = [
  {
    id: "1",
    name: "แพ็กเกจทะเลใต้",
    description: "เที่ยวเกาะสวยในทะเลอันดามัน ภูเก็ต กระบี่ และเกาะพีพี",
    price: 15900,
    originalPrice: 18900,
    duration: "4 วัน 3 คืน",
    included: ["ที่พัก 4 ดาว", "อาหาร 3 มื้อ/วัน", "เรือใต้น้ำ", "รถรับส่ง"],
    features: ["ดำน้ำ", "เกาะแห้ง", "นวดแผนไทย", "มื้อเย็นริมชายหาด"],
    isPopular: true,
    rating: 4.8
  },
  {
    id: "2",
    name: "แพ็กเกจภาคเหนือ",
    description: "สัมผัสธรรมชาติและวัฒนธรรมล้านนา เชียงใหม่ เชียงราย",
    price: 12900,
    originalPrice: 14900,
    duration: "5 วัน 4 คืน",
    included: ["ที่พัก 3-4 ดาว", "อาหาร 2 มื้อ/วัน", "รถตู้ปรับอากาศ", "ไกด์ท้องถิน"],
    features: ["วัดพระธาตุดอยสุเทพ", "หมู่บ้านเผ่า", "ตลาดน้ำ", "ฟาร์มสตรอเบอรี่"],
    rating: 4.6
  },
  {
    id: "3",
    name: "แพ็กเกจกรุงเทพ",
    description: "ช้อปปิ้งและกินเที่ยวกรุงเทพมหานคร พร้อมทัวร์วัดและพระราชวัง",
    price: 8900,
    duration: "3 วัน 2 คืน",
    included: ["โรงแรม 4 ดาว", "อาหารเช้า", "รถรับส่งสนามบิน", "ตั๋วเข้าสถานที่"],
    features: ["วัดพระแก้ว", "ตลาดจตุจักร", "เจ้าพระยาครุยส์", "ช้อปปิ้งมอลล์"],
    rating: 4.4
  }
];

export function TripPackages() {
  const handleBooking = (packageId: string) => {
    console.log("Booking package:", packageId);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-sand/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-ocean to-forest bg-clip-text text-transparent">
            แพ็กเกจท่องเที่ยวยอดนิยม
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            เลือกแพ็กเกจที่เหมาะกับคุณ ทุกทริปได้รับการคัดสรรอย่างดีเพื่อประสบการณ์ที่สมบูรณ์แบบ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripPackages.map((pkg) => {
            const discountPercent = pkg.originalPrice 
              ? Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)
              : 0;

            return (
              <Card 
                key={pkg.id} 
                className={`relative hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  pkg.isPopular ? 'ring-2 ring-sunset shadow-lg scale-105' : ''
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sunset to-orange-400 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    ⭐ แนะนำ
                  </div>
                )}

                {discountPercent > 0 && (
                  <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-bold">
                    ประหยัด {discountPercent}%
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-ocean mb-2">
                    {pkg.name}
                  </CardTitle>
                  <p className="text-muted-foreground">{pkg.description}</p>
                  
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{pkg.rating}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <span className="text-muted-foreground">{pkg.duration}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-4xl font-bold text-ocean">
                        ฿{pkg.price.toLocaleString()}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          ฿{pkg.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">ต่อท่าน</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">รวมในแพ็กเกจ:</h4>
                    <ul className="space-y-2">
                      {pkg.included.map((item, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-forest flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">ไhighlight พิเศษ:</h4>
                    <div className="flex flex-wrap gap-2">
                      {pkg.features.map((feature, index) => (
                        <span 
                          key={index}
                          className="bg-sand text-sand-foreground px-3 py-1 rounded-md text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => handleBooking(pkg.id)}
                    className="w-full bg-gradient-to-r from-ocean to-primary hover:from-ocean/90 hover:to-primary/90 text-lg py-6 font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    จองเลย
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 py-3 text-lg border-ocean text-ocean hover:bg-ocean hover:text-ocean-foreground"
          >
            ดูแพ็กเกจทั้งหมด
          </Button>
        </div>
      </div>
    </section>
  );
}