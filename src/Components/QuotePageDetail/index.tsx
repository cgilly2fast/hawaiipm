import React, { useEffect } from 'react';
import BasicDetail from './BasicDetail';
import PropertyDetail from './PropertyDetail';
import QuestionDetail from './QuestionDetail';
import RentDetail from './RentDetail';
import ResourceDetail from './ResourcesDetail';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice',
  params: {
    address: '5500 Grand Lake Drive, San Antonio, TX, 78244',
    propertyType: 'Single Family',
    bedrooms: '4',
    bathrooms: '2',
    squareFootage: '1600',
    compCount: '5',
  },
  headers: {
    'X-RapidAPI-Key': 'c1133d04a1msh734fc36b6ff1ab4p10e601jsn95f6d65c0184', //process.env.RAPID_API_KEY,
    'X-RapidAPI-Host': 'realtymole-rental-estimate-v1.p.rapidapi.com',
  },
};

const QuoteMainPageDetail: React.FC = () => {
  useEffect(() => {
    const getLongTermEstimate = async () => {
      console.log(process.env.RAPID_API_KEY);
      const response = await axios.request(options);
      console.log(response.data);
    };
    getLongTermEstimate();
  });
  return (
    <>
      <RentDetail />
      <BasicDetail />
      <PropertyDetail />
      <ResourceDetail />
      <QuestionDetail />
    </>
  );
};

export default QuoteMainPageDetail;
