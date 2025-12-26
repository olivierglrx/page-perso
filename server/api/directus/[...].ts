export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const directusUrl = config.public.directusUrl || 'https://directus.olivierglrx.com' // Replace with actual URL if known or env var
    // Handle the proxy logic
    // Join the path segments
    const path = event.path.replace(/^\/api\/directus/, '')
    const target = `${directusUrl}${path}`

    try {
        return await proxyRequest(event, target)
    } catch (error) {
        console.error('Proxy error:', error)
        throw createError({
            statusCode: 502,
            statusMessage: 'Bad Gateway',
            message: 'Failed to proxy request to Directus'
        })
    }
})
