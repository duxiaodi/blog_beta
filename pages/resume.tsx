import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

function Resume() {
  return (
    <Layout>
      <Head>
        <title>little forest | category</title>
      </Head>
      <div className="px-4 pt-2 md:pt-20 max-w-6xl mx-auto">
        <StaticInfo />
        <Projects />
      </div>
    </Layout>
  );
}

const StaticInfo = () => (
  <div>
    <h2>About</h2>
    <p>
      Tao Zhao lives in HangZhou, ZheJiang. He likes basketball, books, games
      and travel.
    </p>
    <p className="font-600">Math is my next programming language.</p>
    <br />
    <p>
      <b>Keywords: </b>
      <span>Functional Programming</span>、<span>Async Programming</span>、
      <span>Node.js/Koa/MongoDB</span>、<span>React/Redux</span>、
      <span>Next.js</span>、<span>Tailwindcss</span>
    </p>
    <LitterForest />
    <p className="resume-p">
      I am a senior front-end developer with 6 years of experience, and a
      code-aholic, invested a lot of time in the open source community,
      developing and maintaining several projects. I love to summarize & share.I
      originally joined the Cloud Music team at NetEase in Apr 2017, tasked to
      revamp the event details pages from an archaic MySpace-style design to a
      modern, fully responsive layout.
    </p>
  </div>
);

const LitterForest = () => (
  <div
    style={{
      filter: "grayscale(100%)",
    }}
  >
    <img
      src="https://p1.music.126.net/cApgVVmtcKYFyxunEmHCkA==/109951164540902241.jpg"
      className="rounded"
    />
  </div>
);

const Projects = () => (
  <div>
    <h2>Projects</h2>
    <div>
      <span className="text-18">
        <a target="_blank" href="https://github.com/lit-forest/react-magic">
          react-magic
        </a>
      </span>
      <p className="sub-text">
        A collection of magic animations for react components. Although React
        provides a way to implement arbitrary animations, it is not an easy task
        to do it, even for simple animations. That's where react-magic package
        comes in. It supports inline styles work with
        <a href="https://github.com/Khan/aphrodite" target="_blank">
          {" "}
          aphrodite
        </a>
        . Most animations was implemented base on
        <a href="https://github.com/miniMAC/magic" target="_blank">
          {" "}
          magic
        </a>
        .
      </p>
    </div>
    <div>
      <span className="text-18">
        <a
          target="_blank"
          href="https://github.com/x-orpheus/catch-react-error"
        >
          catch-react-error
        </a>
      </span>
      <div>
        <p className="sub-text">
          This package supports both React and React Native.
        </p>
        <p className="sub-text">
          This project make it easy to protect your react source code.
        </p>
        <p className="sub-text">
          We combine decorators and React Error Boundaries together.
        </p>
        <p className="sub-text">
          The React Error Boundaries don't support the Server Side Rendering，so
          we use try/catch to deal such condition.
        </p>
      </div>
    </div>
    <div>
      <span className="text-18">
        <a
          target="_blank"
          href="https://github.com/lit-forest/leaflet.migrationLayer"
        >
          leaflet.migrationLayer
        </a>
      </span>
      <p className="sub-text">
        leafet.migrationLayer is used to show migration data such as
        population,flight,vehicle,traffic and so on.Data visualization on map.
      </p>
    </div>
  </div>
);

export default Resume;
