import { Link } from 'react-router'
import './Error.scss';

function Error() {

    //
    return (
        <div className="divError">
            <div className="divError_404">404</div>

            <div className="divError_Message">Oups! La page que vous demandez n&apos;existe pas.</div>

            <Link className="divError_lien" to="/">Retourner sur la page d&apos;accueil</Link>

        </div>
    )

}


export default Error