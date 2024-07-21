"use server";
import { Transaction } from "@prisma/client";
import { db } from "../../../db";

export const getTransactions = async () => {
  const res = await db.transaction.findMany();
  return res;
};

export const createTransaction = async (data: Transaction) => {
  const res = await db.transaction.create({
    data,
  });
  return res;
};

export const updateTransaction = async (id: string, data: Transaction) => {
  const res = await db.transaction.update({
    where: {
      id,
    },
    data,
  });
  return res;
};

export const deleteTransaction = async (id: string) => {
  const res = await db.transaction.delete({
    where: {
      id,
    },
  });
  return res;
};
