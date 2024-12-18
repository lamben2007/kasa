import Banner from "../../components/Banner/Banner"
import Gallery from "../../components/Gallery/Gallery";
import './Home.scss';

function Home() {
  return (
    <div className="divHome">
      <Banner />
      <Gallery/>
    </div>
  )
}

export default Home