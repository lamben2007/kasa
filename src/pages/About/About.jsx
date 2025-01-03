import { useEffect, useState } from 'react';
import Collapse from "../../components/Collapse/Collapse"
import Banner from "../../components/Banner/Banner.jsx"
import './About.scss';


//
function About() {

  //
  const [infosCollapses, setInfosCollapses] = useState([]);
  const [error, setError] = useState(null);

  //
  useEffect(() => {
    const fetchInfosCollapses = async () => {
      try {
        const response = await fetch('../../../data/collapses.json');
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data = await response.json();
        setInfosCollapses(data); // Mise à jour de l'état avec les données JSON
      } catch (err) {
        console.error('Erreur lors du fetch des logements:', err);
        setError(err.message); // Stockage de l'erreur pour affichage ou débogage
      }
    };

    fetchInfosCollapses();
  }, []); // Le tableau de dépendances est vide pour exécuter le useEffect au montage

  if (error) {
    return <div>Erreur lecture des données</div>; // Affichage d'un message d'erreur si nécessaire
  }

  // Fonction pour trouver un item dans les données pour les collapses 
  const getCollapseData = (title) =>
    infosCollapses.find((item) => item.title === title) || {
      title: "Titre non trouvé",
      text: "Texte non trouvé",
    };


  //
  return (
    <div className='divAbout'>

      <Banner page={"about"} />


      {infosCollapses.length > 0 ? (

        <div className="about_collapses">
          {["Fiabilité", "Respect", "Service", "Sécurité"].map((title) => {
            const { title: collapseTitle, text: collapseText } = getCollapseData(title);
            return <Collapse key={title} title={collapseTitle} collapseText={collapseText} />;
          })}
        </div>

      ) : (
        <p>Chargement des données...</p>
      )}

    </div>
  )
}

export default About