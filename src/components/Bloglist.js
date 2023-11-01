import '../styles/bloglist.css'
const Bloglist=(props)=>{
    const{details}=props
    const{ title,description,publishedDate}=details
    return(
        <div className="bloglistcontainer">
            <div className="one">
                <h3>{title}</h3>
                <h4>{publishedDate}</h4>
            </div>
            <div className="two">
                <p style={{color:"grey"}}>{description}</p>
            </div>
        </div>
    )

}
export default Bloglist