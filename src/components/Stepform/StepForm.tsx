import {useSelector} from "react-redux";
import {getCurrentStep} from "../../features/step/formSlice.ts";
import {StepOne} from "./StepOne.tsx";
import {StepTwo} from "./StepTwo.tsx";


function StepForm() {
    const step = useSelector(getCurrentStep);
    return (
        <div>
            <div className='max-w-2xl mx-auto my-8 p-6 bg-white rounded-lg text-center'>
                <div className='flex items-center justify-center'>
                <img src='/images/gift.png' className='h-[100px] w-[100px]' alt='gift'/>
                </div>
                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}
            </div>



        </div>
    );
}

export default StepForm;