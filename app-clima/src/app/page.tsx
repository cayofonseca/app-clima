"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
type Form = {
    cityName: string;
};

type WeatherData = {
    name: string;
    main: {
        temp: number;
    };
    weather: {
        description: string;
        icon: string;
    }[];
};
function Page() {
    const [weatherData, setWeatherData] = useState(null);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = async (data) => {
        const req = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${data.cityName}&appid=5cc1bfb635c40b744d327c753ebd3e8c
&units=metric&lang=pt_br`
        );
        const dataJson = await req.json();
        setWeatherData(dataJson);
    };
    return (
        <div>
            <h1>App de Clima</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("cityName")}
                    placeholder="Digite o nome da cidade"
                ></input>
                <input type="submit" name="Buscar"></input>
            </form>
        </div>
    );
}

export default Page;
