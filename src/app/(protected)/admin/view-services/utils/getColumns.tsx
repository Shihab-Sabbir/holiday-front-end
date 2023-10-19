import { ICustomErrorType } from '@/types/type';
import { MutationActionCreatorResult, MutationDefinition, BaseQueryFn, FetchArgs } from '@reduxjs/toolkit/query';
import Link from 'next/link';
import React from 'react';

export const getColumns = (deleteService: { (arg: string): MutationActionCreatorResult<MutationDefinition<string, BaseQueryFn<string | FetchArgs, unknown, ICustomErrorType>, never, void, "api">>; (arg0: any): void; }) => {
  const columns = [
    {
      field: 'service',
      headerName: 'Service',
      sortable: true,
      flex: 1,
    },
    {
      field: 'date',
      headerName: 'Date',
      sortable: true,
      flex: 1,
    },
    {
      field: 'time',
      headerName: 'Time',
      sortable: true,
      flex: 1,
    },
    {
      field: 'from',
      headerName: 'From',
      sortable: true,
      flex: 1,
    },
    {
      field: 'to',
      headerName: 'To',
      sortable: true,
      flex: 1,
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: true,
      flex: 1,
    },
    {
      field: 'capacity',
      headerName: 'Capacity',
      sortable: true,
      flex: 1,
    },
    {
      field: 'image',
      headerName: 'Image',
      sortable: false,
      flex: 1,
      renderCell: (params:any) => {
        if (params.row.image === 'N/A') {
          return <p>{params.row.image}</p>;
        } else {
          return (
            <img src={params.row.image} alt="Service Image" style={{ width: '100px' }} />
          );
        }
      },
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      flex: 1,
      renderCell: (params:any) => (
        <div>
          <Link href={`/view-service/${params.row.id}`} className="action-button">
            View
          </Link>
          <Link href={`/edit-service/${params.row.id}`} className="action-button">
            Edit
          </Link>
          <button
            onClick={() => deleteService(params.row.id)}
            className="action-button"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return columns;
};
