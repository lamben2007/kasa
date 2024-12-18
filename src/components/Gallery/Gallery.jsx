import Card from '../Card/Card'
import './Gallery.scss'
import { logements } from '../../data/logements.js'

function Gallery() {

  //
  // var myPic = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg";

  //

  // logements.map(logement=>console.log(logement.id));

  //
  return (
    <>

      <div className="gallery">

        {/* {logements.map(({ id, title, cover }) =>
        (
          <div key={id}>
            <Card imageUrl={cover} title={title} />
          </div>
        )
        )} */}

        {logements.slice(0, 6).map(({ id, title, cover }) => (
          <div key={id}>
            <Card id={id} imageUrl={cover} title={title} />
          </div>
        ))}





        {/* <Card imageUrl={myPic} title="Titre de la carte1" />
        <Card imageUrl={myPic} title="Titre de la carte2" />
        <Card imageUrl={myPic} title="Titre de la carte3" />
        <Card imageUrl={myPic} title="Titre de la carte4" />
        <Card imageUrl={myPic} title="Titre de la carte5" />
        <Card imageUrl={myPic} title="Titre de la carte6" /> */}
      </div>

    </>
  )

}

export default Gallery