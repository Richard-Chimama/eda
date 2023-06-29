import { gql } from '@apollo/client';


const HOSPITAL_NOTIFICATION = gql`
    subscription Notification($hospitalId: String!) {
    notification(hospitalId: $hospitalId) {
        id
        message
        createdAt
        patient {
        id
        id_card
        area
        avatar
        code
        contact_person
        contact_person_phone_number
        createdAt
        date_of_birth
        first_name
        gender
        last_name
        middle_name
        patient_phone_number
        street_address
        }
    }
}
`;

const NEW_POST_BY_HOSPITAL = gql`
  subscription PostsByHospital($hospitalId: String!) {
    postsByHospital(hospitalId: $hospitalId) {
      id
      content
      comments {
        id
        comment
        user {
          id
          avatar
          username
        }
      }
      likes {
        like
        id
        user {
          id
          username
          avatar
        }
      }
      author {
        username
        id
        avatar
      }
    }
  }
`;

const NEW_COMMENT = gql`
    subscription NewComment($postId: String!) {
  newComment(postId: $postId) {
    id
    comment
    createdAt
    user {
      id
      username
      avatar
    }
    post{
        id
    }
  }
}
`

export default{
    HOSPITAL_NOTIFICATION,
    NEW_POST_BY_HOSPITAL,
    NEW_COMMENT
}