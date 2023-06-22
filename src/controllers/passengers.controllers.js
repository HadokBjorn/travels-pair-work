import { getPassengersTravelsDB } from "../repositories/passengers.repositories.js"


export async function getPassengersTravels(req, res){
    const { page }=req.query
try{
    const passengersTravels = await getPassengersTravelsDB()
    if(passengersTravels.rowCount > 100) return res.status(500).send("Too many results")
    if(page){
        const pageIsValid = validateQuery(page)
    }
    return res.send(passengersTravels.rows).status(200)
}
catch (err) {
    res.status(500).send(err.message)
}
}