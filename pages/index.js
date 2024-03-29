import Head from 'next/head';
import {getAllProjects} from "../lib/projects";


export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'content',
    'excerpt',
    'languages',
    'url',
    'link'
  ]);

  return {
    props: {allProjects},
  };
}

export default function Home({allProjects}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <main>
        <div class="block">
          <h1>About Me</h1>
          <p>
            Hi! I’m Spencer. I’ve been programming since 2014, and love what I do.
            I like to code things from the ground up, and enjoy seeing my ideas come to life.
            I’ve made websites, games, web applications, and desktop applications.
            I’m constantly looking to improve my skills, and I’d be excited to work with you!
          </p>
        </div>
        <div class="block">
          <h1>Tools & Frameworks</h1>
          <section className="language-grid">
            <div className="language-item">
              <h2>Programming</h2>
              <p>HTML</p>
              <p>CSS</p>
              <p>Javascript</p>
              <p>Python</p>
              <p>Java</p>
              <p>C</p>
              <p>C#</p>
              <p>SQL</p>
            </div>
            <div className="language-item">
              <h2>Tools</h2>
              <p>Netlify</p>
              <p>Bluehost</p>
              <p>Wordpress</p>
              <p>Git & Github</p>
              <p>Unity</p>
            </div>
            <div className="language-item">
              <h2>Frameworks</h2>
              <p>Django</p>
              <p>Next.js</p>
              <p>Bootstrap</p>
            </div>
          </section>
        </div>
        <h1 style={{textAlign: "center"}}>Projects</h1>
        <section className="project-grid">
          {allProjects.map(project => (
              <div className="project-item">
                <h5>{project.title} ({project.date})</h5>
                <p>{project.content}</p>
                <p>Tools used: {project.languages}</p>
                <a href={project.url} target="_blank">Code</a>
                <p>{project.link ? <a href={project.link} target="_blank">Working project</a> : null}</p>
              </div>
            )
          )}
        </section>
      </main>
    </>


  );
}
