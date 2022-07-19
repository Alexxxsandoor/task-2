function BigPhoto(props) {
	const {
		imgUrl,
		handleOpen = Function.prototype
	} = props

	return (
		<>
			<div className="big-photo-back" onClick={handleOpen}>
				<img className="big-photo" src={imgUrl} alt="картинка" />
			</div>
			<button className="btn-big-photo" onClick={handleOpen}>Закрыть</button>
		</>
	)
}

export { BigPhoto }