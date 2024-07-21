"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useToast } from "../../../components/ui/use-toast";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "./action";
import { Transaction } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
const Transactions = () => {
  const { toast } = useToast();
  const { mutate: createTrans, isPending: isCreating } = useMutation({
    mutationKey: ["create-transaction"],
    mutationFn: createTransaction,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Transaction created successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Error in creating a transaction",
        variant: "destructive",
      });
    },
  });
  //mutation func to udpate,delete and query function to get all transactions
  const { mutate: updateTrans, isPending: isUpdating } = useMutation({
    mutationKey: ["update-transaction"],
    mutationFn: ({ id, data }: { id: string; data: Transaction }) =>
      updateTransaction(id, data),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Transaction updated successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Error in updating the transaction",
        variant: "destructive",
      });
    },
  });

  const {} = useMutation({
    mutationKey: ["delete-transaction"],
    mutationFn: deleteTransaction,
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Transaction deleted successfully",
        variant: "default",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Error in deleting the transaction",
        variant: "destructive",
      });
    },
  });

  //get transations
  const { data: transactions, isFetching } = useQuery({
    queryKey: ["get-transactions"],
    queryFn: getTransactions,
    refetchInterval: 10000,
  });

  if (isFetching) {
    return (
      <main className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin" />
      </main>
    );
  }
  return (
    <main className="flex justify-center items-center h-screen">
      {(!transactions || transactions.length === 0) && (
        <Button className="flex gap-2">
          Create Transaction
          <span>+</span>
        </Button>
      )}
    </main>
  );
};

export default Transactions;
