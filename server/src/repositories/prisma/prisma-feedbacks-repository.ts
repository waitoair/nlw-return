import { prisma } from "../../prisma";
import { feedbackCreateData, feedbacksRepository } from "../feedbacks-repository";

export class PrismaFeedbacksRepository implements feedbacksRepository {
  async create({ type, comment, screenshot }: feedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
      }
    })
  };
}