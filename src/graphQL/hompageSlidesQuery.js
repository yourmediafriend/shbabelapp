import gql from "graphql-tag";


const GET_GRID = gql`
query nodeQuery($limit: Int!) {
  nodeQuery(limit: $limit, sort: [{field: "created", direction: DESC}], filter: {conditions: [{operator: EQUAL, field: "type", value: ["homepage_slides"]}]}) {
    entities {
      ... on NodeHomepageSlides {
        nid
        title
        fieldBackgroundText
        body {
          value
          processed
          summary
          summaryProcessed
        }
      }
    }
  }
}

`;

export default GET_GRID;




