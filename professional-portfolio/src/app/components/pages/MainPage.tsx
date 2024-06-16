// Imported Components
import Header from "../Header";
import '../css/Post.css';



interface Entry {

    title: string;
    desc: string;
    date: string;
    category: string[];

}

export default function MainPage() {
    return(
        <>
            <Header/>
            <HomePage/>
        </>
        
    );
}

export function HomePage() {

    const dummyEntry: Entry = {
        title: "COMP468 Machine Learning Model",
        desc: 'Influenced by the release of ChatGPT and an increase in use amongst college students in academia we wanted to build a model to work on understanding the overall sentiment of AI as a whole.',
        date: '03/04/2002',
        category: ['english class', 'history', 'your mom']
    };



    return(
        <>
            <Entry
                title = {dummyEntry.title}
                desc = {dummyEntry.desc}
                date = {dummyEntry.date}
                category= {dummyEntry.category}
            >
            </Entry>
        </>
    )
};


function Entry(entry: Entry): JSX.Element {
    return (
        <div className="PostContainer">
            <div className = "PostContainer-Internal">
                <h1>
                    {entry.title}
                </h1>
                <h2>

                </h2>
                <text className="PostContainer-Internal-Text">
                    {entry.desc}
                </text>
                <div className="PostContainer-Internal-BottomFlex">
                    <h2>
                        {entry.category}
                    </h2>
                    <h2>
                        {entry.date}
                    </h2>
                </div>
            </div>
        </div>
    )
};