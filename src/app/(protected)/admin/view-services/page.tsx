'use client'

import { useDeleteServiceMutation, useGetAllServiceQuery } from '@/redux/api/service/serviceApi'
import { IService, IServiceResponse, SERVICE_TYPE } from '@/redux/api/service/type';
import React, { useEffect, useState } from 'react'
import { getColumns } from './utils/getColumns';
import CustomTableWithPagination from '@/app/components/shared/table/CustomTableWithPagination';

interface IFormattedRow {
    id: string;
    service: SERVICE_TYPE;
    date: string;
    time: Date;
    from: string;
    to: string;
    price: string | number;
    capacity: string | number;
    image: string;
  }

export default function ViewServices() {
    const [rows, setRows] = useState<Partial<IFormattedRow>[] | []>([]); 
    const { data, isLoading, error } = useGetAllServiceQuery();
    const [deleteService] = useDeleteServiceMutation();

    useEffect(() => {
      if (data && data.data) {
        const formattedRows = data.data.map((service:IService) => ({
          id: service._id as string,
          service: service.service || 'N/A',
          date: service.startDate ? new Date(service.startDate).toDateString() : 'N/A',
          time: service.time || 'N/A',
          from: service.from || 'N/A',
          to: service.to || 'N/A',
          price: service.price || 'N/A',
          capacity: service.capacity || 'N/A',
          image: service.image || 'N/A'
        }));
        setRows(formattedRows);
      }
    }, [data]);
    
    const columns = getColumns(deleteService)
    
  return (
    <div>
       <CustomTableWithPagination
              columns={columns}
              rows={rows}
              rowHeight={80}
              checked={false}
              selection={false}
              headerColor="#F5FAFE" 
              minHeight={'400px'}      />
    </div>
  )
}
