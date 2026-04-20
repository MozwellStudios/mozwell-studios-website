import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import PageTransition from '@/components/studio/PageTransition.jsx';
import CustomCursor from '@/components/studio/CustomCursor.jsx';
import ScrollToTop from '@/components/studio/ScrollToTop.jsx';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home.jsx';
import Work from './pages/Work.jsx';
import Services from './pages/Services.jsx';
import Studio from './pages/Studio.jsx';
import Contact from './pages/Contact.jsx';
import MozwellClaremont from './pages/case-studies/MozwellClaremont.jsx';
import UnionPasadena from './pages/case-studies/UnionPasadena.jsx';
import ChopNBlok from './pages/case-studies/ChopNBlok.jsx';
import FoundrSpace from './pages/case-studies/FoundrSpace.jsx';
import HomeAid from './pages/case-studies/HomeAid.jsx';
import FrankMacias from './pages/case-studies/FrankMacias.jsx';
import KPay from './pages/case-studies/KPay.jsx';
import PostHTX from './pages/case-studies/PostHTX.jsx';
import UnionPasadenaV2 from './pages/case-studies/UnionPasadenaV2.jsx';
import MozwellClaremontV2 from './pages/case-studies/MozwellClaremontV2.jsx';
import OrganicMusic from './pages/case-studies/OrganicMusic.jsx';
import DtgMagicLine from './pages/proposal/DtgMagicLine.jsx';


const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Only block on auth if a token is present (i.e. user is trying to log in)
  if (isLoadingAuth && isLoadingPublicSettings) {
    return (
      <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: "#000" }}>
        <div className="w-8 h-8 border-4 border-neutral-800 border-t-neutral-400 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <PageTransition>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/mozwell-claremont" element={<MozwellClaremont />} />
      <Route path="/work/union-pasadena" element={<UnionPasadenaV2 />} />
      <Route path="/work/chop-n-blok" element={<ChopNBlok />} />
      <Route path="/work/foundrspace" element={<FoundrSpace />} />
      <Route path="/work/homeaid" element={<HomeAid />} />
      <Route path="/work/frank-macias" element={<FrankMacias />} />
      <Route path="/work/kpay" element={<KPay />} />
      <Route path="/work/post-htx" element={<PostHTX />} />
      <Route path="/work/union-pasadena-v2" element={<UnionPasadenaV2 />} />
      <Route path="/work/mozwell-claremont-v2" element={<MozwellClaremontV2 />} />
      <Route path="/work/organic-music" element={<OrganicMusic />} />
      <Route path="/proposal/dtg-magic-line" element={<DtgMagicLine />} />
      <Route path="/services" element={<Services />} />
      <Route path="/studio" element={<Studio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </PageTransition>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <CustomCursor />
          <ScrollToTop />
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App