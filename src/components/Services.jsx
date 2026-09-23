import calculateWeather from "../assets/icons/calculate-weather.svg";
import bestFlights from "../assets/icons/best-flights.svg";
import localEvents from "../assets/icons/local-event.svg";
import customization from "../assets/icons/customization.svg";
import Image from "next/image";
import servicesLayer from "../assets/icons/services-layer.svg";

const services = [
    {
        id: 1,
        label: "calculated weather",
        icon: calculateWeather,
    },
    {
        id: 2,
        label: "best flights",
        icon: bestFlights,
    },
    {
        id: 3,
        label: "local events",
        icon: localEvents,
    },
    {
        id: 4,
        label: "customization",
        icon: customization,
    }
]

export default function Services() {
    return (
        <div className="relative mt-30">
            <div className="max-w-[1228px] mx-auto flex flex-col items-center">
                <h1 className="capitalize font-bold text-[#14183E] text-[50px]">We offer best services</h1>

                <div className="w-full mt-20 flex justify-between">
                    {services.map(item => (
                        <div
                            key={item.id}
                            className="flex flex-col items-center justify-center gap-5 w-[267px] h-[314px] rounded-4xl 
                            transition delay-150 duration-150 ease-in-out hover:shadow-2xl hover:scale-110"
                        >
                            <Image src={item.icon} alt={item.label} />
                            <p className="capitalize">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* layer decore */}
            <div className="absolute top-0 right-0">
                <Image src={servicesLayer} alt="services layer" />
            </div>
        </div>
    )
}