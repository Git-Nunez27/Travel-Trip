import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import heroBeach from "@/assets/hero-beach.jpg";

export function TravelHero() {
  const [searchData, setSearchData] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "1"
  });

  const handleSearch = () => {
    console.log("Searching for:", searchData);
  };

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              ค้นพบ
              <span className="block bg-gradient-to-r from-sunset to-yellow-300 bg-clip-text text-transparent">
                การเดินทาง
              </span>
              ที่ใช่สำหรับคุณ
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              จองที่พักและแพ็กเกจท่องเที่ยวสุดพิเศษไปทั่วโลก พร้อมประสบการณ์ที่ไม่มีวันลืม
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  จุดหมาย
                </label>
                <Input
                  placeholder="คุณอยากไปที่ไหน?"
                  value={searchData.destination}
                  onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
                  className="border-0 bg-gray-50 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  วันเช็คอิน
                </label>
                <Input
                  type="date"
                  value={searchData.checkIn}
                  onChange={(e) => setSearchData({ ...searchData, checkIn: e.target.value })}
                  className="border-0 bg-gray-50 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  วันเช็คเอาท์
                </label>
                <Input
                  type="date"
                  value={searchData.checkOut}
                  onChange={(e) => setSearchData({ ...searchData, checkOut: e.target.value })}
                  className="border-0 bg-gray-50 text-gray-900"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-600 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  จำนวนผู้เดินทาง
                </label>
                <Select value={searchData.guests} onValueChange={(value) => setSearchData({ ...searchData, guests: value })}>
                  <SelectTrigger className="border-0 bg-gray-50 text-gray-900">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 ท่าน</SelectItem>
                    <SelectItem value="2">2 ท่าน</SelectItem>
                    <SelectItem value="3">3 ท่าน</SelectItem>
                    <SelectItem value="4">4 ท่าน</SelectItem>
                    <SelectItem value="5+">5+ ท่าน</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-6">
              <Button 
                onClick={handleSearch}
                className="w-full md:w-auto px-12 py-3 text-lg font-medium bg-gradient-to-r from-ocean to-primary hover:from-ocean/90 hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Search className="h-5 w-5 mr-2" />
                ค้นหาทริปของคุณ
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">1000+</div>
              <div className="text-white/80">สถานที่ท่องเที่ยว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">50,000+</div>
              <div className="text-white/80">นักท่องเที่ยวที่พอใจ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">200+</div>
              <div className="text-white/80">แพ็กเกจท่องเที่ยว</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-white/80">บริการลูกค้า</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}