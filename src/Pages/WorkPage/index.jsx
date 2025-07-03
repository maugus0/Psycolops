import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Project from '../../Components/Project/Project';
import './index.css';



const WorkPage = () => {
    return (
        <>
            <Header />
            <div className="workpage">
                <h1 className='color-purple'>All Projects</h1>
                <Project />
            </div>
            <Footer />
        </>
    );
};
export default WorkPage;