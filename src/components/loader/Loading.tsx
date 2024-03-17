
export default function Component() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
            <LoaderIcon className="mb-4 h-20 w-20 text-[#0f172a]" />
            <h1 className="text-2xl font-semibold">Generating Gift Ideas...</h1>
            <p className="mt-2 text-sm text-gray-600">
                Hang tight. Our AI-Powered Genie is generating gift ideas. This can take about 5-10 seconds.
            </p>
        </div>
    )
}

function LoaderIcon() {
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
            <line x1="12" x2="12" y1="2" y2="6" />
            <line x1="12" x2="12" y1="18" y2="22" />
            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
            <line x1="2" x2="6" y1="12" y2="12" />
            <line x1="18" x2="22" y1="12" y2="12" />
            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
        </svg>
    )
}