import { Metadata } from "next";
import { Suspense } from "react";

import Search from "@/app/ui/search";
import { lusitana } from "@/app/ui/fonts";
import Table from "@/app/ui/customers/table";
import { CustomersTableSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";

  return (
    <main>
      <div className="w-full">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Customers
        </h1>
        <Search placeholder="Search customers..." />
        <Suspense key={query} fallback={<CustomersTableSkeleton />}>
          <Table query={query} />
        </Suspense>
      </div>
    </main>
  );
}
