

export default function Genie() {
    return (
        <div className='max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto '>
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
                <button className="bg-purple-500 text-white rounded-full p-2 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50">
                    <CircleEllipsisIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
        </div>
    )
}

function CircleEllipsisIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M17 12h.01" />
            <path d="M12 12h.01" />
            <path d="M7 12h.01" />
        </svg>
    )
}
