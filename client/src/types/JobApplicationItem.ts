import { Action } from "./Action";

export interface IdLabelInterface {
  id: number;
  label: string;
}

export interface JobApplicationItem {
  id: string;
  status: string;  
  createdDate: string;
  dueDate: string;
  allowedActions: Action[];
  department?: string;
  location?: string;
  jobType?: string;
  activeJobAdsCount?: number;
  owner?: IdLabelInterface;
  requester?: IdLabelInterface;
}

export enum JobApplicationStatus {
  New,
  Sucessfull,
  Unsucessfull,
  Shortlist,
  InProgress,
  Offer
}

export const JobApplicationStatuses = {
  pending: 'pending',
  open: 'open',
  rejected: 'rejected',
  withdrawn: 'withdrawn',
  finalised: 'finalised',
  closed: 'closed',
  resubmitted: 'resubmitted'
};

export type Status =
  typeof JobApplicationStatuses.pending
  | typeof JobApplicationStatuses.open
  | typeof JobApplicationStatuses.rejected
  | typeof JobApplicationStatuses.withdrawn
  | typeof JobApplicationStatuses.finalised
  | typeof JobApplicationStatuses.closed
  | typeof JobApplicationStatuses.resubmitted
  ;