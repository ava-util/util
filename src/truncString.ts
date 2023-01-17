export default function (str: string, cutOff: number) {
	let content = str.slice(cutOff)

	const firstSpace = content.indexOf(" ")
	if (firstSpace == -1) return str

	let newContent = str.slice(0, cutOff + firstSpace)
		.trim()
	newContent = newContent.replace(/(,|\.)$/,"")
	// if (newContent[newContent.length - 1] == ",")
	// 	newContent = newContent.slice(0, newContent.length - 1)
	return newContent + " ... "
}