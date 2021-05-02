export default async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.')

    const { name } = context.bindingData

    const responseMessage = name ?
        `Hello, ${name}. This HTTP triggered function executed successfully.` :
        `This HTTP triggered function executed successfully. 
     Pass a name in the query string or in the request body for a personalized response.`

    context.res = {
    // status: 200, /* Defaults to 200 */
        body: responseMessage,
    }
}
