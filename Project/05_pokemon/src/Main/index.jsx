import { Fragment, useEffect, useState } from "react";
import { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { fnSearch } from '../Apis/main-api.js'


const MainIndex = () => {
	const pokemonID = useRef();
	const [ pokemon, setPokemon ] = useState([]);



	const fnFind = async (pokemon) => {
		const res = await fnSearch(pokemon.current.value)
		setPokemon(res);

	}


	return (
			<Fragment>
				{/*<section className="bodySect"></section>*/}
				<input type="tel" ref={ pokemonID } />
				<button onClick={fnFind.bind(null, pokemonID)}>찾기</button>
				<div>Hello World.
				<section key={pokemon}>
					{pokemon}
				</section></div>
				<section className="footerSect">하단</section>
			</Fragment>
	);
};

export default MainIndex;
