import Image from "next/image";
import heroImage from "../assets/images/hero-image.webp";
import lineDecore from "../assets/icons/line-decore.svg";
import heroDecoreLayer from "../assets/icons/hero-decore-layer.svg";

export default function Hero() {
    return (
        <div className="relative w-full">
            {/* hero content */}
            <div className="max-w-[1200px] mx-auto mt-[58px] flex">
                {/* heading  */}
                <div className="flex flex-col justify-center gap-10">
                    <p className="uppercase text-[#DF6951] font-bold text-xl">Best Destinations around the world</p>
                    <div className="relative">
                        <h1 className="relative font-bold text-[84px]/[89px] tracking-tight text-[#181E4B] z-40">
                            Travel, enjoy
                            and live a new
                            and full life</h1>
                        <Image
                            className="absolute top-0 right-0 mt-20 z-10"
                            src={lineDecore}
                            alt="line decore"
                            loading="eager"
                        />
                    </div>

                    <p className="text-base/relaxed text-[#5E6282]">
                        Built Wicket longer admire do barton vanity itself do in it. <br />
                        Preferred to sportsmen it engrossesd listening. Park gate <br />
                        sell they west hard for the.
                    </p>

                    {/* CTA */}
                    <div className="flex gap-10">
                        <button className="w-[170px] h-[60px] rounded-lg bg-yellow-500 text-white text-lg shadow-xl cursor-pointer">
                            Find out more
                        </button>

                        <button className="flex items-center gap-3 cursor-pointer">
                            <div className="relative w-[52px] h-[52px] rounded-full bg-[#DF6951] shadow shadow-amber-900">
                                <div className="absolute left-1/2 top-1/2 -translate-1/2
                                    w-0
                                    h-0
                                    border-l-[10px]
                                    border-r-[10px]
                                    border-b-[15px]
                                    border-l-transparent
                                    border-r-transparent
                                    border-b-white
                                    rotate-90">
                                </div>
                            </div>
                            Play Demo
                        </button>
                    </div>
                </div>

                {/* image  */}
                <div className="relative z-2">
                    <Image src={heroImage} alt="hero image" loading="eager" />
                </div>
            </div>

            {/* decore */}
            <div className="absolute left-[-264px] top-[-175px] w-[478px] h-[478px] bg-[#D5AEE4] opacity-[0.3] blur-[75px]"></div>

            <div className="absolute top-[-150px] right-0 z-1">
                <Image src={heroDecoreLayer} alt="hero decore layer" />
            </div>
        </div >
    )
}