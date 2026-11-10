"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  PiCaretDownLight,
  PiFadersLight,
  PiMagnifyingGlassLight,
  PiXLight,
} from "react-icons/pi";
import {
  products,
  type LaceType,
  type Length,
  type Texture,
} from "@/lib/products";
import Pagination from "@/components/shop/Pagination";
import ProductCard from "@/components/shop/ProductCard";

type SortOption = "featured" | "newest" | "price-asc" | "price-desc";

const PAGE_SIZE = 8;

const textures: Texture[] = ["Straight", "Wavy", "Curly"];
const lengths: Length[] = ["Short", "Medium", "Long"];
const laces: LaceType[] = ["13×4", "13×6", "HD lace", "Glueless"];
const priceRanges = [
  { id: "under-100k", label: "Under 100 000 FCFA", min: 0, max: 99999 },
  { id: "100k-120k", label: "100 000 – 120 000 FCFA", min: 100000, max: 120000 },
  { id: "over-120k", label: "Over 120 000 FCFA", min: 120001, max: Infinity },
] as const;

function toggleValue<T extends string>(list: T[], value: T) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-line py-6">
      <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-champagne-deep">
        {title}
      </p>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-[0.92rem] text-cocoa-soft transition-colors hover:text-cocoa">
      <span
        className={`grid size-4 shrink-0 place-items-center border transition-colors ${
          checked
            ? "border-cocoa bg-cocoa text-pearl"
            : "border-line-strong bg-transparent"
        }`}
        aria-hidden
      >
        {checked ? (
          <span className="block size-1.5 bg-pearl" />
        ) : null}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      {label}
    </label>
  );
}

export default function ShopCatalog() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");
  const [selectedTextures, setSelectedTextures] = useState<Texture[]>([]);
  const [selectedLengths, setSelectedLengths] = useState<Length[]>([]);
  const [selectedLaces, setSelectedLaces] = useState<LaceType[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const initial = searchParams.get("q") ?? "";
    if (initial) setQuery(initial);
  }, [searchParams]);

  const filtered = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    let list = products.filter((product) => {
      if (trimmed) {
        const haystack = [
          product.name,
          product.detail,
          product.texture,
          product.length,
          product.lace,
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(trimmed)) return false;
      }
      if (
        selectedTextures.length > 0 &&
        !selectedTextures.includes(product.texture)
      ) {
        return false;
      }
      if (
        selectedLengths.length > 0 &&
        !selectedLengths.includes(product.length)
      ) {
        return false;
      }
      if (selectedLaces.length > 0 && !selectedLaces.includes(product.lace)) {
        return false;
      }
      if (selectedPrices.length > 0) {
        const match = priceRanges.some(
          (range) =>
            selectedPrices.includes(range.id) &&
            product.price >= range.min &&
            product.price <= range.max,
        );
        if (!match) return false;
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "newest") {
        return Number(Boolean(b.isNew)) - Number(Boolean(a.isNew));
      }
      return Number(Boolean(b.isBestSeller)) - Number(Boolean(a.isBestSeller));
    });

    return list;
  }, [
    query,
    selectedTextures,
    selectedLengths,
    selectedLaces,
    selectedPrices,
    sort,
  ]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));

  const paginated = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, currentPage]);

  useEffect(() => {
    setCurrentPage(0);
  }, [
    query,
    selectedTextures,
    selectedLengths,
    selectedLaces,
    selectedPrices,
    sort,
  ]);

  useEffect(() => {
    if (currentPage > pageCount - 1) {
      setCurrentPage(Math.max(0, pageCount - 1));
    }
  }, [currentPage, pageCount]);

  const activeCount =
    selectedTextures.length +
    selectedLengths.length +
    selectedLaces.length +
    selectedPrices.length +
    (query.trim() ? 1 : 0);

  function clearFilters() {
    setQuery("");
    setSelectedTextures([]);
    setSelectedLengths([]);
    setSelectedLaces([]);
    setSelectedPrices([]);
  }

  const searchField = (
    <label className="relative mb-5 block">
      <span className="sr-only">Search products</span>
      <PiMagnifyingGlassLight
        size={18}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-cocoa-muted"
      />
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search wigs…"
        className="w-full border border-line-strong bg-pearl py-3 pl-10 pr-10 text-[0.92rem] text-cocoa outline-none placeholder:text-cocoa-muted/70 focus:border-cocoa"
      />
      {query ? (
        <button
          type="button"
          aria-label="Clear search"
          onClick={() => setQuery("")}
          className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center text-cocoa-muted transition-colors hover:text-cocoa"
        >
          <PiXLight size={16} />
        </button>
      ) : null}
    </label>
  );

  function handlePageChange(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const filterGroups = (
    <>
      <FilterGroup title="Texture">
        {textures.map((texture) => (
          <CheckRow
            key={texture}
            label={texture}
            checked={selectedTextures.includes(texture)}
            onChange={() =>
              setSelectedTextures((prev) => toggleValue(prev, texture))
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Length">
        {lengths.map((length) => (
          <CheckRow
            key={length}
            label={length}
            checked={selectedLengths.includes(length)}
            onChange={() =>
              setSelectedLengths((prev) => toggleValue(prev, length))
            }
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Lace type">
        {laces.map((lace) => (
          <CheckRow
            key={lace}
            label={lace}
            checked={selectedLaces.includes(lace)}
            onChange={() => setSelectedLaces((prev) => toggleValue(prev, lace))}
          />
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceRanges.map((range) => (
          <CheckRow
            key={range.id}
            label={range.label}
            checked={selectedPrices.includes(range.id)}
            onChange={() =>
              setSelectedPrices((prev) => toggleValue(prev, range.id))
            }
          />
        ))}
      </FilterGroup>
    </>
  );

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-8 sm:px-8 lg:px-10 lg:pb-32">
      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.22em] text-champagne-deep">
            Shop all
          </p>
          <h1 className="mt-3 font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-medium leading-[0.95] tracking-[-0.02em] text-cocoa">
            All wigs
          </h1>
          <p className="mt-3 text-[0.95rem] font-light text-cocoa-muted">
            {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            {activeCount > 0 ? " matching your search" : " available"}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cocoa lg:hidden"
          >
            <PiFadersLight size={16} />
            Filters
            {activeCount > 0 ? ` (${activeCount})` : ""}
          </button>

          <label className="relative inline-flex items-center gap-2 text-[0.78rem] text-cocoa-muted">
            <span className="hidden sm:inline">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value as SortOption)}
              className="appearance-none border border-line-strong bg-pearl py-2.5 pl-3 pr-9 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-cocoa outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to high</option>
              <option value="price-desc">Price: High to low</option>
            </select>
            <PiCaretDownLight
              size={14}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cocoa"
            />
          </label>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[260px_minmax(0,1fr)]">
        <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
          {searchField}
          <div className="flex items-center justify-between">
            <h2 className="font-heading text-2xl font-medium tracking-tight text-cocoa">
              Filters
            </h2>
            {activeCount > 0 && (
              <button
                type="button"
                onClick={clearFilters}
                className="text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted transition-colors hover:text-cocoa"
              >
                Clear
              </button>
            )}
          </div>
          {filterGroups}
        </aside>

        <div>
          {filtered.length === 0 ? (
            <div className="border border-line px-6 py-16 text-center">
              <p className="font-heading text-2xl font-medium text-cocoa">
                No pieces match those filters
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 text-[0.74rem] font-medium uppercase tracking-[0.16em] text-champagne-deep transition-opacity hover:opacity-70"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-12 xl:gap-x-6">
                {paginated.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="mt-14 flex justify-center">
                <Pagination
                  pageCount={pageCount}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          filtersOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Close filters"
          className={`absolute inset-0 bg-cocoa/40 transition-opacity duration-300 ${
            filtersOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setFiltersOpen(false)}
        />
        <div
          className={`absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-pearl px-5 pb-8 pt-6 shadow-xl transition-transform duration-300 ${
            filtersOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-2 flex items-center justify-between">
            <p className="font-heading text-2xl font-medium text-cocoa">
              Filters
            </p>
            <button
              type="button"
              aria-label="Close filters"
              onClick={() => setFiltersOpen(false)}
              className="grid size-10 place-items-center text-cocoa"
            >
              <PiXLight size={22} />
            </button>
          </div>
          {searchField}
          {activeCount > 0 && (
            <button
              type="button"
              onClick={clearFilters}
              className="mb-2 self-start text-[0.72rem] font-medium uppercase tracking-[0.16em] text-cocoa-muted"
            >
              Clear all
            </button>
          )}
          <div className="flex-1 overflow-y-auto">{filterGroups}</div>
          <button
            type="button"
            onClick={() => setFiltersOpen(false)}
            className="mt-6 w-full bg-cocoa py-3.5 text-[0.74rem] font-medium uppercase tracking-[0.18em] text-pearl"
          >
            Show {filtered.length} results
          </button>
        </div>
      </div>
    </div>
  );
}
