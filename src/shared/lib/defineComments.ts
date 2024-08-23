export function defineComments(comments: number) {
   if (!comments) return '0 комментариев'

   const strNumber = String(comments)
   const number = Number(strNumber.length > 2 ? strNumber.slice(-2) : strNumber)

   if (number > 10 && number < 15) return `${comments} комментариев`

   switch (Number(strNumber[strNumber.length - 1])) {
      case 1:
         return `${comments} комментарий`
      case 2:
         return `${comments} комментария`
      case 3:
         return `${comments} комментария`
      case 4:
         return `${comments} комментарий`
      default:
         return `${comments} комментариев`
   }
}
