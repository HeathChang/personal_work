import classes from "./css/list.module.css";
import { Fragment, useEffect } from "react";
import toiletList from '../data/data'
import ToiletContent from "./toiletContent";


const List = () => {
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
					{toiletContents}
				</ol>
			</Fragment>


	)
}

export default List