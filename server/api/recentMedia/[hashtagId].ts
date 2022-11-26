export default defineEventHandler ( async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    const result = await $fetch(`${config.public.instagramApiUrl}/${event.context.params.hashtagId}/recent_media`, {
        params: query
    })
    return result
})
