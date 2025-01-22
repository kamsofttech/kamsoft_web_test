import { api } from "@/utils/wooApi";
export default async function handler(req, res) {
    const{catId}=req.body
    //console.log('catId',catId)
    const responseData={
        success:false,
        products:[],
        
    }
    try{
        const {data}= await api.get('products?_fields=id,name,price,stock_status,categories,tags,images,attributes',{
            per_page:20,
            category:`${catId.toString()}`
        });
        responseData.success=true
        responseData.products=data
        return res.json(responseData)

    }catch (error) {
        //console.error(error)
        responseData.error=error.message
        return res.status(error.status || 500).end(responseData)
    }
        
        
    
}