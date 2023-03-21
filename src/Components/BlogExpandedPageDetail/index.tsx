import React from 'react';
import BlogCommentsDetail from './BlogCommentsDetail';
import BlogExpandedDetail from './BlogExpandedDetail';

const BlogExpandedPageDetail: React.FC = () => (
  <>
    <BlogExpandedDetail />
    <BlogCommentsDetail />
  </>
);

export default BlogExpandedPageDetail;
