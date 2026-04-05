import { projects } from '@/data/projects'
import ProjectsListClient from '@/components/ProjectsListClient'

export const metadata = {
  title: 'Projects | AryanDivyanshu',
  description: 'Showcase of my projects and work',
}

export default function ProjectsPage() {
  return <ProjectsListClient projects={projects} />
}
