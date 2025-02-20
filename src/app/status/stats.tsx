import { Cross, FlaskConical, Zap } from 'lucide-react'

export const Stats = () => {
    return(
        <div className="w-10/12 mx-auto border border-white py-8 px-4 rounded-xs shadow-activated bg-blue-darker grid grid-cols-5 gap-4">
            <div className=" flex col-span-2 ">
                <div className=' w-2/12 text-center'>
                    <span> <Cross className=' mx-auto size-7 drop-shadow-md'/> </span>
                    <span className=' font-semibold text-lg drop-shadow-sm '>HP</span>
                </div>
                <div className=' w-10/12 flex flex-col justify-center'>
                    <span className=" flex w-full border-2 h-3 rounded-full px-1 drop-shadow-sm">
                        <span className=' w-[100%] border border-white mx-auto my-auto drop-shadow-sm ' />
                    </span>
                    <span className=' text-end text-sm'>  <span className='text-lg drop-shadow-sm '>100</span>/100</span>
                </div>
            </div>
            <div className='flex col-span-2'>
                <div className=' w-2/12 text-center'>
                    <span> <FlaskConical  className=' mx-auto size-7 drop-shadow-md '/> </span>
                    <span className='font-semibold text-lg drop-shadow-sm'>MP</span>
                </div>
                <div className=' w-10/12 flex flex-col justify-center'>
                    <span className=" flex w-full border-2 h-3 rounded-full px-1 drop-shadow-sm">
                        <span className=' w-[100%] border border-white mx-auto my-auto drop-shadow-sm' />
                    </span>
                    <span className=' text-end text-sm'><span className='text-lg drop-shadow-sm '>10</span>/10</span>
                </div>
            </div>
            <div className=' flex flex-col items-center text-center'>
                <span> <Zap className=' size-8 drop-shadow-md'/> </span>
                <span className='font-semibold text-base drop-shadow-sm'>FATIGUE: 0</span> 
            </div>
            

                

            
        </div>
    )
}