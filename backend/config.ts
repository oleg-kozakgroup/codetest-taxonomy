export default {
    port: process.env.port,
    parameters: {
        features: {
            categories: {
               limit: 1 
            }
        }
    },
    nlu_options: {
        version: process.env.nlu_version,
        iam_apikey: process.env.nlu_api_key,
        url: process.env.nlu_url
    }
}