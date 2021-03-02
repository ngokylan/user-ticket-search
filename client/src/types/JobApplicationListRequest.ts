import { JobApplicationStatus } from './JobApplicationItem';

export interface JobApplicationListRequest {
  pagination: {
    resultsPerPage: number;
    pageNumber: number;
  };
  sort?: {
    field?: string;
    order?: string;
  };
  searchOptions?: {
    searchKey?: string;
    myRecords?: boolean;
  };
}
