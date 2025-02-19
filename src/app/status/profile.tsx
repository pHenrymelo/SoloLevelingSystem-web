export const Profile = () => {
    return (
        <div className=" w-8/12 mx-auto px-4 flex justify-between py-8 ">
                    <div className=" flex flex-col text-center justify-center">
                        <span className=" text-5xl drop-shadow-sm font-bold">1</span>
                        <p className=" font-semibold tracking-wider text-2xl">LEVEL</p>
                    </div>
                    <div className=" flex flex-col text-base gap-2 ">
                        <span>
                            NAME: <span className=" font-bold text-lg drop-shadow-sm">Pedro Melo</span>
                        </span>
                        <span>
                            JOB: <span className=" font-bold text-lg drop-shadow-sm">Shadow Monarch</span>
                        </span>
                        <span>
                            TITLE: <span className=" font-bold text-lg drop-shadow-sm">The One who left it all behind</span> 
                        </span>
                    </div>
            </div>
    )
}