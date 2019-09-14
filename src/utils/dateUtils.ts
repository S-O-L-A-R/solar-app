import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export function localizedDurationFromNow(date: string | number) {
	return dayjs(date).fromNow()
}
