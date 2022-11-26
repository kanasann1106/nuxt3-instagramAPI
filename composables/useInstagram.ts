import { Media } from '@/@types/instagram'

export const useInstagram = () => {
    const config = useRuntimeConfig()
    const medias = ref<Media[]>([]);

    const getHashtagId = async (hashtag: string) => {
        const response = await $fetch('/api/hashtagId', {
            params: {
                user_id: config.public.userId,
                access_token: config.public.accessToken,
                q: hashtag
            }
        })
        return response.data[0].id
    }

    const getRecentMedia = async (hashtag: string) => {
        const hashtagId = await getHashtagId(hashtag)
        const response = await $fetch(`/api/recentMedia/${hashtagId}`, {
            params: {
                user_id: config.public.userId,
                access_token: config.public.accessToken,
                fields: 'id,media_url,permalink,media_type,timestamp'
            }
        })
        medias.value = response.data.filter(i => {
            if(i.media_url && i.media_type === 'IMAGE') {
                return true
            }
            return false
        })

        return medias.value
    } 

    return {
        getHashtagId,
        getRecentMedia,
        medias
    }
}
