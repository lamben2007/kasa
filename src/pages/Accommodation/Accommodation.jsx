import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Carousel from "../../components/Carousel/Carousel"
import Host from "../../components/Host/Host"
import Rate from "../../components/Rate/Rate"
import Tags from "../../components/Tags/Tags"
import Title from "../../components/Title/Title"
import Collapse from '../../components/Collapse/Collapse';
import Error from '../Error/Error.jsx';
import './Accommodation.scss';


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
      // Appel à l'API pour récupération des données JSON
      const response = await fetch('../../../data/accommodations.json');
      if (!response.ok) {
        throw new Error(`Erreur HTTP ! statut : ${response.status}`);
      }

      // Parsing des données JSON
      const responseData = await response.json();

      // Recherche de l'accommodation par ID
      const accommodation = responseData.find((item) => item.id === id);
      if (accommodation) {
        setAccommodationInfos(accommodation); // Mise à jour de l'état avec les données JSON
      } else {
        setError(`Accommodation id ${id} not found!`);
      }
    } catch (err) {
      // Stockage de l'erreur pour affichage ou débogage
      setError(`Une erreur s'est produite : ${err.message}`);
      console.error("Détails de l'erreur :", err);
    }
  };


  //
  useEffect(() => {
    //
    fetchInfosAccommodation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  // Afficher la page d'erreur 404 si une erreur a été trouvé
  if (error) {
    return <Error />
  }

  //
  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0;
  };


  //
  return (
    <>
      {

        !isEmptyObject(accommodationInfos) ? (

          <div className="divAccommodation">

            <Carousel pictures={accommodationInfos.pictures} />

            <div className='divTitleTagsHostRate'>

              <div className="divTitleTags">
                <Title accommodationData={accommodationInfos} />
                <Tags accommodationData={accommodationInfos} />
              </div>

              <div className="divHostRate">
                <Host accommodationData={accommodationInfos} />
                <Rate accommodationData={accommodationInfos} />
              </div>

            </div>

            <div className="divDetails">
              <Collapse title="Description" collapseText={accommodationInfos.description} />
              <Collapse title="Equipements" collapseText={accommodationInfos.equipments} />
            </div>

          </div>

        ) : (
          <span> en cours de chargement ...</span>
        )

      }
    </>

  )
}

export default Accommodation