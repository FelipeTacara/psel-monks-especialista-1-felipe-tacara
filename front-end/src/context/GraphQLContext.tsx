import React, { createContext, useContext, useState, useEffect } from "react";

interface CardsData {
  id: number;
  title: string;
  text: string;
  url: string;
  button_text: string;
}

interface ProductCardsData {
  id: number;
  title: string;
  text: string;
  imgUrl: string;
}

interface ProductData {
  id: string;
  title: string;
  text: string;
}

interface SimpleGalleryData {
  id: string;
  title: string;
  text: string;
  mainImageUrl: string;
  secondaryImageUrl: string;
  terciaryImageUrl: string;
}

interface AppSectionData {
  id: string;
  title: string;
  text: string;
}

interface TagSectionData {
  id: string;
  title: string;
  tags: string[];
}

interface FormSectionData {
  id: string;
  title: string;
  subtitle: string;
  text: string;
  inputs: string[];
  buttonText: string;
}

interface FooterSectionData {
  id: string;
  title: string;
  texts: string[];
}

interface NavbarLink {
  text: string;
  url: string;
}

interface NavbarSectionData {
  id: string;
  links: NavbarLink[]; // Array de links
}

interface GraphQLContextType {
  cards: CardsData[];
  productCards: ProductCardsData[];
  products: ProductData[];
  simpleGalleries: SimpleGalleryData[];
  appSections: AppSectionData[];
  tagSections: TagSectionData[];
  formSections: FormSectionData[];
  footerSections: FooterSectionData[];
  navbarSections: NavbarSectionData[];
  loading: boolean;
  fetchProductCards: () => Promise<void>;
  fetchCards: () => Promise<void>;
  fetchProducts: () => Promise<void>;
  fetchSimpleGalleries: () => Promise<void>;
  fetchAppSections: () => Promise<void>;
  fetchTagSections: () => Promise<void>;
  fetchFormSections: () => Promise<void>;
  fetchFooterSections: () => Promise<void>;
  fetchNavbarSections: () => Promise<void>;
}

const GraphQLContext = createContext<GraphQLContextType>({
  cards: [],
  productCards: [],
  products: [],
  simpleGalleries: [],
  appSections: [],
  tagSections: [],
  formSections: [],
  footerSections: [],
  navbarSections: [],
  loading: true,
  fetchCards: async () => {},
  fetchProductCards: async () => {},
  fetchProducts: async () => {},
  fetchSimpleGalleries: async () => {},
  fetchAppSections: async () => {},
  fetchTagSections: async () => {},
  fetchFormSections: async () => {},
  fetchFooterSections: async () => {},
  fetchNavbarSections: async () => {},
});

export const GraphQLProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<CardsData[]>([]);
  const [productCards, setProductCards] = useState<ProductCardsData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState(true);
  const [simpleGalleries, setSimpleGalleries] = useState<SimpleGalleryData[]>(
    []
  );
  const [appSections, setAppSections] = useState<AppSectionData[]>([]);
  const [tagSections, setTagSections] = useState<TagSectionData[]>([]);
  const [formSections, setFormSections] = useState<FormSectionData[]>([]);
  const [footerSections, setFooterSections] = useState<FooterSectionData[]>([]);
  const [navbarSections, setNavbarSections] = useState<NavbarSectionData[]>([]);

  const graphqlFetch = async (query: string) => {
    const API_URL = import.meta.env.VITE_GRAPHQL_URL;

    // Verifica se a URL está configurada
    if (!API_URL) {
      throw new Error("Variável VITE_GRAPHQL_URL não definida no .env.local");
    }

    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    const json = await res.json();
    return json.data;
  };

  const fetchCards = async () => {
    setLoading(true);
    const query = `
    query {
      cards {
        edges {
          node {
            id
            reactCard {
              buttonText
              link
              text
              title
            }
          }
        }
      }
    }
  `;
    const data = await graphqlFetch(query);

    const parsedCards = data.cards.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.reactCard.title,
      text: edge.node.reactCard.text,
      url: edge.node.reactCard.link,
      button_text: edge.node.reactCard.buttonText,
    }));

    setCards(parsedCards);
    setLoading(false);
  };

  const fetchProductCards = async () => {
    const query = `
      query {
        productCards {
          edges {
            node {
              id
              productcardprops {
                text
                title
                imgurl {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    `;
    const data = await graphqlFetch(query);

    const parsedProductCards = data.productCards.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.productcardprops.title,
      text: edge.node.productcardprops.text,
      imgUrl: edge.node.productcardprops.imgurl?.node?.sourceUrl || "", // Safe navigation com fallback
    }));

    setProductCards(parsedProductCards);
  };

  const fetchProducts = async () => {
    const query = `
      query {
        products {
          edges {
            node {
              id
              productprops {
                text
                title
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedProducts = data.products.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.productprops.title,
      text: edge.node.productprops.text,
    }));

    setProducts(parsedProducts);
  };

  const fetchSimpleGalleries = async () => {
    const query = `
      query {
        simpleGalleries {
          edges {
            node {
              id
              simplegalleryprops {
                text
                title
                mainImage {
                  node {
                    sourceUrl
                  }
                }
                secondaryImage {
                  node {
                    sourceUrl
                  }
                }
                terciaryImage {
                  node {
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedGalleries = data.simpleGalleries.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.simplegalleryprops.title,
      text: edge.node.simplegalleryprops.text,
      mainImageUrl:
        edge.node.simplegalleryprops.mainImage?.node?.sourceUrl || "",
      secondaryImageUrl:
        edge.node.simplegalleryprops.secondaryImage?.node?.sourceUrl || "",
      terciaryImageUrl:
        edge.node.simplegalleryprops.terciaryImage?.node?.sourceUrl || "",
    }));

    setSimpleGalleries(parsedGalleries);
  };

  const fetchAppSections = async () => {
    const query = `
      query {
        appSections {
          edges {
            node {
              id
              appsectionprops {
                text
                title
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedAppSections = data.appSections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.appsectionprops.title,
      text: edge.node.appsectionprops.text,
    }));

    setAppSections(parsedAppSections);
  };

  const fetchTagSections = async () => {
    const query = `
      query {
        tagSections {
          edges {
            node {
              id
              tagsectionprops {
                title
                tagsgroup
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedTagSections = data.tagSections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.tagsectionprops.title,
      tags: edge.node.tagsectionprops.tagsgroup
        .split(",") // Divide a string em array
        .map((tag: string) => tag.trim()) // Remove espaços em branco
        .filter((tag: string) => tag.length > 0), // Remove strings vazias
    }));

    setTagSections(parsedTagSections);
  };

  const fetchFormSections = async () => {
    const query = `
      query {
        formSections {
          edges {
            node {
              id
              formsectionprops {
                title
                subtitle
                text
                input1
                input2
                input3
                input4
                buttonText
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedFormSections = data.formSections.edges.map((edge: any) => {
      const props = edge.node.formsectionprops || {};

      // Coletar inputs em um array, filtrando valores vazios
      const inputs = [
        props.input1,
        props.input2,
        props.input3,
        props.input4,
      ].filter((input) => input && input.trim().length > 0);

      return {
        id: edge.node.id,
        title: props.title || "",
        subtitle: props.subtitle || "",
        text: props.text || "",
        buttton_text: props.buttonText || "",
        inputs,
      };
    });

    setFormSections(parsedFormSections);
  };

  const fetchFooterSections = async () => {
    const query = `
      query {
        footerSections {
          nodes {
            id
            footerprops {
              title
              text1
              text2
              text3
              text4
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedFooterSections = data.footerSections.nodes.map((node: any) => {
      const props = node.footerprops || {};

      // Coletar todos os textos em um array, filtrando valores vazios
      const texts = [props.text1, props.text2, props.text3, props.text4].filter(
        (text) => text && text.trim().length > 0
      );

      return {
        id: node.id,
        title: props.title || "",
        texts,
      };
    });

    setFooterSections(parsedFooterSections);
  };

  const fetchNavbarSections = async () => {
    const query = `
      query {
        navbarSections {
          edges {
            node {
              id
              navbarprops {
                linktext1
                linktext2
                linktext3
                linktext4
                url1
                url2
                url3
                url4
              }
            }
          }
        }
      }
    `;

    const data = await graphqlFetch(query);

    const parsedNavbarSections = data.navbarSections.edges.map((edge: any) => {
      const props = edge.node.navbarprops || {};

      // Coletar todos os links válidos em um array
      const links: NavbarLink[] = [];

      // Adicionar cada par de linktext/url se ambos existirem
      for (let i = 1; i <= 4; i++) {
        const text = props[`linktext${i}`];
        const url = props[`url${i}`];

        if (text && url) {
          links.push({
            text: text.trim(),
            url: url.trim(),
          });
        }
      }

      return {
        id: edge.node.id,
        links,
      };
    });

    setNavbarSections(parsedNavbarSections);
  };

  useEffect(() => {
    fetchCards();
    fetchProductCards();
    fetchProducts();
    fetchSimpleGalleries();
    fetchAppSections();
    fetchTagSections();
    fetchFormSections();
    fetchFooterSections();
    fetchNavbarSections();
  }, []);

  return (
    <GraphQLContext.Provider
      value={{
        cards,
        productCards,
        products,
        simpleGalleries,
        appSections,
        tagSections,
        formSections,
        footerSections,
        loading,
        fetchCards,
        fetchProductCards,
        fetchProducts,
        fetchSimpleGalleries,
        fetchAppSections,
        fetchTagSections,
        fetchFormSections,
        fetchFooterSections,
        navbarSections,
        fetchNavbarSections,
      }}
    >
      {children}
    </GraphQLContext.Provider>
  );
};

export const useGraphQL = () => useContext(GraphQLContext);
