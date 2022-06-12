import React from "react";
import translate from '../providers/i18n/translate'

const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? <h1> {translate("loading")}... </h1> : pokemon.map((item) => {
                    return (
                        <>
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>

                                <h2>{item.name}</h2>
                                <div>
                                    <h2>{item.id}</h2>
                                    <img src={item.sprites.front_default}></img>
                                </div>

                            </div>
                        </>
                    )
                })
            }
        </>
    )

}

export default Card