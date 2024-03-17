import {useSelector} from "react-redux";
import {getCurrentStep} from "../../features/step/formSlice.ts";
import {StepOne} from "./StepOne.tsx";
import {StepTwo} from "./StepTwo.tsx";


function StepForm() {
    const step = useSelector(getCurrentStep);
    return (
        <div>

                {step === 1 && <StepOne />}
                {step === 2 && <StepTwo />}



        </div>
    );
}

export default StepForm;