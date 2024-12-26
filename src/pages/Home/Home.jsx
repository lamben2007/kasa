import { useEffect, useState } from 'react';
import Banner from "../../components/Banner/Banner"
import Card from "../../components/Card/Card";
import './Home.scss';


//
function Home() {

  //
  const [logements, setLogements] = useState([]);
  const [error, setError] = useState(null);

  //
  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('../../../data/logements.json');
        if (!response.ok) {
          throw new Error(`Erreur HTTP ! statut : ${response.status}`);
        }
        const data = await response.json();
        setLogements(data); // Mise à jour de l'état avec les données JSON
      } catch (err) {
        console.error('Erreur lors du fetch des logements:', err);
        setError(err.message); // Stockage de l'erreur pour affichage ou débogage
      }
    };

    fetchLogements();
  }, []); // Le tableau de dépendances est vide pour exécuter le useEffect au montage

  if (error) {
    return <div>Erreur lecture des données</div>; // Affichage d'un message d'erreur si nécessaire
  }


  //
  return (
    <div className="divHome">

      <Banner page={"home"}/>

      {/* GALLERY */}
      <div className="divHome__gallery">
        {logements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>

    </div>
  )
}

export default Home