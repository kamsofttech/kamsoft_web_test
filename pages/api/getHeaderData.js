const API_URL =process.env.NEXT_PUBLIC_API_URL

export default async function handler(req, res) {
    
    try{
        const result= await fetch(`${API_URL}/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.JWT_TOKEN}`
                
            },
            
        })
        const data= await result.json()
        return res.json(data)

    }catch (error) {
        console.error(error)
        return res.status(error.status || 500).end(error.message)
    }
        
        
    
}