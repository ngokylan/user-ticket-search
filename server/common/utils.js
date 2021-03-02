/**
 *
 * @param data
 * @param criteria
 */
function getPagination(data, criteria) {
  const defaultPage = 1;
  const defaultResultPerpage = 10;
  const totalPages = Math.ceil(data.length / defaultResultPerpage);
  if (Object.keys(criteria).length === 0) {
    return {
      defaultPage,
      defaultResultPerpage,
      totalPages,
      totalResults: data.length,
    };
  }

  const {
    pagination: { pageNumber, resultsPerPage },
  } = criteria;

  return {
    pageNumber,
    resultsPerPage,
    totalPages,
    totalResults: data.length,
  };
}

function response(data, status) {
    return {
        data,
        status
    }
}

/**
 *
 * @param user
 * @param mappedEntity
 * @param userAttribute
 * @param mappedEntityAttribute
 */
function mapOneToOneRelationship(
    entity1,
    entity2,
    entity1Attribute,
    entity2Attribute
  ) {
    if (!entity1 || !entity2) {
      return null;
    }
  
    if (!entity1[entity1Attribute] || !entity2[entity2Attribute]) {
      return null;
    }
  
    return entity1[entity1Attribute] === entity2[entity2Attribute];
  }


exports.getPagination = getPagination;
exports.response = response;
exports.mapOneToOneRelationship = mapOneToOneRelationship;