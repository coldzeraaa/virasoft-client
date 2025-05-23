import Client from "@searchkit/api";
import { NextRequest, NextResponse } from "next/server";

import { HOST_CONFIG } from "@/configs/HOST_CONFIG";

const client = Client(
  {
    search_settings: {
      highlight_attributes: ["name"],
      snippet_attributes: ["title"],
      search_attributes: [
        { field: "sku", weight: 4 },
        { field: "name", weight: 4 },
        { field: "title", weight: 3 },
        { field: "property.brand", weight: 2 },
        "description",
      ],
      sorting: {
        default: { field: "_score", order: "desc" },
        new: { field: "created_at", order: "desc" },
        earliest: { field: "created_at", order: "asc" },
        cheap: { field: "price", order: "asc" },
        expensive: { field: "price", order: "desc" },
        sale: { field: "sale_percent", order: "desc" },
      },
      result_attributes: [
        "id",
        "name",
        "title",
        "slug",
        "price",
        "images",
        "pid",
        "vendor",
      ],
      facet_attributes: [
        { attribute: "brand", field: "brand.name.keyword", type: "string" },
        { attribute: "vendor", field: "vendor.name.keyword", type: "string" },
        { attribute: "color", field: "property.color.keyword", type: "string" },
        { attribute: "price", field: "price", type: "numeric" },
        { attribute: "t1", field: "taxons_lvl.lvl1", type: "string" },
        { attribute: "t2", field: "taxons_lvl.lvl2", type: "string" },
        { attribute: "t3", field: "taxons_lvl.lvl3", type: "string" },
        { attribute: "t4", field: "taxons_lvl.lvl4", type: "string" },
        { attribute: "options", field: "options.keyword", type: "string" },
      ],
    },
    connection: {
      host: HOST_CONFIG.elastic.host,
      auth: {
        username: HOST_CONFIG.elastic.username,
        password: HOST_CONFIG.elastic.password,
      },
    },
  },
  { debug: false },
);

export async function POST(request: NextRequest) {
  const json = await request.json();

  const results = await client.handleRequest(json, {
    getBaseFilters: () => [
      // {
      //   bool: {
      //     must: [{ range: { price: { gt: 1 } } }, { exists: { field: 'image' } }],
      //     should: undefined,
      //   },
      // },
    ],
  });
  return NextResponse.json(results);
}
