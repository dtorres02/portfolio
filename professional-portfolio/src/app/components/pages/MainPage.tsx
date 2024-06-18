// Imported Components
import Header from "../Header";
import '../css/Post.css';
import '../css/MainPage.css'

import Chip from '@mui/material/Chip';

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

    const entries = [
        {
            title: "Forestr",
            desc: "Envvironmental awareness website spreading information about deforestation in the Northern American Regions.",
            date: '11/18/2023',
            category: ['Environmental', 'Web Development', 'Frontend']
        },
        {
            title: "Senior Individualized Project (Senior Thesis)",
            desc: "Applying linear algebraic properties to the adjacency matrices of complete graphs to find the properties of the eigenvalues.",
            date: '12/12/2024',
            category: ['Research', 'Mathematics', 'Graph Theory']
        },
        {
            title: "Kraigslist",
            desc: "Functioning community board website made by K Students for K Students",
            date: '11/24/2022',
            category: ['Web Development', 'Software Development', 'Backend']
        },
        {
            title: "Tweet Sentiment Analysis Model",
            desc: "Twitter Sentement Model able to predict the concensus and attitute of ChatGPT for the given time frame of 2023 and prior.",
            date: '03/16/2023',
            category: ['Machine Learning', 'Data Analysis']
        },
        {
            title: "SLOOM Website",
            desc: "The SLOOM website and backend using Bun JS and React.",
            date: '06/12/2024',
            category: ['Web Development', 'Frontend', 'Backend']
        }
    ]


    return(
        <div className="MainPageContainer">
            

            {entries.map( item => (
                <Entry
                    title = {item.title}
                    desc = {item.desc}
                    date = {item.date}
                    category= {item.category}
                >
                </Entry>
            ))}
        </div>
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
                    <ul>
                        {entry.category.map(item =>
                            <Chip
                            label = {item}
                            sx = {{m: 0.5}}
                            />
                        )}
                    </ul>
                    <p>
                       Last Worked On: {entry.date}
                    </p>
                </div>
            </div>
        </div>
    )
};