
import '../Style/work.css'; 
import GithubImage from '../assets/github.png';
import TerraformImage from '../assets/Terraform.png';
import LinkedInImage from '../assets/LinkedIn.png';
import TwitterImage from '../assets/Twitter.png';
import HashnodeImage from '../assets/Hashnode.jpg';

const WORKS = [
    { image: GithubImage, link: "https://github.com/Ingole712521" },
    { image: TerraformImage, link: "https://registry.terraform.io/namespaces/Ingole712521" },
    { image: LinkedInImage, link: "https://www.linkedin.com/in/nehal-ingole/" },
    { image: TwitterImage, link: "https://twitter.com/IngoleNehal" },
    { image: HashnodeImage, link: "https://hashnode.com/@Nehal71" },
];

const Work = () => {
    return (
        <div className="work-section" id="work">
            <h2 className="text-center text-4xl font-semibold mb-8">Visit My Work</h2>
            <div className="work-container">
                {WORKS.map((work, index) => (
                    <div key={index} className="work-item">
                        <img src={work.image} alt={`Project ${index + 1}`} className="work-image" />
                        <div className="overlay">
                            <a href={work.link} target="_blank" rel="noopener noreferrer" className="work-link">
                                Visit Website
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
