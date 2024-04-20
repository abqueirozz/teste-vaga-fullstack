import { Prisma, PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  //log:['query']
}).$extends(getFindManyAndCountExtension());

function getFindManyAndCountExtension() {
  return Prisma.defineExtension({
    name: "findManyAndCount",
    model: {
      $allModels: {
        findManyAndCount<Model, Args>(
          this: Model,
          args: Prisma.Exact<Args, Prisma.Args<Model, "findMany">>
        ): Promise<
          [
            Prisma.Result<Model, Args, "findMany">,
            number,
            Args extends { take: number } ? number : undefined
          ]
        > {
          return prisma?.$transaction([
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (this as any).findMany(args),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (this as any).count({ where: (args as any).where }),
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ]) as any;
        },
      },
    },
  });
}
