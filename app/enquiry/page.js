"use client";

import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { formatDateToYYYYMMDD } from '@/utils/constants';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { MdEdit } from "react-icons/md";
import { CustomTooltip } from '@/components/custom-tooltip';
import React, { useMemo } from 'react'
import { Container } from '@/components/container';

const ActionsRenderer = (params) => {

  return (
      <div className='flex items-center justify-center h-full'>
          <CustomTooltip content='Edit'>
              <Link href={`enquiry/edit/${params.data.enquiryNumber}`}>
                  <MdEdit size={20}/>
              </Link>
          </CustomTooltip>
      </div>
  );

};

const Enquiry = () => {

  const { enquiries } = useSelector((state) => state.enquiry_list);

  const rowData = useMemo(() => {
    return enquiries.map((item) => ({
        status: item.status,
        projectName: item.project_name,
        enquiryNumber: item.enquiry_no,
        date: formatDateToYYYYMMDD(item.enquiry_date),
        enquiryType: item.type.join(', ').trim(),
        siteReference: item.site_reference,
        customerName: item.customer,
        contactName: item.contact_name,
        salesRepresentative: item.sales_representative,
        enquiryBy: item.by,
        notes: item.notes,
        amount: item.tentative_project_value,
        branch: item.branch,
        targetDate: formatDateToYYYYMMDD(item.enquiry_date),
        phoneNo: item.phone_no,
        mobileNo: item.mobile_no,
    }));
  }, [enquiries]);

  const columnDefs = useMemo(() => [
    { field: 'status', headerCheckboxSelection: true, checkboxSelection: true, filter: 'agTextColumnFilter' },
    { field: 'projectName', headerName: 'Project Name', filter: 'agTextColumnFilter' },
    { field: 'enquiryNumber', headerName: 'Enquiry Number', filter: 'agTextColumnFilter' },
    { field: 'date', headerName: 'Date', filter: "agNumberColumnFilter" },
    { field: 'enquiryType', headerName: 'Enquiry Type', filter: 'agTextColumnFilter' },
    { field: 'siteReference', headerName: 'Site Reference', filter: 'agTextColumnFilter' },
    { field: 'customerName', headerName: 'Customer Name', filter: 'agTextColumnFilter' },
    { field: 'contactName', headerName: 'Contact Name', filter: 'agTextColumnFilter' },
    { field: 'salesRepresentative', headerName: 'Sales Representative', filter: 'agTextColumnFilter' },
    { field: 'enquiryBy', headerName: 'Enquiry By', filter: 'agTextColumnFilter' },
    { field: 'notes', headerName: 'Notes', filter: 'agTextColumnFilter' },
    { field: 'amount', headerName: 'Amount', filter: 'agTextColumnFilter' },
    { field: 'branch', headerName: 'Branch', filter: 'agTextColumnFilter' },
    { field: 'targetDate', headerName: 'Target Date', filter: "agNumberColumnFilter" },
    { field: 'phoneNo', headerName: 'Phone No', filter: 'agTextColumnFilter' },
    { field: 'mobileNo', headerName: 'Mobile No', filter: 'agTextColumnFilter' },
    { field: 'actions', headerName: 'Actions', cellRenderer: ActionsRenderer }
  ], []);

  const defaultColDef = useMemo(() => {
    return {
        floatingFilter: true,
        sortable: true,
        resizable: true,
    };
  }, []);

  return (
    <Container id={2}>
        
        <div className='w-full flex my-3'>
            <Link href={'enquiry/add'} className='flex items-center border rounded-md p-2 hover:bg-gray-100 transition-all duration-250'>
                <CustomTooltip content='Add Enquiry' position='right'>
                    <AiOutlineFileAdd size={22} />
                </CustomTooltip>
            </Link>
        </div>

        <div className={"ag-theme-quartz w-full"} style={{ height: 500 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                rowSelection="multiple"
                suppressRowClickSelection={true}
                pagination={true}
                paginationPageSize={10}
                paginationPageSizeSelector={[10, 25, 50]}
            />
        </div>

    </Container>
  );

}

export default Enquiry