import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Carousel from "../../components/Carousel/Carousel"
import Host from "../../components/Host/Host"
import Rate from "../../components/Rate/Rate"
import Tags from "../../components/Tags/Tags"
import Title from "../../components/Title/Title"
import Collapse from '../../components/Collapse/Collapse';
import './Accommodation.css';

//
function Accommodation() {

  // Utilisation de useParams pour accéder au paramètre id
  const { id } = useParams();
  //
  const [accommodationInfos, setAccommodationInfos] = useState({});
  const [error, setError] = useState(null);

  // Fonction de récupération des données JSON pour les collapes
  const fetchInfosAccommodation = async () => {
    try {
      //
      const response = await fetch('../../../data/logements.json');
      if (!response.ok) { throw new Error(`Erreur HTTP ! statut : ${response.status}`); }

      //
      const data = await response.json();

      //
      const accommodation = data.find((item) => item.id === id);
      if (accommodation) {
        setAccommodationInfos(accommodation); // Mise à jour de l'état avec les données JSON
      }

    }
    // 
    catch (err) {
      console.error('Erreur lors du fetch des logements:', err);
      setError(err.message); // Stockage de l'erreur pour affichage ou débogage
    }
  };


  //
  useEffect(() => {
    //
    fetchInfosAccommodation();
  }, []);

  //
  if (error) {
    return <div>Erreur lecture des données</div>; // Affichage d'un message d'erreur si nécessaire
  }

  //
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };


  // console.log(accommodationInfos)
  //
  return (
    <>
      {

        !isEmptyObject(accommodationInfos) ? (
          < div className="divAccommodation" >

            {id}

            <Carousel />

            <div className="divTitleHost">
              <Title accommodationData={accommodationInfos} />
              <Host accommodationData={accommodationInfos} />
            </div>

            <div className="divRateTags">
              <Tags accommodationData={accommodationInfos} />
              <Rate accommodationData={accommodationInfos} />
            </div>

            <div className="divDetails">
              <Collapse title="Description" collapseText="description du logement" />
              <Collapse title="Equipements" collapseText="Liste des équipements" />
            </div>

          </div >

        ) : (<div>NO DATA</div>)

      }
    </>

  )
}

export default Accommodation