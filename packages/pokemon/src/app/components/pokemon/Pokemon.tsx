'use client'

import { getPokemon, selectPokemon } from '@/lib/features/pokes/pokemonSlice';
import { selectPokes } from '@/lib/features/pokes/pokesSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import React, { useEffect } from 'react'
import { Sprites } from 'types/Poke';
import { Avatar } from '@dex/components';

import styles from './Pokemon.module.css';
import { selectStatus } from '@/lib/features/counter/counterSlice';
import Link from 'next/link';

export function Pokemon({ name }: { name: string }) {
    const dispatch = useAppDispatch();
    const pokes = useAppSelector(selectPokes);
    const poke = pokes?.find(poke => poke.name === name);
    const pokemon = useAppSelector((state) => selectPokemon(state, name));
    const status = useAppSelector(selectStatus);

    useEffect(() => {
        if (name && poke) {
            dispatch(getPokemon(poke))
        }
    }, [name, poke, dispatch])

    return (
        <div>
            {status === 'loading' && <h3>Loading...</h3>}
            <h3>Abilities</h3>
            <ol>
                {pokemon && pokemon.abilities.map(ability => <li key={ability.ability.name}>
                    <Link href={`./${name}/ability`}>{ability.ability.name}</Link>
                </li>)}
            </ol>
            <h3>Sprites</h3>
            {pokemon && <Avatars sprites={pokemon.sprites} />}
        </div>
    )
}

function Avatars({ sprites }: { sprites: Sprites }) {
    return <div className={styles.avatars}>
        {Object.entries(sprites).map(([label, info], index) => <PokemonAvatar key={`key-${index}`} label={label} info={info} />)}
    </div>
}

function PokemonAvatar({ info, label }: { info: string | object, label: string }) {
    if (typeof info === 'string') {
        const names = label.replaceAll('_', ' ').replace(' default', '');
        return <Avatar src={info} name={names} width={96} height={96} />
    }
    return null;
}