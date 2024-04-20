import { Prisma } from "@prisma/client";
import { prisma } from "../../../lib/prisma";
import { CSV, HTTPError, getErrorMessage } from "../../../utils";
import { TransactionParams } from "../../domain";

const PAGESIZE = 100;

export class TransactionRepository {
  constructor() {}

  async getTransactions(params: TransactionParams) {
    try {
      const { filter, page } = params;
      const where = buildFilter(filter);

      const [result, counts] = await prisma.transaction.findManyAndCount({
        where,
        skip: skip(page),
        take: PAGESIZE,
      });
      return { data: result, total: counts };
    } catch (error) {
      const message = getErrorMessage(error);

      throw new HTTPError(message, 500, "Database error");
    }
  }

  async seed() {
    try {
      const csv = new CSV("data.csv");
      const hasData = await prisma.transaction.count();

      if (hasData > 0) {
        return null;
      }

      const csvRows = await csv.readCSV();
      await prisma.transaction.createMany({
        data: csvRows,
      });

      return true;
    } catch (error) {
      const message = getErrorMessage(error);

      throw new HTTPError(message, 500, "Database error");
    }
  }
}

function buildFilter(
  filter: TransactionParams["filter"]
): Prisma.TransactionWhereInput {
  const whereAnd: Prisma.TransactionWhereInput[] = [];
  const where: Prisma.TransactionWhereInput = { AND: whereAnd };

  if (filter?.nrCpfCnpj)
    whereAnd.push({
      nrCpfCnpj: {
        in: [filter.nrCpfCnpj],
      },
    });

  if (filter?.nrProposta)
    whereAnd.push({
      nrProposta: {
        in: [filter.nrProposta],
      },
    });

  return where;
}

function skip(pageNumber?: string) {
  return pageNumber ? (Number(pageNumber) - 1) * PAGESIZE : 0;
}
