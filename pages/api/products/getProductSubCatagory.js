import { api } from "@/utils/wooApi";

export default async function handler(req, res) {
    const{pId}=req.query
    //console.log('pId',pId)
    const responseData={
        success:false,
        prodSubCategory:[],
        
    }
    try{
        const {data}= await api.get(`products/categories/?parent=${pId}`,{
            per_page:20
        });
        responseData.success=true
        responseData.prodSubCategory=data
        return res.json(responseData)

    }catch (error) {
        //console.error(error)
        responseData.error=error.message
        return res.status(error.status || 500).end(responseData)
    }
        
        
    
}