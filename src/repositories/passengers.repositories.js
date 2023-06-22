
import connection from "../database/database.js";

export async function getPassengersTravelsDB() {
    const result = await connection.query(`
    SELECT passengers."fullName" as passenger, COUNT(passengers) as travels
    FROM passengers
    JOIN passenger_travels ON passenger_travels."passengerId" = passengers.id
    GROUP BY (passenger)
    ORDER BY travels desc
    LIMIT 100;`)
    return result
}