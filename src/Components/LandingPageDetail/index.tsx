import React from 'react';
import BasicDetail from './BasicDetail';
import PlanDetail from './PlanDetail';
import PropertyDetail from './PropertyDetail';
import QuestionDetail from './QuestionDetail';

const LandingPageDetail: React.FC = () => (
  <>
    <PropertyDetail />
    <BasicDetail />
    <PlanDetail />
    <QuestionDetail />
  </>
);

export default LandingPageDetail;