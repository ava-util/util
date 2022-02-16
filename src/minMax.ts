
export default function(val: number, min: number, max: number) {
	val = Math.max(val, min)
	val = Math.min(val, max)
	return val
}