import { Profile } from "./profile"

export default function Status() {
    return (
        <div className=" min-h-dvh flex flex-col justify-center gap-16 fmd:flex-row ">

            <div className=" w-10/12 mx-auto border border-white py-8 px-4 rounded-xs shadow-activated bg-blue-darker flex flex-col gap-4">
                <div className=" w-fit mx-auto border border-white px-8 py-4 rounded-xs shadow-activated bg-blue-darker">
                <h1 className=" text-7xl drop-shadow-sm font-bold tracking-widest">STATUS</h1>
                </div>

                <Profile />

                <div className=" mx-auto border border-white p-4 rounded-xs shadow-activated bg-blue-darker"> 

                </div>
            </div>
        </div>
    )
}