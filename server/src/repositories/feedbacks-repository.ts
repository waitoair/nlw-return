export interface feedbackCreateData {
  type: string;
  comment: string;
  screenshot?: string;
}

export interface feedbacksRepository {
  create: (data: feedbackCreateData) => Promise<void>;
}