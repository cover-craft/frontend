import { useSteps, Stepper, Step, StepIndicator, StepStatus, StepIcon, Box, Progress, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface props {
    steps: { title: string; template: ReactNode }[];
    onComplete: () => void;
}
const ProgressBar = ({ steps, onComplete }: props) => {
    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    const max = steps.length - 1;
    const progressPercent = (activeStep / max) * 100;

    return (
        <Box position="relative" mx="1rem">
            <Stepper size="sm" index={activeStep} gap="0">
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator bg="white">
                            <StepStatus complete={<StepIcon />} />
                        </StepIndicator>
                    </Step>
                ))}
            </Stepper>
            <Progress value={progressPercent} position="absolute" height="3px" width="full" top="10px" zIndex={-1} />
            {steps[activeStep].template}

            <Button
                onClick={() => {
                    activeStep === max ? onComplete() : setActiveStep(activeStep + 1);
                }}
            >
                다음
            </Button>
        </Box>
    );
};

export default ProgressBar;
