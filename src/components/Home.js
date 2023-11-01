import Bloglist from './Bloglist'
import '../styles/home.css'
const blogsList = [
    {
      id: 1,
      title: 'My first post',
      description: 'A high quality solution beautifully designed for startups',
      publishedDate: 'Aug 2nd',
    },
    {
      id: 2,
      title: 'My second post',
      description:
        'A high quality solution beautifully designed for startups and Bussiness schools',
      publishedDate: 'Mar 1st',
    },
    {
      id: 3,
      title: 'My third post',
      description: 'A high quality solution beautifully designed for startups',
      publishedDate: 'Jan 2nd',
    },
    {
      id: 4,
      title: 'My fourth post',
      description:
        'A high quality solution beautifully designed for startups and Bussiness schools. ',
      publishedDate: 'Dec 24th',
    },
    {
      id: 5,
      title: 'My fifth post',
      description: 'A high quality solution beautifully designed for startups',
      publishedDate: 'Nov 10th',
    },
  ]

const Home=()=>{
    return(
        <div className="homecontainer">
            <div className='profile'>
                <img src="https://assets.ccbp.in/frontend/react-js/profile-img.png" className='pro' alt="profile"/>
                <h1>Wade Warren</h1>
                <h4>Software Developer at UK</h4>
            </div>
            {blogsList.map(details=>(
                <Bloglist details={details} key={details.id}/>
         ))}
        </div>

    )
}
export default Home