/** @type {import('next').NextConfig} */
const nextConfig = {
    modules: true,
    images: {
        //domains: ['localhost'],
        loader: "default",
        domains: ["res.cloudinary.com","speedtrack.co.in"],

    },
    env:{
        // API_PATH:"http://localhost:1339",
        API_PATH:"https://speedtrack.co.in/wp-sevenwonders/wp-json/wp/v2/",
        API_URL:"https://globalserver.kamsoft.co.in/api/v1/kamsoft",
        NEXT_PUBLIC_API_URL:"https://speedtrack.co.in/wp-sevenwonders",
        GQL_API_PATH:'https://speedtrack.co.in/wp-sevenwonders/graphql',
        MAIL_API:"https://globalserver.kamsoft.co.in/api/v1/kamsoft/email/sendMail",
        JWT_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NzU1ODkxNCwiZXhwIjoxODE1MjM4OTE0fQ.kg71BT59KvKXpk6w0i-rBdx_At1NQWthSgmyXieYjiA',
        CONSUMER_KEY:'ck_3a9ed945b42e12450e9ebc458c859a35d4c6c703',
        CONSUMER_SECRETS:'cs_65d1460a34c5ad85b8403f4ee65e001b6c4decd9'
    },
}

module.exports = nextConfig
