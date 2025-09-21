import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  highlights: string[];
  isPopular?: boolean;
}

interface DestinationCardProps {
  destination: Destination;
  onSelect: (destination: Destination) => void;
}

export function DestinationCard({ destination, onSelect }: DestinationCardProps) {
  const discountPercent = destination.originalPrice 
    ? Math.round(((destination.originalPrice - destination.price) / destination.originalPrice) * 100)
    : 0;

  return (
    <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative">
      {destination.isPopular && (
        <div className="absolute top-4 left-4 z-10 bg-sunset text-sunset-foreground px-3 py-1 rounded-full text-sm font-medium">
          ยอดนิยม
        </div>
      )}
      
      {discountPercent > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-sm font-medium">
          -{discountPercent}%
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        <div className="absolute bottom-4 left-4 text-white">
          <div className="flex items-center gap-2 text-sm mb-1">
            <MapPin className="h-4 w-4" />
            {destination.location}
          </div>
          <h3 className="text-xl font-bold">{destination.name}</h3>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{destination.rating}</span>
            </div>
            <span className="text-muted-foreground text-sm">
              ({destination.reviewCount.toLocaleString()} รีวิว)
            </span>
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Clock className="h-4 w-4" />
            {destination.duration}
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {destination.highlights.slice(0, 2).map((highlight, index) => (
              <span 
                key={index}
                className="bg-sand text-sand-foreground px-2 py-1 rounded-md text-xs"
              >
                {highlight}
              </span>
            ))}
            {destination.highlights.length > 2 && (
              <span className="text-muted-foreground text-xs px-2 py-1">
                +{destination.highlights.length - 2} อื่นๆ
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-ocean">
              ฿{destination.price.toLocaleString()}
            </span>
            {destination.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ฿{destination.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <Button 
            onClick={() => onSelect(destination)}
            className="bg-gradient-to-r from-ocean to-primary hover:from-ocean/90 hover:to-primary/90"
          >
            ดูรายละเอียด
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}