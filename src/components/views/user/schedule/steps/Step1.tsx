import { useStepperContext } from "../../../../../context/schedule/ScheduleStepperContext";

export default function Step1() {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="flex flex-col ">
            <h2>Servicios</h2>
        </div>
    );
}