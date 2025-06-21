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
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = async (data) => {
        setIsLoading(true);
        setErrorMessage(null);
        setWeatherData(null);

        try {
            const response = await fetch(`/api/weather?city=${data.cityName}`);
            const responseData = await response.json();

            if (!response.ok) {
                throw new Error(
                    responseData.error || "Ocorreu um erro desconhecido."
                );
            }

            setWeatherData(responseData);
        } catch (err: any) {
            setErrorMessage(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
            <div className="w-full max-w-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Central do Clima
                </h1>

                <form
                    className="flex flex-col sm:flex-row gap-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="flex-grow p-3 rounded-md border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-200"
                        {...register("cityName", {
                            required: "O nome da cidade é obrigatório",
                        })}
                        placeholder="Digite o nome da cidade"
                        autoComplete="off"
                        disabled={isLoading}
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors disabled:bg-indigo-300 disabled:cursor-not-allowed"
                        disabled={isLoading}
                    >
                        {isLoading ? "Buscando..." : "Buscar"}
                    </button>
                </form>

                <div className="mt-4 text-center h-6">
                    {errors.cityName && (
                        <p className="font-medium text-yellow-600">
                            {errors.cityName.message}
                        </p>
                    )}
                    {errorMessage && (
                        <p className="font-medium text-red-600">
                            {errorMessage}
                        </p>
                    )}
                </div>

                {weatherData && !isLoading && (
                    <div className="mt-6 bg-white border border-gray-200 rounded-xl p-8 shadow-md animate-fade-in">
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-900">
                                {weatherData.name}
                            </h2>
                            <p className="capitalize text-lg text-gray-600 mt-1">
                                {weatherData.weather[0].description}
                            </p>
                            <div className="flex justify-center items-center gap-4 mt-6">
                                <img
                                    src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                    alt="Ícone do clima"
                                    className="w-20 h-20"
                                />
                                <p className="text-5xl font-bold text-gray-800">
                                    {Math.round(weatherData.main.temp)}°C
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
