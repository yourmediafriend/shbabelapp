import gql from "graphql-tag";


const GET_ARTICLE = gql`
query GetArticle($path: String!) {
  route:route(path: $path) {
    ... on EntityCanonicalUrl {
      entity {
        ... on Node {
          created
          nid
          title
          entityUrl {
            path
            routed
          }
          uid {
            targetId
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




