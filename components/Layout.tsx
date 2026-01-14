import Footer from "./Footer"
import NavBar from "./NavBar"

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <>
      <NavBar/>
      <main className="main-container">
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout