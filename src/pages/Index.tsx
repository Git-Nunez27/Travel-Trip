import { TravelHero } from "@/components/TravelHero";
import { PopularDestinations } from "@/components/PopularDestinations";
import { TripPackages } from "@/components/TripPackages";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">
              TravelTrip
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-ocean transition-colors">หน้าแรก</a>
              <a href="#destinations" className="text-foreground hover:text-ocean transition-colors">จุดหมาย</a>
              <a href="#packages" className="text-foreground hover:text-ocean transition-colors">แพ็กเกจ</a>
              <a href="#contact" className="text-foreground hover:text-ocean transition-colors">ติดต่อ</a>
            </div>

            <Button className="bg-gradient-to-r from-ocean to-primary">
              เข้าสู่ระบบ
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <TravelHero />
      </section>

      {/* Popular Destinations */}
      <section id="destinations">
        <PopularDestinations />
      </section>

      {/* Trip Packages */}
      <section id="packages">
        <TripPackages />
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-ocean/10 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              ทำไมต้องเลือกเรา?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              เรามีประสบการณ์มากกว่า 10 ปีในการจัดทริปท่องเที่ยว พร้อมทีมงานมืออาชีพ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-ocean to-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">บริการ 24/7</h3>
              <p className="text-muted-foreground">
                ทีมงานพร้อมให้คำปรึกษาและช่วยเหลือตลอด 24 ชั่วโมง ไม่ว่าคุณจะอยู่ที่ไหน
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-sunset to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ไกด์ท้องถิ่น</h3>
              <p className="text-muted-foreground">
                ไกด์ที่มีความรู้ลึกในแต่ละจุดหมาย พาคุณไปสถานที่ซ่อนเร้นที่นักท่องเที่ยวทั่วไปไม่รู้จัก
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-forest to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">ราคาดีที่สุด</h3>
              <p className="text-muted-foreground">
                เรารับประกันราคาดีที่สุด หากคุณเจอที่ถูกกว่า เราจะปรับราคาให้เท่ากัน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-ocean to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-4">
              รับข้อมูลโปรโมชั่นพิเศษ
            </h2>
            <p className="text-xl mb-8 text-white/90">
              สมัครรับข่าวสารและโปรโมชั่นเด็ด ๆ ก่อนใครได้ทันที
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="อีเมลของคุณ"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
              />
              <Button className="bg-white text-ocean hover:bg-white/90 font-medium">
                สมัครเลย
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-ocean to-primary bg-clip-text text-transparent">
                TravelTrip
              </h3>
              <p className="text-gray-400 mb-6">
                ผู้นำด้านการท่องเที่ยวที่คุณวางใจได้ พร้อมมอบประสบการณ์ที่ดีที่สุดในทุกการเดินทาง
              </p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-400 hover:text-ocean cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-ocean cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-ocean cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">บริการ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">แพ็กเกจท่องเที่ยว</a></li>
                <li><a href="#" className="hover:text-white transition-colors">จองโรงแรม</a></li>
                <li><a href="#" className="hover:text-white transition-colors">จองตั๋วเครื่องบิน</a></li>
                <li><a href="#" className="hover:text-white transition-colors">รถเช่า</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">จุดหมาย</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ภายในประเทศ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ญี่ปุ่น</a></li>
                <li><a href="#" className="hover:text-white transition-colors">เกาหลี</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ยุโรป</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">ติดต่อเรา</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  02-123-4567
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  info@traveltrip.com
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  กรุงเทพมหานคร, ประเทศไทย
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelTrip. สงวนลิขสิทธิ์ทุกประการ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;