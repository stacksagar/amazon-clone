import React, { useEffect } from 'react';
import HomeProducts from './HomeProducts';
import HomeSlider from './HomeSlider';
import './Home.css';
import Footer from './Footer';
import { useContextValue } from './ContextReducer';
import { auth } from './firebase';

const Home = () => {
  const [, dispatch] = useContextValue();
  
  const backToTop = () => {
    window.scrollTo(0,0)
  }

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => { 

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="Home">
      <HomeSlider />
      <HomeProducts />
      <div className="Home_footer">
        <div className="Home_footer_container">
          <div>
            <h6>
              <strong>
                Your recently viewed items and featured recommendations
              </strong>
            </h6>
            <h6>
              <small>
                <i>
                  View or edit your browsing historyAfter viewing product detail
                  pages, look here to find an easy way to navigate back to pages
                  you are interested in.
                </i>
              </small>
            </h6>
          </div>
          <div>
            <h6>
              <i className="fas fa-angle-right"></i>
            </h6>
            <small>view or edit your browser history</small>
          </div>
        </div> 
          <h3 onClick={backToTop} id="back_to_top">Back to top</h3> 
      </div>
      <Footer />
    </div>
  );
};

export default Home;
