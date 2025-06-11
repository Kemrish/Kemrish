import { useState } from "react";

import neon1 from "../images/neon1.jpg";
import neon2 from "../images/neon2.jpg";
import neon3 from "../images/neon3.jpg";
import neon4 from "../images/neon4.jpg";
import neon5 from "../images/neon5.jpg";
import neon6 from "../images/neon6.jpg";
import in1 from "../images/in1.jpg";
import in2 from "../images/in2.jpg";
import in3 from "../images/in3.jpg";
import in4 from "../images/in4.jpg";
import in5 from "../images/in5.jpg";
import in6 from "../images/in6.jpg";
import in7 from "../images/in7.jpg";
import in8 from "../images/in8.jpg";
import in9 from "../images/in9.jpg";
import in10 from "../images/in10.jpg";
import in11 from "../images/in11.jpg";
import in12 from "../images/in12.jpg";

type ColorCategory = "red" | "blue" | "yellow" | "pink" | "green" | "purple";
type FilterCategory = ColorCategory | "all";

interface ImageItem {
  img: string;
  color: ColorCategory;
  title: string;
}

const Inspiration = () => {
  const imageData: ImageItem[] = [
    { img: neon1, color: "red", title: "Bold Red Sign" },
    { img: neon2, color: "blue", title: "Electric Blue" },
    { img: neon3, color: "yellow", title: "Sunshine Yellow" },
    { img: neon4, color: "pink", title: "Pink Glow" },
    { img: neon5, color: "green", title: "Emerald Light" },
    { img: neon6, color: "blue", title: "Ocean Blue" },
    { img: in1, color: "yellow", title: "Golden Glow" },
    { img: in2, color: "purple", title: "Violet Dream" },
    { img: in3, color: "red", title: "Ruby Red" },
    { img: in4, color: "green", title: "Lime Fresh" },
    { img: in5, color: "yellow", title: "Lemon Zest" },
    { img: in6, color: "pink", title: "Bubblegum Pink" },
    { img: in7, color: "blue", title: "Sapphire Glow" },
    { img: in8, color: "purple", title: "Amethyst Light" },
    { img: in9, color: "red", title: "Cherry Red" },
    { img: in10, color: "yellow", title: "Honey Glow" },
    { img: in11, color: "green", title: "Mint Fresh" },
    { img: in12, color: "blue", title: "Sky Blue" },
  ];

  const colorCategories: FilterCategory[] = [
    "all",
    "red",
    "blue",
    "yellow",
    "pink",
    "green",
    "purple",
  ];

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredImages =
    activeFilter === "all"
      ? imageData
      : imageData.filter((image) => image.color === activeFilter);

  const colorMap: Record<ColorCategory, string> = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    pink: "bg-pink-500",
    green: "bg-green-500",
    purple: "bg-purple-500",
  };

  const getColorClass = (color: FilterCategory) => {
    if (color === "all") return "bg-white text-black";
    return colorMap[color];
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Inspiration Gallery
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Browse our collection by color
          </p>
        </div>
      </section>

      <section className="sticky top-0 z-10 bg-black/90 backdrop-blur-sm py-4 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {colorCategories.map((color) => (
              <button
                key={color}
                onClick={() => setActiveFilter(color)}
                className={`px-4 py-2 rounded-full capitalize transition-all duration-200 ${
                  activeFilter === color
                    ? `${getColorClass(color)} text-white font-bold`
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {color === "all" ? "All Colors" : color}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredImages.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold">No images found</h3>
              <p className="text-gray-400 mt-2">
                Try selecting a different color
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((item, index) => (
                <div
                  key={`img-${index}`}
                  className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20"
                >
                  <div className="aspect-[4/5] relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent ${
                        colorMap[item.color]
                      } opacity-20`}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <div className="flex items-center">
                      <span
                        className={`inline-block w-3 h-3 rounded-full mr-2 ${
                          colorMap[item.color]
                        }`}
                      />
                      <span className="text-sm font-medium capitalize">
                        {item.color}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mt-1">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Inspiration;
