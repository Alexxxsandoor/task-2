import { useEffect, useState } from "react"

import { allImage } from "../image/image-list" //список фоток, вручную писал фотки:\ 

import './image-style.css'

import { Item } from "./Item"


export function ImageList() {
	const saveLocalImage = JSON.parse(localStorage.getItem('storedUsersImage'))

	const [seconds, setSeconds] = useState(0);
	const [imgList, setImgList] = useState(saveLocalImage ? saveLocalImage : allImage)

	//Удаляем фотографию
	const HandleDelete = (index) => {
		setImgList(imgList.filter((f) => f !== index))
	}

	useEffect(() => {
		setTimeout(setSeconds, 1000, seconds + 1);
	}, [seconds])

	//Сохроняем в локалку как меняется список фоток
	useEffect(() => {
		localStorage.setItem('storedUsersImage', JSON.stringify(imgList));
	}, [imgList])

	return (
		<>
			<h1>
				{imgList.length} картинок,
				Время:{new Date().toLocaleString()}
				<button className="btn-back" onClick={() => setImgList(allImage)}>
					Восстановить все фотографии
				</button>
			</h1>
			<div className="image-list">
				{imgList.map((el, index) => <Item
					HandleDelete={HandleDelete}
					key={el}
					url={el}
					index={index}
				/>)}
			</div>
		</>
	)
}

