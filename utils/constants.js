import { MdDashboard, MdOutlineBorderAll } from "react-icons/md";
import { AiOutlineForm } from "react-icons/ai";
import { LuInfo } from "react-icons/lu";
import { MessageSquareWarning } from "lucide-react";

export const AWS_REGION = process.env.AWS_REGION
export const USER_POOL_ID = process.env.USER_POOL_ID
export const CLIENT_ID = process.env.CLIENT_ID

let counter = 0;

export const Menus = [

    {
        id: 1,
        name: 'Dashboard',
        Icon: MdDashboard,
        link: '/dashboard'
    },

    {
        id: 2,
        name: 'Enquiry',
        Icon: LuInfo,
        link: '/enquiry'
    }

]

export const data = [

    {
      amount: 316,
      status: "lead in",
      projectName: "Project 01",
      enquiryNumber: 2000278,
      date: "2023-09-18",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Kamran",
      salesRepresentative: "Customer",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 306,
      status: "lead in",
      projectName: "Project 02",
      enquiryNumber: 2000277,
      date: "2023-08-17",
      enquiryType: "Contract",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Kamran",
      salesRepresentative: "admin",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 26,
      status: "quote in progress",
      projectName: "Project 03",
      enquiryNumber: 2000276,
      date: "2023-07-16",
      enquiryType: "Projects",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Kamran",
      salesRepresentative: "admin",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 242,
      status: "lead in",
      projectName: "Project 04",
      enquiryNumber: 2000275,
      date: "2023-06-15",
      enquiryType: "Contract",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Kamran",
      salesRepresentative: "admin",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 837,
      status: "quote in progress",
      projectName: "Project 05",
      enquiryNumber: 2000274,
      date: "2023-05-14",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Kamran",
      salesRepresentative: "Customer",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 874,
      status: "lead in",
      projectName: "Project 06",
      enquiryNumber: 2000273,
      date: "2023-04-13",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Kamran",
      salesRepresentative: "admin",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 721,
      status: "lost",
      projectName: "Project 07",
      enquiryNumber: 2000272,
      date: "2023-03-12",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Kamran",
      salesRepresentative: "Sales2",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 500,
      status: "lead in",
      projectName: "Project 11",
      enquiryNumber: 2000351,
      date: "2023-11-08",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Mark",
      salesRepresentative: "Sales3",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 450,
      status: "quote in progress",
      projectName: "Project 12",
      enquiryNumber: 2000352,
      date: "2023-10-07",
      enquiryType: "Contract",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Paul",
      salesRepresentative: "Sales1",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 600,
      status: "lead in",
      projectName: "Project 13",
      enquiryNumber: 2000353,
      date: "2023-09-06",
      enquiryType: "Projects",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Luke",
      salesRepresentative: "Sales4",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 320,
      status: "quote ready",
      projectName: "Project 14",
      enquiryNumber: 2000354,
      date: "2023-08-05",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "Harry",
      salesRepresentative: "Sales2",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 125,
      status: "lost",
      projectName: "Project 15",
      enquiryNumber: 2000355,
      date: "2023-07-04",
      enquiryType: "Contract",
      siteReference: "-",
      customerName: "MSBC Developer",
      contactName: "Larry",
      salesRepresentative: "Sales1",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 275,
      status: "lead in",
      projectName: "Project 16",
      enquiryNumber: 2000356,
      date: "2023-06-03",
      enquiryType: "Phone Marketing",
      siteReference: "-",
      customerName: "MSBC Developer",
      contactName: "Chris",
      salesRepresentative: "Sales3",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 500,
      status: "lead in",
      projectName: "Project 17",
      enquiryNumber: 2000357,
      date: "2023-05-02",
      enquiryType: "Villas",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Kevin",
      salesRepresentative: "Sales4",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 375,
      status: "quote ready",
      projectName: "Project 18",
      enquiryNumber: 2000358,
      date: "2023-04-01",
      enquiryType: "Trade",
      siteReference: "-",
      customerName: "Holbox ",
      contactName: "Oliver",
      salesRepresentative: "Sales1",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 290,
      status: "lost",
      projectName: "Project 19",
      enquiryNumber: 2000359,
      date: "2023-03-31",
      enquiryType: "Contract",
      siteReference: "-",
      customerName: "MSBC Developer",
      contactName: "James",
      salesRepresentative: "Sales2",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
  
    {
      amount: 420,
      status: "lead in",
      projectName: "Project 20",
      enquiryNumber: 2000360,
      date: "2023-02-28",
      enquiryType: "Phone Marketing",
      siteReference: "-",
      customerName: "MSBC",
      contactName: "William",
      salesRepresentative: "Sales3",
      enquiryBy: "admin",
      notes: " -Design Attached",
      branch: "Head Office",
      targetDate: "2023-10-26",
      phoneNo: "0987654321",
      mobileNo: "0987654321"
    },
];

export const dateFormatter = (date) => {
    return new Date(date).toISOString();
}

export const toSnakeCase = (str) => {
    return str.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '_');
}

export const formatDateToYYYYMMDD = (date) => {

  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
  
}

export const getNumber = () => {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dd = date.getDate();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${year}${month}${dd}${counter++}`;

}