import React, { Component } from 'react'
import "./BlogCSS/Blog.css"
 class Carousel extends Component {
    constructor(props){
        super(props)
        this.state = {
            ShortTitle: {
                Stitle1: "Web Development Basics",
                Stitle2: "Beauty of Dhaka",
                Stitle3: "MySQL & SEO"
            },
            Title: {
                Title1:"Introduction to HTML, CSS, and JavaScript",
                Title2:"Unveiling the Hidden Beauty of Dhaka",
                Title3:"Enhancing SEO with MySQL Database Management"
            },
            Disception: {
                Disception1:"HTML, CSS, and JavaScript are the core technologies for building websites. HTML structures the content, CSS styles it with colors, layouts, and fonts, while JavaScript adds interactivity and dynamic behavior. Together, they form the foundation of modern web development, enabling developers to create responsive and engaging user experiences.",
                Disception2:"Dhaka’s beauty lies in its vibrant culture, historic landmarks, and lively streets. From the serene waters of Hatirjheel to the Mughal architecture of Lalbagh Fort, the city blends tradition with modern life. Its colorful rickshaws, bustling markets, and warm-hearted people make Dhaka a truly captivating and unique city.",
                Disception3:"MySQL helps manage and organize website data efficiently, improving site performance and SEO. With optimized queries, fast loading times, and structured content storage, MySQL supports search engine visibility. It plays a key role in dynamic websites, enabling better indexing, user experience, and ultimately higher rankings on search engines."
            },
            PostedBy: {
                PostedBy1:"By Ifty",
                PostedBy2:"By Ifty",
                PostedBy3:"By Ifty"
            },
            Date: {
                Date1:"15-07-2025",
                Date2:"16-07-2025",
                Date3:"17-07-2025"
            }

        }
    }
  render() {
    return (
      <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade container mt-5" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='row'>
        <div className='col-md-6'>
            <img src="img/6.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className='col-md-6'>
            <p className='ShortTitle'>{this.state.ShortTitle.Stitle1}</p>
            <h3 className='Title'>{this.state.Title.Title1}</h3>
            <p className='Disception'>{this.state.Disception.Disception1}</p>
            <p className='PostedBy'>{this.state.PostedBy.PostedBy1}</p>
            <p className='Date'>{this.state.Date.Date1}</p>
            <a href="#" className="btn btn-primary">See Post</a>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div className='row'>
        <div className='col-md-6'>
            <img src="img/5.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className='col-md-6'>
            <p className='ShortTitle'>{this.state.ShortTitle.Stitle2}</p>
            <h3 className='Title'>{this.state.Title.Title2}</h3>
            <p className='Disception'>{this.state.Disception.Disception2}</p>
            <p className='PostedBy'>{this.state.PostedBy.PostedBy2}</p>
            <p className='Date'>{this.state.Date.Date2}</p>
            <a href="#" className="btn btn-primary">See Post</a>
        </div>
      </div>
    </div>

    <div class="carousel-item">
      <div className='row'>
        <div className='col-md-6'>
            <img src="img/7.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div className='col-md-6'>
            <p className='ShortTitle'>{this.state.ShortTitle.Stitle3}</p>
            <h3 className='Title'>{this.state.Title.Title3}</h3>
            <p className='Disception'>{this.state.Disception.Disception3}</p>
            <p className='PostedBy'>{this.state.PostedBy.PostedBy3}</p>
            <p className='Date'>{this.state.Date.Date3}</p>
            <a href="#" className="btn btn-primary">See Post</a>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  <h3 className='mt-5'>Recent Post</h3>
</div>
    </div>
    )
  }
}
export default Carousel;