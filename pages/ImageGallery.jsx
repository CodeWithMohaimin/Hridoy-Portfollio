import React from "react";
import Image from "next/image";

import one from "../public/1.jpg";
import two from "../public/2.jpg";
import three from "../public/3.jpg";
import four from "../public/4.jpg";
import five from "../public/5.jpg";
import six from "../public/6.jpg";
import seven from "../public/7.jpg";
import eight from "../public/8.jpg";
import nine from "../public/9.jpg";
import ten from "../public/10.jpg";
import eleven from "../public/hack1.png";
import twelve from "../public/hack2.png";
import thirteen from "../public/hack3.png";
import fourteen from "../public/hack4.png";

const ImageGallery = () => {
  return (
    <section>
      <div className="flex  flex-wrap flex-1 justify-center items-center gap-10">
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={eleven} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={twelve} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={thirteen} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={fourteen} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={one} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={two} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={three} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={four} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={five} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={six} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={seven} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={eight} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={nine} />
        </div>
        <div className="max-w-lg  ">
          <Image className="rounded-2xl" alt="gallery" src={ten} />
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
