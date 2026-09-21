import { Navigate, Route, Routes } from 'react-router-dom';
import { CustomerEnquiry } from './pages/CustomerEnquiry/CustomerEnquiry';
import { EnquirySuccess } from './pages/EnquirySuccess/EnquirySuccess';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/enquiry" replace />} />
      <Route path="/enquiry" element={<CustomerEnquiry />} />
      <Route path="/enquiry/success" element={<EnquirySuccess />} />
      <Route path="*" element={<Navigate to="/enquiry" replace />} />
    </Routes>
  );
}
