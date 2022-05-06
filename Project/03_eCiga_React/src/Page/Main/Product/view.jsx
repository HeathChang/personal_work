import { useEffect, useState , Fragment } from "react";
import { useParams } from 'react-router';

const ProductView = () => {
	const params = useParams();

	useEffect(()=>{
		console.log('useEffect:: ',params.productId)
	})


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
