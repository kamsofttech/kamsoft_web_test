

export default async function handler(req, res) {
    const { placeId } = req.query;
    const API_KEY = process.env.GOOGLE_API_KEY
    console.log(req)
    try{
        const result= await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJJ5Iby-XHvzsR-ZKfiYQfZuM&fields=name,reviews,rating&key=AIzaSyAo4vEtRLSFLNBAKXO1vfs3gKtJSw4jmXs`)
    
    const data= await result.json()
    return res.json(data) 
    //return res.json("data")
    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}