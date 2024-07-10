import ArticleList from "../components/ArticleList";
import NavBar from "../components/NavBar";

export default function MainPage() {
    return (
        <div>
            <NavBar />

            <div className="mt-20 text-center">
                <h1>Deck Builder</h1>
                <ArticleList />
            </div>
            <div className="bg-black h-14 flex items-center justify-center">
                <p>2024 - Thanos Dimitriades</p>
            </div>
        </div>

    );
}