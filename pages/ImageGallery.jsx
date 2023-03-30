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
// import eleven from "../public/11.jpg";
// import twelve from "../public/12.jpg";
// import thirteen from "../public/13.jpg";
// import fourteen from "../public/14.jpg";
// import fifteen from "../public/15.jpg";
// import sixteen from "../public/16.jpg";
// import seventeen from "../public/17.jpg";
// import eighteen from "../public/18.jpg";
// import nineteen from "../public/19.jpg";
// import twenty from "../public/20.jpg";
// import twentyOne from "../public/21.jpg";

const ImageGallery = () => {
  return (
    <section>
      <div className="flex  flex-wrap flex-1 justify-center items-center gap-10">
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
