import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime.js"
import customParseFormat from "dayjs/plugin/customParseFormat.js"
//import es from "dayjs/locale/es.js"

dayjs.locale("es")
dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

function humanizar(fecha) {
    const fechaJs = dayjs(fecha)
    const daysdiff = Math.abs(fechaJs.diff(Date.now(), "days"));

    const añoEnCurso = fechaJs.year() === new Date().getFullYear();

    if (!añoEnCurso) {
        return fechaJs.format("MMMM DD, YYYY")
    } else if (daysdiff >= 30) {
        return fechaJs.format("MMMM DD")
    } else {
        return fechaJs.fromNow()
    }
}

let $timeTags = document.querySelectorAll('time')
$timeTags.forEach(timeTag => {
    let fecha = timeTag.getAttribute('datetime')
    let humanDate = humanizar(fecha)

    timeTag.innerText = humanDate
})