
export default function Loading() {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center bg-white px-4 text-center">
            <img className="mb-4 h-[140px] w-[140px] " src={'/images/loading.svg'}  alt={'loading'}/>
            <h1 className="text-2xl tex-[#101A34] font-semibold">Generating Gift Ideas...</h1>
            <p className="mt-2 text-lg text-[#101A34]">
                Hang tight. Our AI-Powered Genie is generating gift ideas. This can take about 5-10 seconds.
            </p>
        </div>
    )
}

