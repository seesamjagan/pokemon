'use client'
import React, { useEffect, useState } from 'react'
import styles from './Pokes.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { getNextPage, getPokes, getPreviousPage, selectCount, selectError, selectNextURL, selectPokes, selectPreviousURL, selectStatus } from '@/lib/features/pokes/pokesSlice';
import { Button } from '@dex/components';
import { classNames } from '@dex/utilities';
import Link from "next/link";
import { DataGrid, GridCallbackDetails, GridColDef, GridPaginationModel } from '@mui/x-data-grid';
import { Info } from 'types/Poke';


export function Pokes() {
    const dispatch = useAppDispatch();
    const pokes = useAppSelector(selectPokes);
    const status = useAppSelector(selectStatus);
    const count = useAppSelector(selectCount);

    const rowCount = count ?? 20;

    const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
        pageSize: 20,
        page: 0,
    });

    const { page, pageSize } = paginationModel;

    const columns: GridColDef<Info>[] = [
        {
            field: 'index',
            headerName: '#',
            flex: 1,
            minWidth: 40,
            valueFormatter: (params, row, col, api) => {
                const index = pokes?.indexOf(row) ?? 1;
                return  (page * pageSize) + index + 1;
            }
        },
        {
            field: 'name',
            headerName: 'Name',
            flex: 1,
            minWidth: 300,
            renderCell: (params) => {
                return <Link className={styles['cell-link']} href={`/pokemon/${params.id}`}>{params.id}</Link>
            }
        },
    ];

    // Side Effects
    useEffect(() => {
        if (!count) {
            dispatch(getPokes('https://pokeapi.co/api/v2/pokemon'));
        }
    }, [dispatch, count]);

    const isLoading = status === 'loading';

    const onPagination = (model: GridPaginationModel, details: GridCallbackDetails) => {
        if (model.page > page) {
            dispatch(getNextPage());
        } else {
            dispatch(getPreviousPage());
        }
        setPaginationModel(model);
    };

    // UI
    return (
        <div className={classNames(styles.pokes)}>
            <main className={classNames(styles.main)}>
                <DataGrid
                    rows={pokes}
                    columns={columns}
                    getRowId={info => info.name}
                    paginationMode='server'
                    paginationModel={paginationModel}
                    rowCount={rowCount}
                    loading={isLoading}
                    pageSizeOptions={[20]}
                    onPaginationModelChange={onPagination}
                    rowSelection={false}

                />
            </main>
        </div>
    )
}
