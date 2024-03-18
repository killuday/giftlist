import Genie from "../Genie.tsx";
import Ratings from "./Ratings.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
function Products() {
    return (
        <div>
            <Genie/>

            <section className="max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto">
                <hr className='text-[#E8ECF1] mb-20 mx-8'/>
                {...Array(3).fill(0).map((_, i) => (
                    <div key={i} className="container  pb-24  mx-auto">
                        <div className='flex items-center pb-4 justify-between'>
                            <h2 className='text-[#101A34]  font-semibold text-2xl'>
                                1. Beauty gift basket
                            </h2>
                            <button className='text-lightBlue text-lg flex items-center rounded-lg'>
                                See more
                                <img className='w-4 ml-2' src='/images/arrow%20right-outline-18.svg' alt='arrow'/>
                            </button>
                        </div>

                        <div className="flex flex-wrap -m-4">
                            <Swiper
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                navigation={true} modules={[Navigation]}

                                breakpoints={{
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        spaceBetween: 10,
                                        slidesPerView: 3,
                                    },
                                    1280: {
                                        slidesPerGroup: 2,
                                        slidesPerView: 4,
                                    },
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                            >
                                {Array(8).fill(0).map((_, i) => (
                                    <SwiperSlide key={i}>
                                        <div className=" p-4 w-full">
                                            <div className='border-[#E8ECF1] border-solid border-[1px] rounded-[8px]'>
                                                <div className='relative'>
                                                    <a className="block relative h-48 rounded overflow-hidden">
                                                        <img alt="ecommerce"
                                                             className="object-cover rounded-[8px] object-center w-full h-full block"
                                                             src="/images/1.png"/>
                                                    </a>
                                                    <img className='h-[33px] absolute right-2 top-2 w-[33px]'
                                                         src={'/images/bookmark.svg'} alt='bookmark'/>
                                                    <p className='bg-[#FF574D] px-4 py-2 font-semibold text-xs absolute top-3 rounded-lg left-3  text-white'>Sale</p>
                                                </div>
                                                <div className="mt-4 bg-[#FAFBFD] border-t-[1px] border-[#E8ECF1]">
                                                    <div className='p-3 '>
                                                        <h3 className="text-[#0F7B9B] text-xs font-medium my-2">1000 and
                                                            1
                                                            flowers</h3>
                                                        <h2 className="text-[#101A34] text-base font-semibold">Beautiful
                                                            bouquet</h2>
                                                        <Ratings />
                                                        <div className='flex items-center my-3'>
                                                            <h5 className='border-[#E8ECF1] priceDiscount relative font-semibold rounded-[4px] px-2 py-1  inline-block bg-[#F5F7FA] text-sm text-[#101A34] border-1px border-solid'>
                                                                <span className='text-[#A8ACB3]'>$</span>530
                                                            </h5>
                                                            <h5 className='px-2 py-1  text-sm text-[#FF574D] font-bold inline-block'>$250</h5>
                                                        </div>
                                                        <p className="mt-1 text-xs text-[#101A34]">Typical range:
                                                            $100-$600</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                ))}
                                {/*<div className="swiper-button-next"><img src='/images/right.svg'*/}
                                {/*                                         alt='arrow'*/}
                                {/*                                         className='h-[46px] w-[46px]'*/}
                                {/*/></div>*/}
                                {/*<div className="swiper-button-prev"><img src='/images/left.svg'*/}
                                {/*                                         alt='arrow'*/}
                                {/*                                         className='h-[46px] w-[46px]'*/}
                                {/*/></div>*/}
                            </Swiper>
                        </div>
                    </div>
                ))}

            </section>
        </div>
    );
}

export default Products;