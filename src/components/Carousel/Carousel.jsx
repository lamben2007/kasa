import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import picArrowBack from '../../assets/arrow-back.png';
import picArrowForward from '../../assets/arrow-forward.png';
import './Carousel.scss'

//
function Carousel({ pictures }) {

    const [pictureIndex, setPictureIndex] = useState(0);
    const [btnBackVisible, setBtnBackVisible] = useState(true);
    const [btnForwardVisible, setBtnForwardVisible] = useState(true);


    //
    function buttonsState() {

        //
        if (pictures.length > 1) {
            setBtnBackVisible(true);
            setBtnForwardVisible(true);
        } else {
            setBtnBackVisible(false);
            setBtnForwardVisible(false);
        }

    }

    //
    function handleArrowBack() {
        if (pictureIndex === 0)
            setPictureIndex(pictures.length - 1)
        else
            setPictureIndex(pictureIndex - 1)
    }

    //
    function handleArrowForward() {
        if (pictureIndex >= pictures.length - 1)
            setPictureIndex(0)
        else
            setPictureIndex(pictureIndex + 1)
    }


    //
    useEffect(() => {
        buttonsState();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    //
    return (
        <div className='divCarousel' >

            <img src={pictures[pictureIndex]} alt='Carousel picture' />

            <button
                className={`divCarousel_BtnBack ${btnBackVisible ? '' : 'divCarousel_Btn--invisible'}`}
                onClick={handleArrowBack}>
                <img src={picArrowBack} alt='arrow-back' />
            </button>

            <button
                className={`divCarousel_BtnForward ${btnForwardVisible ? '' : 'divCarousel_Btn--invisible'}`}
                onClick={handleArrowForward}>
                <img src={picArrowForward} alt='arrow-forward' />
            </button>

            <div className={`divCarousel_image-pagination ${pictures.length < 2 ? 'divCarousel_Btn--invisible' : ''}`}>
                {(pictureIndex + 1) + "/" + pictures.length}
            </div>

        </div>
    )

}

//
Carousel.propTypes = {
    pictures: PropTypes.array.isRequired
}

export default Carousel