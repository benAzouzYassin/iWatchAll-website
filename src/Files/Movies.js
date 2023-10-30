import Search from "../components/Search";
import Slider from "../components/Slider";
import Alldisplay from "../components/Alldisplay"
import poster from '../Movie-test-image.jpg';

const apiKey="5b131e1d20c39f695a7411e422d4db37";

export default function Movies () {
    return (
      <div className="container">
        <Search />
        <Slider image={poster}/>
        <Alldisplay image={poster} />
      </div>
    )
}