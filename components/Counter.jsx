"use client"

import useCountdown from "@/hooks/useCountdown";

const Counter = () => {
    const targetDate = new Date('2023-07-20T17:00:00');
    const [timeRemaining] = useCountdown(targetDate);

    return (
        <div className='flex justify-between'>
            <div className="timeBox">
                <p className="time">{timeRemaining.days}</p>
                <p className="">Dias</p>
            </div>
            <div className="timeBox">
                <p className="time">{timeRemaining.hours}</p>
                <p className="">Horas</p>
            </div>
            <div className="timeBox">
                <p className="time">{timeRemaining.minutes}</p>
                <p className="">Minutos</p>
            </div>
            <div className="timeBox no-border">
                <p className="time">{timeRemaining.seconds}</p>
                <p className="">Segundos</p>
            </div>
        </div>
    )
}

export default Counter
