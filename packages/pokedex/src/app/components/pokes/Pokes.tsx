'use client'
import React, { useEffect } from 'react'
import styles from './Pokes.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getNextPage, getPokes, selectCount, selectError, selectNextURL, selectPokes, selectPreviousURL, selectStatus } from '@/lib/features/pokes/pokesSlice';
import { Button } from '@dex/components';
import { classNames } from '@dex/utilities';
import Link from "next/link";

export function Pokes() {
    const dispatch = useAppDispatch();
    const pokes = useAppSelector(selectPokes);
    const next = useAppSelector(selectNextURL);
    const back = useAppSelector(selectPreviousURL);
    const status = useAppSelector(selectStatus);
    const count = useAppSelector(selectCount);
    const error = useAppSelector(selectError);

    // Side Effects
    useEffect(() => {
        if (!count) {
            dispatch(getPokes('https://pokeapi.co/api/v2/pokemon'));
        }
    }, [dispatch, count]);

    const isLoading =  status === 'loading';

    // UI
  return (
    <div className={classNames(styles.pokes)}>
        <nav className={styles.nav}>
            <Button disabled={!back || isLoading} variant='outline' onClick={() => dispatch(getNextPage())}>
                back
            </Button>
            <span>{count}</span>
            <Button disabled={!next || isLoading} variant='outline' onClick={() => dispatch(getNextPage())}>
                next
            </Button>
        </nav>
        <main className={classNames(styles.main)}>
            {pokes?.map(poke => <Link href={`/pokemon/${poke.name}`} key={poke.name}>
                {JSON.stringify(poke, null, 2)}
            </Link>)}
        </main>
        <footer>
            {status !== 'idle' && <span>{status}</span>}
            {typeof error === 'string' && <span>{error}</span>}
        </footer>
    </div>
  )
}
