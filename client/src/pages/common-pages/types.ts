export interface UserType {
  _id: string;
  url: string;
  external_id: string;
  name: string;
  alias: string;
  created_at: string;
  active: string;
  verified: string;
  shared: string;
  locale: string;
  timezone: string;
  last_login_at: string;
  email: string;
  phone: string;
  signature: string;
  organization_id: string;
  tags0: string;
  tags1: string;
  tags2: string;
  tags3: string;
  suspended: string;
  role: string;
  organization_name: string;
}

export interface TicketType {
  _id: string;
  url: string;
  external_id: string;
  created_at: string;
  type: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  submitter_id: string;
  assignee_id: string;
  organization_id: string;
  tags0: string;
  tags1: string;
  tags2: string;
  tags3: string;
  has_incidents: string;
  due_at: string;
  via: string;
}
export interface ResultItemType extends UserType {
  assigned_tickets: any;
  submitted_tickets: any;
}
