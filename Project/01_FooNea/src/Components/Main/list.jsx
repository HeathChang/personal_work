import classes from "./css/list.module.css";
import { Fragment, useEffect } from "react";
import toiletList from '../data/data'
import ToiletContent from "./toiletContent";


const List = () => {
	const fnView = (id) => {
		console.log('Hello World::::', id)
		this.$router.push(`{id}`)
		//bind 사용 이유: 모듈 블록 바깥에 있는걸 참조하기 위해서 사용
	}
	const toiletContents = toiletList.map((toilet) => {
		return (
				<ToiletContent
						id={ toilet.id }
						key={ toilet.id }
						name={ toilet.name }
						lat={ toilet.lat }
						long={ toilet.long }
				/>
		)
	})


	return (
			<Fragment>
				<h1 className={ classes.title }>
					co-ordinate
				</h1>
				<ol className={ classes.list }>
					{ toiletContents }
				</ol>
			</Fragment>


	)
}

export default List