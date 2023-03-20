import React from 'react';
import BasicDetail from './BasicDetail';
import PropertyDetail from './PropertyDetail';
import QuestionDetail from './QuestionDetail';
import RentDetail from './RentDetail';
import ReaoutcesDetail from './ResourcesDetail';

const GuaranteeMainPageDetail: React.FC = () => (
  <>
    <RentDetail />
    <BasicDetail />
    <PropertyDetail />
    <ReaoutcesDetail />
    <QuestionDetail />
  </>
);

export default GuaranteeMainPageDetail;