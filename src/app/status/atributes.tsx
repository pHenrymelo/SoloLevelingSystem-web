import { Dumbbell, Brain, Eye, Heart, Rabbit } from 'lucide-react'

export const Atributes = () => {
    return(
    <div className="w-10/12 mx-auto border border-white py-8 px-4 rounded-xs shadow-activated bg-blue-darker grid grid-cols-2 gap-4">
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <Dumbbell className=' size-8 '/>
            <span>STR:</span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <Heart className=' size-8 '/>
            <span>VIT:</span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <Rabbit className=' size-8 '/>
            <span>AGI:</span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <Brain className=' size-8 '/>
            <span>INT:</span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <Eye className=' size-8 '/>
            <span>PER:</span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
        <div className='flex gap-4 px-8 items-center text-2xl justify-center'>
            <span className='text-sm'> Ability Poits: </span>
            <span className='drop-shadow-md font-bold tracking-widest '>10</span>
        </div>
    </div>
)}