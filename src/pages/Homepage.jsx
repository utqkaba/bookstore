import BookList from "../components/Booklist"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import PromoBar from "../components/PromoBar"
// import BestSeller from "../components/BestSeller"

export default function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Search />
      <PromoBar />
      <BookList />
      <Footer />
    </div>
  )
}