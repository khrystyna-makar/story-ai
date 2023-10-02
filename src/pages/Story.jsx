import { useLocation } from "react-router-dom";
import ShareSocialBtn from '../components/ShareSocialBtn'
import JsPDF from 'jspdf';

function Story() {

    const { state } = useLocation();

    const exportPDF = () => {
        const report = new JsPDF('portrait', 'pt', 'a4');
        report.text(25, 25, document.querySelector('#report').textContent, { maxWidth: 550 });
        report.save('story.pdf');
    }

    return (
        <div className="night-bg">
            <h2 className="title">Story</h2>

            <div className="center story-item" key={state?.id}>
                <div id="report">
                    <b className='story-prompt'>{state?.start}</b>
                    <h4 className="story-text">{state?.text}</h4>
                </div>

                <hr />
                <div className="story-bottom">
                    <button className='button' onClick={exportPDF}>Save as PDF</button>
                    <ShareSocialBtn url={window.location.href} />
                </div>

            </div>
        </div>
    )
}

export default Story;