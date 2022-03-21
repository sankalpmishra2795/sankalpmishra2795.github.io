import { CoverImage, InfoColumn, MovieContainer, MovieInfo, MovieName } from "./movieComponent.style";


const Moviecomponent = (props) => {
  const { Title, Year, Type, Poster } = props.movie;

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <MovieContainer
          className="flip-card-front"
        >
          <CoverImage src={Poster}></CoverImage>
          <MovieName style={{ color: '#111' }}>{Title}</MovieName>
          <InfoColumn>
            <MovieInfo style={{ color: '#111' }}>Year: {Year}</MovieInfo>
            <MovieInfo style={{ color: '#111' }}>Type: {Type}</MovieInfo>
          </InfoColumn>
        </MovieContainer>
      </div>
    </div>
  );
};

export default Moviecomponent;
