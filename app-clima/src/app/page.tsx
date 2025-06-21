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
        setErrorMessage(null);
        setWeatherData(null);

        const response = await fetch(`/api/weather?city=${data.cityName}`);

        if (!response.ok) {
            setErrorMessage("Cidade não encontrada. Tente novamente.");
            return;
        }

        const dataJson = await response.json();
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
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

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
