import gql from "graphql-tag";



const GET_ARTICLES = gql`

  query nodeQuery($dateNow: String!, $limit: Int!, $offset: Int!){
    nodeQuery(offset:$offset, limit:$limit,  sort: [{field: "created", direction: DESC}], filter: {conditions: [{operator: EQUAL, field: "type", value: ["Article"]}, {operator: SMALLER_THAN_OR_EQUAL, field: "created", value: [$dateNow] }]}) {
      entities {
        ... on Node {
          created
          nid
          title
          entityUrl {
            path
            routed
          }
          fieldCategory {
            entity {
              name
              tid
            }
          }
          fieldImage{
            url
            alt
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

`;

export default GET_ARTICLES;




