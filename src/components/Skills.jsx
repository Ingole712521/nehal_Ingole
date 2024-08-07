import './Skills.css';

// Import SVG files
import AnsibleIcon from '../assets/logo/ansible.svg';
import AwsIcon from '../assets/logo/aws.svg';
import DockerIcon from '../assets/logo/docker.svg';
import KubernetesIcon from '../assets/logo/kubernetes.svg';
import JenkinsIcon from '../assets/logo/jenkins.svg';
import ReactIcon from '../assets/logo/react.svg';
import TerraformIcon from '../assets/logo/terraform.svg';
import JavaIcon from '../assets/logo/java.svg';
import MongoDBIcon from '../assets/logo/mongodb.svg';
import KafkaIcon from '../assets/logo/kafka.svg';
import PrometheusIcon from '../assets/logo/prometheus.svg';
import GrafanaIcon from '../assets/logo/grafana.svg';
import NextjsIcon from '../assets/logo/next.svg';
import ReactNativeIcon from '../assets/logo/react_native.svg';

const SKILLS = [
    { name: 'AWS', icon: AwsIcon },
    { name: 'Docker', icon: DockerIcon },
    { name: 'Kubernetes', icon: KubernetesIcon },
    { name: 'Jenkins', icon: JenkinsIcon },
    { name: 'React', icon: ReactIcon },
    { name: 'Terraform', icon: TerraformIcon },
    { name: 'Java', icon: JavaIcon },
    { name: 'MongoDB', icon: MongoDBIcon },
    { name: 'Kafka', icon: KafkaIcon },
    { name: 'Prometheus', icon: PrometheusIcon },
    { name: 'Grafana', icon: GrafanaIcon },
    { name: 'Next.js', icon: NextjsIcon },
    { name: 'React Native', icon: ReactNativeIcon },
    { name: 'Ansible', icon: AnsibleIcon }
];

const Skills = () => {
    return (
        <div className="skills-section" id="skills">
            <h2>My Skills</h2>
            <div className="skills-container">
                {SKILLS.map((skill, index) => (
                    <div key={index} className="skill">
                        <img src={skill.icon} alt={skill.name} className="skill-icon" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
