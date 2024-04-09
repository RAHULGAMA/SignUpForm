import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/images/logo.png'; // Import your logo image
import './HomePage.css';

// Import Material UI icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WorkIcon from '@mui/icons-material/Work';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

function NextPage() {
  const location = useLocation();
  const avatar = location.state ? location.state.avatar : null;

  return (
    <div className="container2">
      <header>
        <div className="logo1">
          <img src={logo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Inspiration</a></li>
            <li><a href="#">Find Work</a></li>
            <li><a href="#">Learn Design</a></li>
            <li><a href="#">Go Pro</a></li>
            <li><a href="#">Hire Designers</a></li>
          </ul>
        </nav>
        <div className="right-section">
          <input type="text" placeholder="Search" />
          <Link to='#'><WorkIcon/></Link>
          {avatar ? (
            <img src={avatar} alt="Avatar" className="avatar" />
          ) : (
            <div className="avatar empty-avatar"></div> 
          )}
          <button>Upload</button>
        </div>
      </header>
      <main>
        <h1>Please verify your email.....</h1>
        <div className="email-icon">
          <MarkEmailReadIcon />
        </div>
        <p>Please verify your email address. We have sent you confirmation emai to :</p>
        <h5>example@example.com</h5>
        <p>Click the confirmation link in that email to start using Dribble.</p>
        <div className="links">
          <p>Did'nt receive the email? Check your spam folder, it may have been caught by the filtter. <br />if you still don't see it, you can<Link to="#"> <span>resend the confirmaition email.</span></Link></p>
          <br />
          <p>Wrong email address? <Link to="/"><span>Change email</span></Link></p> {/* Link to signup form */}
        </div>
      </main>
      <footer>
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <div class="para">
              <p>Dribble is he world's leading</p>
              <p> community for creatives to sahare, grow <br /></p>
              <p> and get hired.</p>
            </div>
            <div className="social-icons">
              <div><Link to="#"><FacebookIcon/></Link></div>
              <div><Link to="#"><TwitterIcon/></Link></div>
              <div><Link to="#"><InstagramIcon/></Link></div>
            </div>
          </div>
          <div className="footer-info">
            <div className="designer-info">
              <h2>For designer</h2>
              <ul>
                <li><Link to="#">Go Pro</Link></li>
                <li><Link to="#">Explore Design Work</Link></li>
                <li><Link to="#">Design Blog</Link></li>
                <li><Link to="#">Overtime podcast</Link></li>
                <li><Link to="#">Playoffs</Link></li>
                <li><Link to="#">Weekly Warm-Up</Link></li>
                <li><Link to="#">Refer a Friend</Link></li>
                <li><Link to="#">Code of conduct</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="designer-info">
              <h2>Hire designers</h2>
              <ul>
                <li><Link to="#">Post a job opening</Link></li>
                <li><Link to="#">Post a freelance project</Link></li>
                <li><Link to="#">Search for designers</Link></li>
              </ul>
              <h1>Brands</h1>
              <ul>
              <li><Link to="#">Advertise with us</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="designer-info">
              <h2>Company</h2>
              <ul>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">Carreers</Link></li>
                <li><Link to="#">Support</Link></li>
                <li><Link to="#">Media kit</Link></li>
                <li><Link to="#">Testimonials</Link></li>
                <li><Link to="#">API</Link></li>
                <li><Link to="#">Terms of service</Link></li>
                <li><Link to="#">Privacy policy</Link></li>
                <li><Link to="#">Cookie policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="designer-info">
              <h2>Directories</h2>
              <ul>
                <li><Link to="#">Design jobs</Link></li>
                <li><Link to="#">Designers for hire</Link></li>
                <li><Link to="#">Freelance designers for hire</Link></li>
                <li><Link to="#">Tags</Link></li>
                <li><Link to="#">Places</Link></li>
              </ul>
              <h1>Design assets</h1>
              <ul>
                <li><Link to="#">Dribble Marketplace</Link></li>
                <li><Link to="#">creatives</Link></li>
                <li><Link to="#">Fontspring</Link></li>
                <li><Link to="#">Font Squirrel</Link></li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            <div className="designer-info">
              <h2>Design Resources</h2>
              <ul>
                <li><Link to="#">Freelancing</Link></li>
                <li><Link to="#">Design Hiring</Link></li>
                <li><Link to="#">Design portfolio</Link></li>
                <li><Link to="#">Design Education</Link></li>
                <li><Link to="#">creative process</Link></li>
                <li><Link to="#">Design Industry Trends</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <hr /> 
        <div className="footer-bottom">
          <div className="copyright">© 2024 Your Company</div>
          <div className="trademark">™️</div>
        </div>
      </footer>

    </div>
  );
}

export default NextPage;
