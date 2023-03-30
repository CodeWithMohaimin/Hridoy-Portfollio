import Head from "next/head";
import Image from "next/image";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import raj from "../public/dev-ed-wave.png";
import galley from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

import { useState } from "react";
import { AiFillCopyrightCircle } from "react-icons/ai";
import ImageGallery from "./ImageGallery";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>RajPaul.com</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4 dark:bg-gray-900 dark:text-white">
        <section>
          <nav className="flex items-center justify-between max-w-7xl m-auto mb-5 md:mb-12">
            <h1 className="font-semibold text-xl text-left py-4 cursor-pointer sm:text-3xl">
              S R Raj Paul (RJ)
            </h1>

            <ul className="flex items-center justify-between ">
              <li className="cursor-pointer text-3xl">
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  className="border-none px-4 md:px-8 py-2 m-4 border-black text-black font-semibold text-1xl rounded-full bg-gradient-to-r from-cyan-300 to-cyan-500"
                  href="https://www.youtube.com/@technicalprorj8223"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center ">
            <h1 className="text-cyan-600 font-semibold text-3xl py-2 md:text-7xl md:mt-15">
              S R Raj Paul (RJ)
            </h1>
            <h2 className="font-semibold text-base md:text-xl pb-4">
              Lead Generation Specialist, YouTuber, Singer
            </h2>
            <p className="text-gray-500 font-normal text-xs md:text-xl max-w-5xl mx-auto">
              My name is S R Raj Paul (RJ), and I am a multi-talented individual
              with expertise in Lead Generation, YouTube content creation, and
              singing. As a Lead Generation Specialist, I excel at accurately
              and efficiently inputting data, with excellent typing skills and
              strong attention to detail. As a passionate YouTuber, I create
              diverse content and have strong video editing skills. As a
              talented singer, I have a well-trained voice, a powerful stage
              presence, and the ability to connect emotionally with my audience.
              Whether working on Lead Generation, filming a video, or performing
              on stage, I always strive to bring my best to everything I do.
            </p>
          </div>

          <div className="flex items-center justify-center text-4xl space-x-8 mt-4 md:mt-8">
            <a
              title="Technical Pro RJ"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.youtube.com/@technicalprorj8223/videos"
            >
              <AiFillYoutube />
            </a>

            <a
              title="S R Raj Paul (RJ)"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.facebook.com/raj.cakrabatty"
            >
              {" "}
              <AiFillFacebook />
            </a>
            <a
              title="Raj Official Cover"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.youtube.com/@rajofficialcover820/videos"
            >
              {" "}
              <AiFillYoutube />
            </a>
          </div>

          <div className="ring-4 ring-teal-400 overflow-hidden relative bg-gradient-to-t from-white to-teal-500 rounded-full w-80 h-80 mx-auto mt-4 md:mt-12 md:w-96 md:h-96 ">
            <Image layout="fill" objectFit="cover" src={raj} alt="raj" />
          </div>

          <div className="max-w-4xl mx-auto px-2 my-10 md:my-20 ">
            <h1 className="font-semibold text-4xl text-left lg:text-center py-4 border-b-2">
              Services I Offer
            </h1>
            <p className="text-gray-500 font-normal text-sm md:text-xl text-left py-2 lg:text-center">
              I am a multi-talented individual with expertise in{" "}
              <span className="text-teal-500 font-semibold">
                Lead Generation, YouTube content creation, and singing. As a
                Data Entry Specialist
              </span>{" "}
              and a passionate YouTuber, I create diverse content and have
              strong video editing skills at
              <span className="text-teal-500 font-semibold">
                {" "}
                S R Raj Paul (RJ) YouTube Channel.
              </span>{" "}
              I am the (CEO) of Technical Pro RJ YouTube Channel. And also a
              Good Human ever.
            </p>
          </div>

          <div className="lg:flex items-center justify-between max-w-7xl m-auto mb-5 md:mb-12 gap-4">
            <div className="hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 px-4 shadow-xl m-1 rounded-lg text-center py-14 md:mt-12 dark:shadow-blue-500/50 dark:shadow-2xl hover:dark:shadow-blue-300/100 duration-150">
              <Image height={130} width={130} src={galley} alt="Gallery" />
              <a
                rel="noreferrer"
                target={"_blank"}
                href="https://www.youtube.com/@rajofficialcover820/videos"
                className="font-semibold text-2xl block py-4 text-teal-500"
              >
                YouTuber{" "}
              </a>
              <p className="text-gray-500 font-normal text-sm md:text-base max-w-md mx-auto">
                My name is S R Raj Paul, and I am a content creator on YouTube.
                I create a variety of content, including vlogs, tutorials,
                reviews, and more, and I am dedicated to building a loyal
                following of subscribers.
              </p>
            </div>
            {/* another card */}
            <div className="hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 px-4 shadow-xl m-1 rounded-lg text-center py-14 md:mt-12 dark:shadow-blue-500/50 dark:shadow-2xl hover:dark:shadow-blue-300/100 duration-150">
              <Image height={130} width={130} src={code} alt="Gallery" />
              <h1 className="font-semibold text-2xl py-4">
                Next Level Code Skill
              </h1>
              <p className="text-gray-500 font-normal text-sm md:text-base max-w-md mx-auto">
                I am S R Raj Paul (RJ), and I specialize in Lead Generation. My
                typing and Lead Generation skills are so excellent, and I am
                experienced in accurately and efficiently inputting data into
                computer systems or databases.
              </p>
            </div>
            {/* another card */}
            <div className="hover:scale-105 hover:shadow-2xl hover:shadow-blue-200 px-4 shadow-xl m-1 rounded-lg text-center py-14 md:mt-12 dark:shadow-blue-500/50 dark:shadow-2xl hover:dark:shadow-blue-300/100 duration-150">
              <Image height={130} width={130} src={consulting} alt="Gallery" />
              <h1 className="font-semibold text-2xl py-4">Consulting Idea</h1>
              <p className="text-gray-500 font-normal text-sm md:text-base max-w-md mx-auto">
                Hi, I am S R Raj Paul, and I am a singer. I have a well-trained
                voice, which I use to connect emotionally with my audience
                through my music. I have performed live in front of audiences
                and recorded music in a studio.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="max-w-5xl mx-auto my-8 ">
            <h1 className="mt-40 font-semibold text-3xl text-left py-4 lg:text-center">
              YouTube showcase!
            </h1>
            <p className="text-gray-500 font-normal text-base text-left py-2 lg:text-center">
              Welcome to my YouTube video showcase! Here you will find a curated
              collection of my best and most{" "}
              <span className="text-teal-500 font-semibold">
                popular videos, ranging from vlogs to tutorials and everything
                in between.{" "}
              </span>
              I am passionate about creating{" "}
              <span className="text-teal-500 font-semibold">
                content that entertains, informs, and inspires, and{" "}
              </span>
              I always strive to bring my best to{" "}
              <span className="text-teal-500 font-semibold">
                {" "}
                every video I produce.{" "}
              </span>
              My videos are professionally edited with a creative flair that
              showcases my personality and style.
            </p>
          </div>
          <div className=" flex flex-wrap justify-center gap-10 md:gap-5 ">
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/GiDsMkW72hw"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yMMCB29Y9Wk"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZIkjMvAQKLg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                className="max-w-2xl w-full bg-red-300"
                src="https://www.youtube.com/embed/6k4cYYgnDzI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/v1y3IXz9WKY"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Bz-E7jQJZe0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/KWEIG95T8N0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eDy9-LwnyCg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="max-w-[570px] w-full h-[300px] p-2 shadow-2xl hover:shadow-blue-300 duration-150">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/X9td61b_ZSg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-2 my-10 md:my-20 ">
          <h1 className="font-semibold text-4xl text-left lg:text-center py-4 border-b-2">
            My Gallery
          </h1>
          <p className="text-gray-500 font-normal text-base text-left py-2 lg:text-center">
            Welcome to my image gallery showcase! Here you will find a curated
            collection of my best and most beautiful photographs, showcasing my
            unique perspective on the world around us.
          </p>
        </div>

        <ImageGallery />

        <footer className="mt-40">
          <div className="flex items-center justify-center text-4xl space-x-8 m-8">
            <a
              title="Technical Pro RJ"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.youtube.com/@technicalprorj8223/videos"
            >
              {" "}
              <AiFillYoutube />
            </a>
            <a
              title="S R Raj Paul (RJ)"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.facebook.com/raj.cakrabatty"
            >
              {" "}
              <AiFillFacebook />
            </a>
            <a
              title="Raj Official Cover"
              rel="noreferrer"
              target={"_blank"}
              href="https://www.youtube.com/@rajofficialcover820/videos"
            >
              {" "}
              <AiFillYoutube />
            </a>
          </div>
          <p className="text-center text-xl">
            All Right Reserved{" "}
            <AiFillCopyrightCircle className="inline-block text-2xl" /> S R Raj
            Paul (RJ) 2023
          </p>
        </footer>
      </main>
    </div>
  );
}
