import React, { Component } from 'react'
import { withRouteData, Link } from 'react-static'
import { Img } from '../components/image-loader'
import Markdown from 'react-markdown'
import MediaQuery from 'react-responsive'
import Project from '../containers/Project'

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      currentProject: 0
    }
  }

  render () {
    const projects = this.props.projects;
    return (
      <div className="page-content projects-page">
        <ul>
          {projects.map((project, index) => (
            <li className="project" key={project.data.slug}>
                <Link to={`projects/project/${project.data.slug}`}>
                  <h2 className="project-title">
                    {project.data.title}
                  </h2>
                  <Img
                    className="project-cover"
                    name={"portfolio/" + project.data.slug}
                  />
                </Link>
              <Markdown
                className="project-content"
                source={project.data.summary}
                escapeHtml={false}
              />
              <MediaQuery maxWidth={1024}>
                <Link className="project-more-link" to={`projects/project/${project.data.slug}`}>
                  view project
                </Link>
              </MediaQuery>
              <MediaQuery minWidth={1024}>
                <a onClick={() => this.setState({currentProject: index})}>
                  view project
                </a>
              </MediaQuery>
            </li>
          ))}
          <li className="project" key="past work">
            Previous Projects
          </li>
        </ul>
        <MediaQuery minWidth={1024}>
          {console.log(projects, this.state.currentProject) || <Project project={projects[this.state.currentProject]}/>}
        </MediaQuery>
      </div>
    )
  }
}

export default withRouteData(Projects)
