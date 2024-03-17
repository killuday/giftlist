import {SelectValue, SelectTrigger, SelectItem, SelectContent} from "../ui/select"
import AsyncSelect from "react-select"
import {Input} from "../ui/input.tsx"
import {Button} from "../ui/button"
import {countries, currencyData, giftData} from "../../assets/staticData/staticData.ts";
import {addGiftDetailsData, getCurrentStep, prevStep} from "../../features/step/formSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {Controller, useForm} from "react-hook-form";

export function StepTwo() {
    const dispatch = useDispatch();
    const step = useSelector(getCurrentStep);
    const {
        occasion,
        giftType,
        spendAmount,
        country,
        currency
    } = useSelector((state) => state.form);


    const {register, control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {occasion, giftType, spendAmount, country,currency},
    });

    function onSubmit(data) {
        dispatch(addGiftDetailsData(data));
    }

    console.log(country)

    function handlePrev(e) {
        e.preventDefault();
        dispatch(prevStep());
    }


    return (


        <form className="max-w-lg mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[36px] font-semibold my-4">Help us find the right gift!</h1>
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
                    defaultValue={country}
                    rules={{required: 'Gift type is required'}}
                    render={({field: {onChange, value, name, ref}}) => (

                        <AsyncSelect
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'grey' : '#CAD3DD',
                                    height:'43px',
                                }),
                            }}
                            className='font-normal customSelectBox text-[15px] text-left min-h-12'
                            options={giftData}
                            onChange={(selectedOption) => onChange(selectedOption?.value)}
                            value={giftData.find(option => option.label === value)} // Set the selected option

                        />
                    )}
                />
            </div>
            <div className="mb-4">
                <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="spendAmount">
                    What’s the maximum you’re willing to spend?
                </label>
                <div className='flex items-center gap-x-4'>
                    <div className='w-[20%]'>
                        <Input className="w-full text-center placeholder:text-[#818694] text-black" id="spendAmount" placeholder="Currency"
                               type="text" {...register('currency', {
                                required: true,
                            }
                        )} />
                    </div>
                    <div className='w-[20%]'>
                        <Input className="w-full text-center placeholder:text-[#818694] text-black" id="spendAmount" placeholder="50"
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
                {errors.spendAmount && <p className="text-red-500 text-left pt-2 text-xs">Please select amount</p>}
            </div>
            <div className="mb-4">
                <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="country">
                    What country should we return the results for?
                </label>
                <Controller
                    name="country"
                    control={control}
                    defaultValue=""
                    rules={{required: 'Country is required'}}
                    render={({field: {onChange, value, name, ref}}) => (

                        <AsyncSelect
                            styles={{
                                control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderColor: state.isFocused ? 'grey' : '#CAD3DD',
                                    height:'43px',
                                }),
                            }}
                            className='font-normal customSelectBox text-[15px] text-left min-h-12'
                            options={countries}
                            onChange={(selectedOption) => onChange(selectedOption?.value)}
                            value={countries.find(option => option.label === value)} // Set the selected option

                        />
                    )}
                />

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
            {errors && <p className="text-red-500 text-center py-4 text-xs">You need to answer all questions before
                continuing.</p>}
            <div className="mt-4 text-center">
                <p className='text-base text-[#5E6577]'>Step {step} / 2</p>
            </div>
        </form>
    )

    // onSubmit function to handle form submission

}
