import { api } from "@/utils/wooApi";

export default async function handler(req, res) {
    
    const responseData={
        success:false,
        prodCategory:[],
        
    }
    try{
        const {data}= await api.get('products/categories?parent=0',{
            per_page:20
        });
        responseData.success=true
        responseData.prodCategory=data
        return res.json(responseData)

    }catch (error) {
        //console.error(error)
        responseData.error=error.message
        return res.status(error.status || 500).end(responseData)
    }
        
        
    
}