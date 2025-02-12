import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
    const letterChangeRate = 300;
// Index of the toRotate array that is being displayed
  const [loopNum, setLoopNum] = useState(0);
//   Set as false at the start, since we start by typing
  const [isDeleting, setIsDeleting] = useState(false);
//   Indicates the exact portion of the word that is being displayed
  const [text, setText] = useState('');
//   A bit of a random transition between the letters being typed
  const [delta, setDelta] = useState(letterChangeRate - Math.random() * 100);
  const [index, setIndex] = useState(1);
//   List of words that we display on the banner
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
//   Length between one word and the other
  const period = 2000;

  useEffect(() => {
    // interval between each letter being typed
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // clean up function
    return () => { clearInterval(ticker) };
    // we run this effect every time the text is updated
  }, [text])

//   This is the function that is updating the text
  const tick = () => {
    // this is the index of the word that we currently type
    // We % so that we get the actual index
    let i = loopNum % toRotate.length;
    // This is the full text that we want to type out
    let fullText = toRotate[i];
    // This is the text that is being typed out at a given frame
    // If it's deleting, then we subtract one letter from the state length
    // Otherwise, we add 1 to the state length to get closer to full length.
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Set pace when it is deleting.
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.75);
    }

    // If we finish typing the text, then we set deleting to be true
    // And we set Delta to the "pause" between words
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    // located in the home page
    <section className="banner" id="home">
      <Container>
        {/* Center items in a row */}
        <Row className="align-items-center">
            {/* Column on the left, with the text  */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                {/* text changes with state */}
                <h1>{`Hi! I'm Alvin`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <HashLink className="text-decoration-none" to='#connect'>
                    <button onClick={() => console.log('connect')}><span>Let’s Connect</span> <ArrowRightCircle size={25} /></button>
                    </HashLink>
              </div>}
            </TrackVisibility>
          </Col>
          {/* Column on the right, with the header image (xl and md need to add to 12) */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}