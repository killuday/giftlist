

export default function Genie() {
    return (
        <div className='max-w-7xl py-12 px-2 sm:px-6 lg:px-8 mx-auto '>
        <div className=" py-6 bg-white rounded-lg ">
            <h1 className="text-3xl font-semibold bg-gradient-to-r from-[#50BCD9] via-[#F14DFF] to-[#F14DFF] inline-block text-transparent bg-clip-text">Genie: <span className='text-primary'>AI Gift Ideas</span> </h1>
            <div className="mt-4 p-6 bg-white border-[1px] border-[#CAD3DD] flex items-center justify-between border-solid  rounded-md">
                <p className="text-lg truncate pr-2 text-secondary">Recommend birthday gift ideas for my 55 year old mother. She likes pickleball,addddddddddsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss g...</p>
                <img src='/images/AI-Btn.svg' className='h-[32px] w-[32px]' alt='btn' />

            </div>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-sm text-secondary">
                    Not liking these suggestions? Try again with more details or
                    <a className="text-[#50BCD9] pl-1 font-semibold" href="#">
                        get help from Genie
                    </a>
                    .{"\n          "}
                </p>

            </div>
        </div>
        </div>
    )
}

