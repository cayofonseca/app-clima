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
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
            {weatherData && (
                <>
                    <p>Nome da cidade: {weatherData.name}</p>
                    <p>Temperatura: {weatherData.main.temp}°C</p>
                    <p>Descrição: {weatherData.weather[0].description}</p>
                    <img
                        src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                        alt="Ícone do clima"
                    />
                </>
            )}
        </div>
    );
}

export default Page;
