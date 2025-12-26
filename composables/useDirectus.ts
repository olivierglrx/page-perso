export const useDirectus = () => {
    const getItems = async (collection: string, params: Record<string, any> = {}) => {
        return await $fetch(`/api/directus/items/${collection}`, {
            params
        })
    }

    const getItem = async (collection: string, id: string, params: Record<string, any> = {}) => {
        return await $fetch(`/api/directus/items/${collection}/${id}`, {
            params
        })
    }

    const getFile = (id: string) => {
        const config = useRuntimeConfig()
        const directusUrl = config.public.directusUrl
        return `${directusUrl}/assets/${id}`
    }

    return {
        getItems,
        getItem,
        getFile
    }
}
