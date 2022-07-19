import { useEffect, useState } from "react"
import { BigPhoto } from "./BigPhoto"

function Item(props) {
	const {
		url,
		index,
		HandleDelete = Function.prototype
	} = props
	const [openStatus, setStatus] = useState(false)
	const [color, setColor] = useState({})

	const handleOpen = () => {
		setStatus(!openStatus)
	}

	useEffect(() => {
		if (index % 4 === 0) setColor({ background: "red" })
		else setColor({})
	}, [index])

	return (
		<>
			{openStatus && <BigPhoto handleOpen={handleOpen} imgUrl={url} />}
			<div className="block">
				<div style={color} className="item" >
					<img src={url} onClick={handleOpen} alt="картинка порта" />
				</div>
				<button onClick={() => HandleDelete(url)} className="btn-delete">Удалить фотографию{index}</button>
			</div>
		</>
	)
}

export { Item }