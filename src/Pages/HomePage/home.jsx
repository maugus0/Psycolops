import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import YashIntro from '../../Components/YashIntro/Yashintro';
import Project from '../../Components/Project/Project';
import IntroSection from '../../Components/Intro/Intro';
import ServicesSection from '../../Components/ServiceCard/ServiceCard';


const HomePage = () => {
    return (
        <>
            <Header />
            <YashIntro />
            <Project/>
            <IntroSection/>
            <ServicesSection/>
            <Footer />
        </>
    );
};
export default HomePage;