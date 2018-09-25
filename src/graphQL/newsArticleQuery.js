import gql from "graphql-tag";


const GET_ARTICLE = gql`
query GetArticle($path: String!) {
  route:route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        ... on NodeArticle {
          created
          nid
          title
          entityUrl {
            path
            routed
          }
          fieldImage{
            url
            alt
          }
          fieldCategory {
            entity {
              name
              tid
            }
          }
          body {
            value
            processed
            summary
            summaryProcessed
          }
        }
         ... on EntityOwnable {
          entityOwner {
            uid
            entityLabel
            entityId
          	entityUrl {
          	  path
          	  routed
          	}
          }
        }
      }
    }
  }
}
`;

export default GET_ARTICLE;




