import AsyncSelect from "react-select"
import {Input} from "../ui/input.tsx"
import {Button} from "../ui/button"
import {countries, giftData} from "../../assets/staticData/staticData.ts";
import {addGiftDetailsData, getCurrentStep, prevStep} from "../../features/step/formSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import Loading from "../loader/Loading.tsx";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../app/store.ts";
interface formData {
    occasion: string;
    giftType: number;
    spendAmount: number;
    country: number;
    currency: string;
}
export function StepTwo() {
    const dispatch = useDispatch();
    const step = useSelector(getCurrentStep);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const {
        occasion,
        giftType,
        spendAmount,
        country,
        currency
    } = useSelector((state: RootState) => state.form);
    const {register, control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {occasion, giftType, spendAmount, country,currency},
    });

    function onSubmit(data:formData) {
        setIsLoading(true);
        dispatch(addGiftDetailsData(data));
    }
    useEffect(() => {
        if (isLoading) {
            setTimeout(() => {
                setIsLoading(false);
                navigate('/products');
            }, 2000);
        }
    }, [isLoading, navigate]);

    function handlePrev(e:any) {
        e.preventDefault();
        dispatch(prevStep());
    }

    return (
        <>
            {isLoading ? (
                <Loading />
            ): (
                <div className='max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg text-center'>
                    <div className='flex items-center justify-center'>
                        <img src='/images/gift.png' className='h-[100px] w-[100px]' alt='gift'/>
                    </div>
                <form className="max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="sm:text-[36px] text-[20px] font-semibold my-4">Help us find the right gift!</h1>
                    <div className='mb-4'>
                        <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="occasion">
                            What is the occasion?
                        </label>
                        <Input
                            className={`w-full placeholder:text-[#818694] text-black ${errors.occasion ? "border-red-500 focus-visible:ring-white placeholder:text-red-500" : ""}`}
                            id="occasion" placeholder="What is the occasion"
                            type="text" {...register('occasion', {required: true})} />
                        {errors.occasion && <p className="text-red-500 text-left pt-2 text-xs">This cannot be empty</p>}
                    </div>
                    <div className="mb-4 ">
                        <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="giftType">
                            What type of gift would you like?
                        </label>
                        <Controller
                            name="giftType"
                            control={control}
                            defaultValue={giftType}
                            rules={{required: 'Gift type is required'}}
                            render={({field: {onChange, value}}) => (

                                <AsyncSelect
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: errors.giftType ? 'red' : state.isFocused ? 'grey' : '#CAD3DD',
                                            height: '43px',
                                            borderRadius: '7px',


                                        }),

                                    }}
                                    placeholder={'Select a gift type'}
                                    className='font-normal customSelectBox text-[15px] text-left min-h-12'
                                    options={giftData}
                                    onChange={(selectedOption) => onChange(selectedOption?.value)}
                                    value={giftData.find(option => option.value === value)} // Set the selected option

                                />
                            )}
                        />
                        {errors.giftType && <p className="text-red-500 text-left pt-2 text-xs">Please select gift type</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="spendAmount">
                            What’s the maximum you’re willing to spend?
                        </label>
                        <div className='flex items-center gap-x-4'>
                            <div className='w-[20%]'>
                                <Input className={`${errors.currency ? "border-red-500 placeholder:text-red-500 ":"placeholder:text-[#818694]"} w-full text-center  text-black`}
                                       id="spendAmount"
                                       placeholder="Currency..."
                                       type="text" {...register('currency', {
                                        required: true,
                                    }
                                )} />
                            </div>
                            <div className='w-[20%]'>
                                <Input className={`${errors.spendAmount ? "border-red-500 placeholder:text-red-500":"placeholder:text-[#818694]" } w-full text-center text-black`}
                                       id="spendAmount"
                                       placeholder="Amount..."
                                       type="number" {...register('spendAmount', {
                                        required: true,
                                        min: 1,
                                        max: 100,
                                        valueAsNumber: true,
                                        pattern: /^[0-9]+$/i,
                                        validate: (value) => value > 0 || 'Please enter a valid number'
                                    }
                                )} />
                            </div>
                        </div>
                        {errors.spendAmount &&
                            <p className="text-red-500 text-left pt-2 text-xs">Please select amount</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="country">
                            What country should we return the results for?
                        </label>
                        <Controller
                            name="country"
                            control={control}
                            defaultValue={country}
                            rules={{required: 'Country is required'}}
                            render={({field: {onChange, value}}) => (
                                <AsyncSelect
                                    styles={{
                                        control: (baseStyles, state) => ({
                                            ...baseStyles,
                                            borderColor: errors.country ? 'red' : state.isFocused ? 'grey' : '#CAD3DD',
                                            height: '43px',
                                            borderRadius: '7px',

                                        }),
                                    }}
                                    placeholder={'Select a country'}
                                    className='font-normal customSelectBox text-[15px] text-left min-h-12'
                                    options={countries}
                                    onChange={(selectedOption) => onChange(selectedOption?.value)}
                                    value={countries.find(option => option.value === value)}

                                />
                            )}
                        />
                        {errors.country && <p className="text-red-500 text-left pt-2 text-xs">Please select country</p>}
                    </div>
                    <div className="flex justify-between items-center">
                        <Button type='submit' onClick={handlePrev} className="w-full mr-2" variant="outline">
                            Back
                        </Button>
                        <Button variant='secondary' type='submit'
                                className="w-full ml-2 justify-center bg-gradient-to-r from-[#50BCD9] to-[#F14DFF]">
                            <img src='/images/shine.svg' className='h-[22px] w-[22px]' alt='icon'/> Generate Gift Ideas
                        </Button>
                    </div>
                    {Object.keys(errors).length > 0 &&
                        <p className="text-red-500 text-center py-4 text-xs">You need to answer all questions before
                            continuing.</p>}
                    <div className="mt-4 text-center">
                        <p className='text-base text-[#5E6577]'>Step {step} / 2</p>
                    </div>
                </form>
                </div>
            )}
        </>
    )
}
