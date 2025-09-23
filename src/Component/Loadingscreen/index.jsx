import MyMehfilLogo from '../../assets/mymehfil_logo.png';
import './styles.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="logo-container">
        <img src={MyMehfilLogo} className="animated-logo" />
        {/* <img src={MyMehfilText} className="primary_text animated-logo" /> */}
      </div>
    </div>
  );
}
