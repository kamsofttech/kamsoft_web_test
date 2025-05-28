
export default async function handler(req, res) {
    const {name, email, phone,comment} = req.body;
    //console.log('name', name)

    //console.log('req', req)
    try {
     
    const resu = await fetch(`${process.env.API_URL}/email/sendMail/`,{
      method: "POST",
            headers: {
                'Content-Type': 'application/json',
                //'Authorization': `Bearer ${process.env.NEXT_PUBLIC_JWT_TOKEN}`
                
            },
            body: JSON.stringify({
                 name:name,
                 email:email,
                 message:comment,
                 phone:phone
             })
    })
      res.json(resu)
      
     
  
    } catch (error) {
      console.error('error-respons',error)
      return res.status(error.status || 500).end(error.message)
    }
  }