import { useState } from "react";
import { useQuery } from "react-query";

import { AppLayout } from "~components/AppLayout";
import { Error } from "~components/Error";
import { ForecastData } from "~components/ForecastData";
import { Header } from "~components/Header";
import { Loading } from "~components/Loading";
import { SearchForm } from "~components/SearchForm";
import { getWeather } from "~services/index";
import { GlobalStyles } from "~styles/GlobalStyles";

export function App() {
    const [search, setSearch] = useState("New York");
    const { data, isLoading, isSuccess } = useQuery("weather", () => getWeather(search));

    return (
        <>
            <GlobalStyles />
            <AppLayout>
                <Header />
                <SearchForm search={search} setSearch={setSearch} />
                {isLoading ? (
                    <Loading />
                ) : isSuccess ? (
                    <ForecastData current_day={data.current_day} next_hours={data.next_hours} />
                ) : (
                    <Error />
                )}
            </AppLayout>
        </>
    );
}
