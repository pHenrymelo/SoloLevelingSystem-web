export const Profile = () => {
    return (
        <div className=" w-8/12 mx-auto px-4 justify-center items-center flex py-8 ">
                    <div className=" w-1/3 flex flex-col text-center justify-center ">
                        <span className=" text-6xl drop-shadow-sm font-bold">1</span>
                        <p className=" font-thin tracking-wider text-xl">LEVEL</p>
                    </div>
                    <div className=" flex flex-col text-base gap-2 ">
                        <span className=" grid grid-cols-6">
                            <span className=" ml-auto mr-2 my-auto">NAME: </span> 
                            <span className=" font-bold text-lg drop-shadow-sm col-span-5">Pedro Melo</span>
                        </span> 
                        <span className=" grid grid-cols-6">
                            <span className=" ml-auto mr-2 my-auto">JOB: </span>
                            <span className=" font-bold text-lg drop-shadow-sm col-span-5">Shadow Monarch</span>
                        </span>
                        <span className=" grid grid-cols-6">
                            <span className=" ml-auto mr-2 my-auto">TITLE: </span> 
                            <span className=" font-bold text-lg drop-shadow-sm col-span-5">The One who left it all behind</span> 
                        </span>
                    </div>
            </div>
    )
}