
const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-logo">
        <img src="" alt="Banner logo"/>
      </div> 
      <div className="banner-description">
      Discover the best food & drinks in Delhi NCR
      </div>
      <div>
        <select className="select-box">
          <option value="Ywca, 1, Ashoka Rd, Hanuman">Ywca, 1, Ashoka Rd, Hanuman</option>
          <option value="Detect current location">Detect current location</option>
        </select>
        <input type="search"
        placeholder="search for resturant, cuisine or a dish "  className="search-box" />
      </div>
      
      </div>
    )
}

export default Banner;