import MacWindow from '../MacWindow'
import githubData from '../../assets/github.json'

const Github = ({ windowName, setWindowsState }) => (
  <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
    <div className="cards">
      {githubData.map((project, i) => (
        <div key={i} className="card">
          <img src={project.image} alt={project.title} />
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
          </div>
          <a href={project.repoLink}>Repository</a>
        </div>
      ))}
    </div>
  </MacWindow>
)

export default Github