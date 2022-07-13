import Nav from '../../../components/Nav/Nav';
import LContainer from '../../../components/LContainer/LContainer';
import Raside from '../../../components/RAside/RAside';
import './Main.scss';

function MainChang() {
  return (
    <main className="mainMaster">
      <Nav />
      <section className="sectionContainer">
        <LContainer />
        <Raside />
      </section>
    </main>
  );
}

export default MainChang;
