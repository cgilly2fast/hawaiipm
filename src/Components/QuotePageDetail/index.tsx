import React from 'react';
import BasicDetail from './BasicDetail';
import PropertyDetail from './PropertyDetail';
import QuestionDetail from './QuestionDetail';
import RentDetail from './RentDetail';
import ResourceDetail from './ResourcesDetail';

const QuoteMainPageDetail: React.FC = () => (
  <>
    <RentDetail />
    <BasicDetail />
    <PropertyDetail />
    <ResourceDetail />
    <QuestionDetail />
  </>
);

export default QuoteMainPageDetail;
