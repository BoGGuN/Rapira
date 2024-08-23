export function defineDateFrom(seconds: number) {
   if (seconds < 60) return '<1 мин'

   const minutes = Math.floor(seconds / 60)

   if (minutes < 60) return `${minutes} мин`

   const hours = Math.floor(minutes / 60)

   if (hours < 24) return `${hours} ч`

   const days = Math.floor(hours / 24)

   if (days < 30) return `${days} д`

   const months = Math.floor(days / 30)

   if (months < 12) return `${months} мес`
   else return 'больше года назад'
}
