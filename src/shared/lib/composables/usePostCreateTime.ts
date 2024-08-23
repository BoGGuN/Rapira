import moment from 'moment'

export function usePostCreateTime(postDate: string) {
   const postSeconds = moment(postDate).unix()
   const currentSeconds = ref(moment(new Date()).unix())
   const difference = ref(0)

   let interval = setInterval(() => {
      currentSeconds.value += 60
   }, 60000)

   watchEffect(() => {
      difference.value = currentSeconds.value - postSeconds
   })

   onUnmounted(() => {
      clearInterval(interval)
   })

   return { difference }
}
