import styles from "../styles/Home.module.css";

import type { NextPage } from "next";
import Head from "next/head";

import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import { useReducer } from "react";

import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import MyBusinesses from "../components/MyBusinesses";
import TechnologiesList from "../components/TechnologiesList";

interface actionType {
  type: string;
}

function displayReducer(
  state: Array<boolean>,
  action: actionType
): Array<boolean> {
  switch (action.type) {
    case "projects":
      return handleButtonsClicked(state, 0);
    case "business":
      return handleButtonsClicked(state, 1);
    case "techs":
      return handleButtonsClicked(state, 2);
  }
  return [...state];
}

const Home: NextPage = ({
  sortedProjects
}: any) => {
  const [displayElement, dispatch] = useReducer(displayReducer, [
    true,
    false,
    false,
  ]);
  return (
    <>
      <Head>
        <title>Carlos Alegre's Web</title>
        <meta
          name="Software Dev Web: Carlos Alegre Urquizú"
          content="Personal projects' web page of software engineer Carlos Alegre Urquizú"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="main-header"> Carlos Alegre's portfiolio</header>
      <div className="video-div">
        <video autoPlay loop muted src="./videos/stars.mp4" />
      </div>
      <main className="block space-font">
        <button
          className="button3d"
          onClick={() => {
            console.log("Activaying 3D... (to be implemented)");
          }}
        >
          Activate 3D animation {"(todo...)"}
        </button>

        <section className="main-section">
          <AboutMe />

          <div className="content-showing-section">
            {displayElement[0] && <Projects projects={sortedProjects} />}
            {displayElement[1] && <MyBusinesses />}
            {displayElement[2] && <TechnologiesList />}
          </div>

          <div className="buttons-div">
            <button
              onClick={() => {
                dispatch({ type: "projects" });
              }}
            >
              {" "}
              PROJECTS{" "}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "business" });
              }}
            >
              {" "}
              MY BUSINESSES{" "}
            </button>
            <button
              onClick={() => {
                dispatch({ type: "techs" });
              }}
            >
              {" "}
              TECHNOLOGIES TRIED/USED{" "}
            </button>
          </div>
        </section>
      </main>
      <footer> GO BACK TO THE TOP </footer>
    </>
  );
};

export default Home;

function handleButtonsClicked(
  state: Array<boolean>,
  position: number
): Array<boolean> {
  return [...state].map((element, index) => {
    if (index === position) {
      return true;
    } else {
      return false;
    }
  });
}

export const getStaticProps = async () => {
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_READ_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        viewer {
          login
        }
        user(login: "CarlosAlegreUr") {
          pinnedItems(first: 6) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  repositoryTopics(first: 10) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const query = await client.query({
    query: gql`
      {
        user(login: "CarlosAlegreUr") {
          pinnableItems(first: 10) {
            edges {
              node {
                ... on Repository {
                  id
                  name
                  description
                  url
                  repositoryTopics(first: 10) {
                    edges {
                      node {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  const allRepos: any = query.data.user.pinnableItems.edges;
  const webRepos = await filterByTopic("web", allRepos);
  const web3Repos = await filterByTopic("web3", allRepos);
  const aiRepos = await filterByTopic("AI", allRepos);
  const phoneAppsRepos = await filterByTopic("phoneApp", allRepos);

  const { user } = data;
  const pinnedItems = user.pinnedItems.edges.map(({ node }: any) => node);

  const sortedProjects = {
    githubPinnedProjects: pinnedItems,
    githubWebProjects: webRepos,
    githubWeb3Projects: web3Repos,
    githubAiProjects: aiRepos,
    githubPhoneAppsProjects: phoneAppsRepos,
  };

  return {
    props: {
      sortedProjects,
    },
    revalidate: 648000,
  };
};

function filterByTopic(topic: string, allRepos: Array<any>) {
  const filtered = allRepos.filter(({ node }) => {
    let belongsToTopic = false;
    node.repositoryTopics.edges.forEach((element: any) => {
      if (element.node.topic.name === topic) belongsToTopic = true;
    });
    return belongsToTopic;
  });
  return filtered.map((repository)=>repository.node);
}
