"use client";
import React, { useState, useRef, useEffect } from "react";
//import Image from "next/image";
import back from "../images/back.jpg";
import back1 from "../images/back1.jpg";
import back2 from "../images/back2.jpg";

const Build = () => {
  const [selectedImage, setSelectedImage] = useState(back);
  const [text, setText] = useState("");
  const [color, setColor] = useState("#ffffff");
  const [font, setFont] = useState("Arial");
  const [fontSize, setFontSize] = useState("16");
  const [dayTime, setDayTime] = useState(true);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  const images = [back, back1, back2];

  const handleImageSelect = (image: string) => {
    setSelectedImage(image);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setUploadedImage(objectUrl);
      setSelectedImage(objectUrl);
    }
  };

  const getImageFilter = () => {
    return dayTime
      ? "brightness(1) contrast(1)"
      : "brightness(0.4) contrast(1.2)";
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    if (canvas && ctx) {
      const image = document.createElement("img") as HTMLImageElement;
      image.src = selectedImage;
      image.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.filter = dayTime
          ? "brightness(1) contrast(1)"
          : "brightness(0.4) contrast(1.2)";

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px ${font}`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.shadowColor = color;
        ctx.shadowBlur = 10;

        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
      };
    }
  };

  useEffect(() => {
    drawCanvas();
  }, [selectedImage, text, font, fontSize, color, dayTime]);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = "neon-sign.png";
      link.click();
    }
  };

  return (
    <div>
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Build Your Own</h1>
          <p className="text-xl text-gray-300 mt-4">
            Design your perfect LED neon sign
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-8">Sign Builder</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Preview Section */}
              <div className="flex flex-col gap-4">
                <div className="relative h-64 w-full">
                  <img
                    src={selectedImage}
                    alt="Neon sign preview"
                    className="rounded-lg shadow-lg object-cover"
                    style={{
                      filter: getImageFilter(),
                    }}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center text-center p-4"
                    style={{
                      fontFamily: font,
                      fontSize: `${fontSize}px`,
                      color: color,
                      textShadow: `0 0 5px ${color}, 0 0 10px ${color}, 0 0 15px ${color}, 0 0 20px ${color}, 0 0 30px ${color}, 0 0 40px ${color}, 0 0 50px ${color}`,
                    }}
                  >
                    <span>{text}</span>
                  </div>
                </div>

                {/* Background Selection */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Backgrounds</h3>
                  <div className="flex gap-4">
                    {images.map((image, index) => (
                      <div
                        key={index}
                        onClick={() => handleImageSelect(image)}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedImage === image
                            ? "ring-4 ring-blue-500 scale-105"
                            : "hover:scale-105"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`Background ${index + 1}`}
                          width={100}
                          height={100}
                          className="rounded-lg shadow-lg object-cover h-24 w-24"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Custom Background Upload */}
                <div>
                  <label className="block mb-2">
                    Upload your own background:
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="w-full p-2 border border-gray-700 rounded bg-black/50"
                  />
                </div>
              </div>

              {/* Controls Section */}
              <div className="space-y-6">
                {/* Text Input */}
                <div>
                  <label htmlFor="textInput" className="block mb-2">
                    Your Text
                  </label>
                  <textarea
                    id="textInput"
                    rows={3}
                    placeholder="Enter your text here"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full p-3 border border-gray-700 rounded bg-black/50 text-white"
                  />
                </div>

                {/* Color Selection */}
                <div>
                  <label className="block mb-2">Neon Color</label>
                  <div className="flex gap-2 flex-wrap">
                    {[
                      "#ffffff",
                      "#ff007f",
                      "#00ffff",
                      "#00ff00",
                      "#ffff00",
                      "#ff6600",
                      "#ff0000",
                    ].map((c) => (
                      <div
                        key={c}
                        onClick={() => setColor(c)}
                        className={`w-8 h-8 cursor-pointer rounded-full transition-all ${
                          color === c
                            ? "ring-2 ring-white scale-110"
                            : "hover:scale-110"
                        }`}
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                {/* Font Selection */}
                <div>
                  <label htmlFor="fontSelect" className="block mb-2">
                    Font Style
                  </label>
                  <select
                    id="fontSelect"
                    value={font}
                    onChange={(e) => setFont(e.target.value)}
                    className="w-full p-3 border border-gray-700 rounded bg-black/50 text-white"
                  >
                    <option value="Arial">Arial</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Times New Roman">Times New Roman</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Lora">Lora</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Poppins">Poppins</option>
                    <option value="Raleway">Raleway</option>
                    <option value="Merriweather">Merriweather</option>
                    <option value="Playfair Display">Playfair Display</option>
                    <option value="Oswald">Oswald</option>
                    <option value="Ubuntu">Ubuntu</option>
                    <option value="Lato">Lato</option>
                    <option value="Bebas Neue">Bebas Neue</option>
                  </select>
                </div>

                {/* Font Size */}
                <div>
                  <label htmlFor="fontSize" className="block mb-2">
                    Font Size
                  </label>
                  <select
                    id="fontSize"
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className="w-full p-3 border border-gray-700 rounded bg-black/50 text-white"
                  >
                    <option value="36">36px</option>
                    <option value="42">42px</option>
                    <option value="48">48px</option>
                    <option value="56">56px</option>
                    <option value="62">62px</option>
                    <option value="68">68px</option>
                    <option value="76">76px</option>
                  </select>
                </div>

                {/* Day/Night Toggle */}
                <div className="flex items-center gap-4">
                  <label className="block">Lighting:</label>
                  <button
                    onClick={() => setDayTime(!dayTime)}
                    className={`px-4 py-2 rounded-full transition-colors ${
                      dayTime ? "bg-blue-500" : "bg-purple-500"
                    }`}
                  >
                    {dayTime ? "Day Mode" : "Night Mode"}
                  </button>
                </div>

                {/* Download Button */}
                <button
                  onClick={downloadImage}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 rounded-lg font-bold transition-colors"
                >
                  Download Your Neon Sign
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hidden Canvas for Download */}
      <canvas
        ref={canvasRef}
        width={1200}
        height={800}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Build;
