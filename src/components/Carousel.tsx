import * as React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel = ({ children }: CarouselProps) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide space-x-4 py-4">
        {React.Children.map(children, (child, index) => (
            <div key={index} className="snap-center shrink-0 w-full sm:w-1/2 lg:w-1/3">
                {child}
            </div>
        ))}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-4">
        <Button variant="outline" size="icon" onClick={() => scroll("left")} aria-label="Previous slide">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button variant="outline" size="icon" onClick={() => scroll("right")} aria-label="Next slide">
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Carousel;
