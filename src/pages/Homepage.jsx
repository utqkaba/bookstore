import BookList from "../components/Booklist"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
// import BestSeller from "../components/BestSeller"

export default function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Search />
      {/* <BestSeller /> */}
      <BookList />
      <Footer />
    </div>
  )
}