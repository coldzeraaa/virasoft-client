"use client";

import { useCallback } from "react";

import { MutationFunctionOptions } from "@apollo/client";
import { toast } from "react-toastify";

import {
  AddToCartMutation,
  AddToCartMutationHookResult,
  AddToCartMutationVariables,
  useAddToCartMutation,
} from "@/gql/mutation/checkout/add-to-cart.generated";
import { useMeQuery } from "@/gql/query/user/me.generated";

export function useAddToCart(): AddToCartMutationHookResult {
  const { data: dataMe } = useMeQuery();
  const [mutation, options] = useAddToCartMutation({
    onCompleted: (response) => {
      if (response?.addToCart?.id)
        toast.success(`Added to cart`, { position: "bottom-left" });
      else toast.error(`Failed to add to cart`);
    },
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          currentOrder: (previous, { DELETE }) => {
            if (data?.addToCart) {
              const { number, token } = data.addToCart;
              if (!dataMe?.me?.id)
                localStorage.setItem("order", `${number || ""}:${token || ""}`);
              if (previous) return { ...previous, ...data.addToCart };
              return { __ref: `Order:${data.addToCart.id}` };
            }
            if (!previous) return DELETE;
            return previous;
          },
        },
      });
    },
  });

  const addToCart = useCallback(
    (
      value?: MutationFunctionOptions<
        AddToCartMutation,
        AddToCartMutationVariables
      >,
    ) => {
      if (!dataMe?.me?.id) {
        const [number, token] = localStorage.getItem("order")?.split(":") || [];
        return mutation({
          ...value,
          variables: {
            ...value?.variables,
            input: {
              number,
              token,
              items: [],
              ...value?.variables?.input,
            },
          },
        });
      }

      return mutation(value);
    },
    [mutation, dataMe?.me?.id],
  );

  return [addToCart, options];
}
