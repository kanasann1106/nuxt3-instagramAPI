export default defineEventHandler ( async (event) => {
    const config = useRuntimeConfig()
    const query = getQuery(event)
    const result = await $fetch(`${config.public.instagramApiUrl}/ig_hashtag_search`, {
        params: query
    })
    return result
})
