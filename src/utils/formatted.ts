export const formattedDT = (dt: string) => {
    const current_date = new Date(dt);

    const date = {
        dayOfWeek: current_date.toLocaleString("en-US", { weekday: "long" }),
        day: current_date.getDate(),
        month: current_date.toLocaleString("en-US", { month: "long" })
    };
    const hour = current_date.getHours();

    return {
        date,
        hour
    };
};
