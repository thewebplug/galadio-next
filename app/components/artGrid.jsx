import ArtGridCard from "./artGridCard";
export default function ArtGrid({paginationType, length, explore}) {
  return (
    <div className="grid">
    <div className="grid__title">
      You might also like
      </div>
      {!explore && <div className="grid__filter">
        <button className="grid__filter__filter">
          <svg
            width="19"
            height="16"
            viewBox="0 0 19 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1538 1H1.15381L7.95381 8.35778V13.4444L11.3538 15V8.35778L18.1538 1Z"
              stroke="#1C1C1E"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Filter
        </button>

        <div className="grid__filter__flex">
          <button>
            Location
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86092 7.70711C7.47039 8.09763 6.83723 8.09763 6.4467 7.70711L0.446703 1.70711C0.0561777 1.31658 0.0561778 0.683416 0.446703 0.292892C0.837227 -0.0976326 1.47039 -0.0976326 1.86092 0.292892L7.15381 5.58579L12.4467 0.292893C12.8372 -0.0976316 13.4704 -0.0976315 13.8609 0.292893C14.2514 0.683417 14.2514 1.31658 13.8609 1.70711L7.86092 7.70711Z"
                fill="white"
              />
            </svg>
          </button>
          <button>
            Size
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86092 7.70711C7.47039 8.09763 6.83723 8.09763 6.4467 7.70711L0.446703 1.70711C0.0561777 1.31658 0.0561778 0.683416 0.446703 0.292892C0.837227 -0.0976326 1.47039 -0.0976326 1.86092 0.292892L7.15381 5.58579L12.4467 0.292893C12.8372 -0.0976316 13.4704 -0.0976315 13.8609 0.292893C14.2514 0.683417 14.2514 1.31658 13.8609 1.70711L7.86092 7.70711Z"
                fill="white"
              />
            </svg>
          </button>
          <button>
            Sort by
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.86092 7.70711C7.47039 8.09763 6.83723 8.09763 6.4467 7.70711L0.446703 1.70711C0.0561777 1.31658 0.0561778 0.683416 0.446703 0.292892C0.837227 -0.0976326 1.47039 -0.0976326 1.86092 0.292892L7.15381 5.58579L12.4467 0.292893C12.8372 -0.0976316 13.4704 -0.0976315 13.8609 0.292893C14.2514 0.683417 14.2514 1.31658 13.8609 1.70711L7.86092 7.70711Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>}
      <div className="grid__inner">
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
        <ArtGridCard />
      </div>

      {paginationType === "load" && <div className="grid__button">
        <button>Load more</button>
      </div>}
    {paginationType === "page" &&  <div className="grid__pagination">
        <button>Back</button>
        <div>
          <div>1</div>
          <div>/</div>
          <div>3</div>
        </div>
        <button>Next <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M6.91075 4.41083C7.23619 4.08539 7.76382 4.08539 8.08926 4.41083L13.0893 9.41083C13.4147 9.73626 13.4147 10.2639 13.0893 10.5893L8.08926 15.5893C7.76382 15.9148 7.23619 15.9148 6.91075 15.5893C6.58531 15.2639 6.58531 14.7363 6.91075 14.4108L11.3215 10.0001L6.91075 5.58934C6.58531 5.2639 6.58531 4.73626 6.91075 4.41083Z" fill="white"/>
</svg>
</button>
      </div>}
    </div>
  );
}
