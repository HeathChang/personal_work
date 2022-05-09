import { useEffect, Fragment } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// import {fetchSingleProduct} from '../../../Access/action.js'

const ProductView = () => {
	// const dispatch = useDispatch();
	const params = useParams();

	//State내 저장되어있는 data가져와서 사용하기
	// const product= useSelector((state) => state.productState.product)

	useEffect(()=>{
		console.log('useEffect:: ',params.productId)
		// dispatch(fetchSingleProduct())
	},)


	return (
			<Fragment>
				<div>
					안녕하세요! <br/>
					{ params.productId }
				</div>
			</Fragment>
	);
};

export default ProductView;
