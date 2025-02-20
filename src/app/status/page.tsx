import { Atributes } from "./atributes"
import { Profile } from "./profile"
import { Stats } from "./stats"

export default function Status() {
    return (
        <div className=" min-h-dvh flex flex-col justify-center gap-16 fmd:flex-row ">

            <div className=" w-10/12 mx-auto border border-white py-12 px-4 rounded-xs shadow-activated bg-blue-darker flex flex-col gap-4">
                <div className=" w-1/2 flex text-center mx-auto border border-white px-8 py-8 rounded-xs shadow-activated bg-blue-darker">
                <h1 className=" text-5xl drop-shadow-sm font-bold tracking-widest mx-auto">STATUS</h1>
                </div>

                <Profile />
                <Stats />
                <Atributes />
                
            </div>
        </div>
    )
}