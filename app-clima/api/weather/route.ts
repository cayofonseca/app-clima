import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get("city");

    if (!city) {
        return NextResponse.json(
            { error: "Cidade não informada" },
            { status: 400 }
        );
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        return NextResponse.json(
            { error: data.message },
            { status: response.status }
        );
    }

    return NextResponse.json(data);
}
