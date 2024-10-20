import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return <BrowserRouter>

    <Routes>
    <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route path='/listing/:listingId' element={<Listing />} />
    </Routes>
    <BrowserRouter>
}
