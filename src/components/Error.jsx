import {useRouteError} from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div id='error-page' className='w-full h-screen flex flex-col justify-center items-center gap-10 '>
        
            <div class="w-full gap-x-2 flex justify-center items-center">
            <div
                class="w-20 bg-[#d991c2] animate-pulse h-20 rounded-full animate-bounce"
            ></div>
            <div
                class="w-20 animate-pulse h-20 bg-[#9869b8] rounded-full animate-bounce"
            ></div>
            <div
                class="w-20 h-20 animate-pulse bg-[#6756cc] rounded-full animate-bounce"
            ></div>
        </div>


            <div id='desc-box' className='flex flex-col justify-center items-center gap-2'>
                <h1 className='font-bold text-5xl'>Error {err.status}</h1>
                <h3 className='font-semibold text-2xl'>{err.statusText}</h3>
            </div>
        </div>
    )
}

export default Error;