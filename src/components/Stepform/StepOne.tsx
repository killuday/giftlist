import {Input} from "../ui/input.tsx";
import {RadioGroupItem, RadioGroup} from "../ui/radio-group";
import {Label} from '../ui/label.tsx';
import {Textarea} from "../ui/textarea";
import {Button} from "../ui/button";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {addPersonalInfoData, getCurrentStep, prevStep} from "../../features/step/formSlice.ts";

export function StepOne() {
    const dispatch = useDispatch();
    const step = useSelector(getCurrentStep);
    const {
        buyingFor,
        age,
        gender,
        interests,
    } = useSelector((state) => state.form);

    const {
        register,
        handleSubmit,
        formState: {errors},
        watch
    } = useForm({
        defaultValues: {buyingFor, age, gender, interests},
    });

    function handleNext(data) {
        dispatch(addPersonalInfoData(data));
    }

    const genderdis = watch('gender');


    return (

        <form onSubmit={handleSubmit(handleNext)} className="">
            <h1 className="text-[36px] font-semibold my-4">Tell us about your gift recipient</h1>
            <div className='max-w-lg mx-auto'>
                <div className="mb-4 ">
                    <label className="block text-[15px] font-medium text-left  mb-2" htmlFor="recipient">
                        Who are you buying for?
                    </label>
                    <Input     {...register("buyingFor", {required: true})}
                               className={`w-full ${errors.buyingFor ? "border-red-500 focus-visible:ring-white placeholder:text-red-500" : ""}`}
                               id="buyingFor" placeholder="who are you buying for" type="text"/>
                    {errors.buyingFor && <p className="text-red-500 text-left pt-2 text-xs">This field is required</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-sm text-left  font-medium mb-2" htmlFor="age">
                        How old are they?
                    </label>
                    <Input  {...register("age", {required: true, pattern: /^[0-9]*$/})}
                            className={`w-full ${errors.age ? "border-red-500 focus-visible:ring-white placeholder:text-red-500" : ""}`}
                            id="age" placeholder="Please enter a number" type="number"/>
                    {errors.age && <p className="text-red-500 text-left pt-2 text-xs">Please enter a valid age</p>}
                </div>
                <fieldset className="mb-4">
                    <legend className="block text-sm text-left  font-medium mb-2">They identify as:</legend>
                    <div className="flex items-center space-x-4">


                        <label
                            htmlFor="male"
                            className={` ${genderdis === 'male' ? "border-lightBlue font-semibold" : "border-[#E8ECF1] bg-[#FAFBFD] text-[#5E6577]"} inline-block flex-1 justify-center cont cursor-pointer px-4 py-2 rounded-lg border text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900`}
                        >
                            <input
                                id="male"
                                type="radio"
                                value="male"
                                {...register("gender")}
                                className=""
                            />
                            Male

                            <span className="checkmark"></span>

                        </label>
                        <label
                            htmlFor="female"
                            className={` ${genderdis === 'female' ? "border-lightBlue font-semibold" : "border-[#E8ECF1] bg-[#FAFBFD] text-[#5E6577]"} inline-block flex-1 justify-center cont cursor-pointer px-4 py-2 rounded-lg border text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900`}
                        >
                            <input
                                id="female"
                                type="radio"
                                value="female"
                                {...register("gender")}
                                className=""
                            />

                            Female
                            <span className="checkmark"></span>
                        </label>
                        <label
                            htmlFor="other"
                            className={` ${genderdis === 'other' ? "border-lightBlue font-semibold" : "border-[#E8ECF1] bg-[#FAFBFD] text-[#5E6577]"} inline-block flex-1 justify-center cont cursor-pointer px-4 py-2 rounded-lg border text-sm text-gray-700 hover:border-gray-500 hover:text-gray-900`}

                        >
                            <input
                                id="other"
                                type="radio"
                                value="other"
                                {...register("gender")}
                                className=""
                            />

                            Other
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </fieldset>
                <div className="mb-6">
                    <label className="block text-sm text-left  font-medium mb-2" htmlFor="interests">
                        What do they like to do? Be specific!
                    </label>
                    <Textarea {...register("interests", {required: true})}
                              className={`w-full ${errors.interests ? "border-red-500 focus-visible:ring-white placeholder:text-red-500" : ""}`}
                              id="interests" placeholder="Enter interests and hobbies"/>
                    {errors.interests &&
                        <p className="text-red-500 text-left pt-2 text-xs">This cannot be empty</p>}
                </div>
                <div className="flex justify-between items-center">
                    <Button className="w-full mr-2" variant="outline">
                        Back
                    </Button>

                    <Button type='submit' variant='secondary' className="w-full ml-2">Continue</Button>

                </div>
                <div className="mt-4 text-center">
                    <p>Step {step} / 2</p>
                </div>
            </div>
        </form>
    )
}
