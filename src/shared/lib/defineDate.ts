import moment from 'moment'
import 'moment/locale/ru'

export function defineDate(date: string) {
   moment.locale('ru')
   const momentDate = moment(date)
   const month = momentDate.format('MMMM')
   let monthRU
   const day = momentDate.date()

   /* План Б */
   switch (month) {
      case 'January':
         monthRU = 'Январь'
         break
      case 'February':
         monthRU = 'Февраль'
         break
      case 'March':
         monthRU = 'Март'
         break
      case 'April':
         monthRU = 'Апрель'
         break
      case 'May':
         monthRU = 'Май'
         break
      case 'June':
         monthRU = 'Июнь'
         break
      case 'July':
         monthRU = 'Июль'
         break
      case 'August':
         monthRU = 'Август'
         break
      case 'September':
         monthRU = 'Сентябрь'
         break
      case 'October':
         monthRU = 'Октябрь'
         break
      case 'November':
         monthRU = 'Ноябрь'
         break
      case 'December':
         monthRU = 'Декабрь'
         break
      default:
         return `${day}-e число`
   }

   return `${day} ${monthRU.slice(0, 3)}`
}
