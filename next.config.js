/** @type {import('next').NextConfig} */
const nextConfig = {
    modules: true,
    images: {
        //domains: ['localhost'],
        loader: "default",
        domains: ["res.cloudinary.com","speedtrack.co.in","lh3.googleusercontent.com","gitlab.com"],

    },
    env:{
        // API_PATH:"http://localhost:1339",
        //API_PATH:"https://speedtrack.co.in/wp-sevenwonders/wp-json/wp/v2/",
        NEXT_PUBLIC_API_URL:"https://speedtrack.co.in/wp-sevenwonders",
        //GQL_API_PATH:'https://speedtrack.co.in/wp-sevenwonders/graphql',
        JWT_TOKEN:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJhZG1pbiIsImlhdCI6MTY1NzU1ODkxNCwiZXhwIjoxODE1MjM4OTE0fQ.kg71BT59KvKXpk6w0i-rBdx_At1NQWthSgmyXieYjiA',
        CONSUMER_KEY:'ck_3a9ed945b42e12450e9ebc458c859a35d4c6c703',
        CONSUMER_SECRETS:'cs_65d1460a34c5ad85b8403f4ee65e001b6c4decd9',
        API_PATH:" https://speedtrack.co.in/wp-vp-tuem/wp-json/wp/v2/",
        SQL_API_PATH:"https://speedtrack.co.in/api/react/wp-vp-tuem",
        WP_API_PATH:" https://speedtrack.co.in/wp-vp-tuem/wp-json/wp/v2/",
        GQL_API_PATH:'https://speedtrack.co.in/wp-vp-tuem/graphql',
        

    },
    async redirects() {
        return [
            {
                source: '/logout',
                destination: '/',
                permanent: true,
            },
            // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
            /*{
                source: '/old-blog/:slug',
                destination: '/news/:slug',
                permanent: false,
            },
            // Wildcard Path Matching - will match `/blog/a` and `/blog/a/b`
            {
                source: '/blog/:slug*',
                destination: '/news/:slug*',
                permanent: false,
            },
            // Regex Path Matching - The regex below will match `/post/123` but not `/post/abc`
            {
                source: '/post/:slug(\\d{1,})',
                destination: '/news/:slug',
                permanent: false,
            },*/
        ]
    },

}

module.exports = nextConfig