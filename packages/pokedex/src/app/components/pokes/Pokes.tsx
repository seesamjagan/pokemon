'use client'
import React, { useEffect } from 'react'
import styles from './Pokes.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getNextPage, getPokes, selectCount, selectError, selectNextURL, selectPokes, selectPreviousURL, selectStatus } from '@/lib/features/pokes/pokesSlice';
import { Button } from '@dex/components';

export function Pokes() {
    const dispatch = useAppDispatch();
    const pokes = useAppSelector(selectPokes);
    const next = useAppSelector(selectNextURL);
    const back = useAppSelector(selectPreviousURL);
    const status = useAppSelector(selectStatus);
    const count = useAppSelector(selectCount);
    const error = useAppSelector(selectError);

    useEffect(() => {
        dispatch(getPokes('https://pokeapi.co/api/v2/pokemon'));
    }, [dispatch]);
  return (
    <div className={styles.pokes}>
        <nav className={styles.nav}>
            <Button disabled={!back || status === 'loading'} variant='outline' onClick={() => dispatch(getNextPage())}>
                back
            </Button>
            <span>{count}</span>
            <Button disabled={!next || status === 'loading'} variant='outline' onClick={() => dispatch(getNextPage())}>
                next
            </Button>
        </nav>
        <pre>
            {pokes && JSON.stringify(pokes, null, 2)}
        </pre>
        <footer>
            {status !== 'idle' && <span>{status}</span>}
            {typeof error === 'string' && <span>{error}</span>}
        </footer>
    </div>
  )
}
