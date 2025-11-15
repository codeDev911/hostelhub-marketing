"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Filter, Loader2, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import HostelCard from "@/components/hostel-card";
import { fetchApi } from "@/lib/api";
import HeroSearch from "@/components/hero-search";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectSeparator, SelectTrigger } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { mockCities } from "@/lib/mock-data";
import { SelectItemIndicator } from "@radix-ui/react-select";

export default function HostelsPage() {
  const searchParams = useSearchParams();
  const [city,setCity] = useState(searchParams.get("city") || "")
  const [name,setName] = useState(searchParams.get("name") || "")
  const [area,setArea] = useState(searchParams.get("area") || "")
  const [gender,setGender] = useState(searchParams.get("gender") || "all");
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedGender, setSelectedGender] = useState(gender);
  const [sortBy, setSortBy] = useState("rating");
  const [filteredHostels, setFilteredHostels] = useState([] as any);

  const filtered_Hostels = useMemo(async () => {
    setLoading(true)
    let res = await fetchApi({
      url: "/api/hostels",
      method: "GET",
      headers: {},
    }).finally(() => {
      setLoading(false);
    });

    let results: any = await res.json();

    if (city) {
      results = results.filter((h: any) => h.city === city);
    }

    if (name) {
      const queryWords = name.toLowerCase().split(" ");

      results = results.filter((h:any) => {
        const hostelName = h.name.toLowerCase();
        return queryWords.every(word => hostelName.includes(word));
      });
    }

    if (area) {
      results = results.filter((h: any) => h.area === area);
    }

    if (selectedGender !== "all") {
      results = results.filter((h: any) => h.gender === selectedGender);
    }

    results = results.filter(
      (h: any) =>
        h.pricePerMonth >= priceRange[0] && h.pricePerMonth <= priceRange[1]
    );

    // Sort
    if (sortBy === "rating") {
      results.sort((a: any, b: any) => b.rating - a.rating);
    } else if (sortBy === "price-low") {
      results.sort((a: any, b: any) => a.pricePerMonth - b.pricePerMonth);
    } else if (sortBy === "price-high") {
      results.sort((a: any, b: any) => b.pricePerMonth - a.pricePerMonth);
    } else if (sortBy === "available") {
      results.sort((a: any, b: any) => b.availableSeats - a.availableSeats);
    }

    setFilteredHostels(results);
  }, [city, area, selectedGender, priceRange, sortBy]);

  if (!filteredHostels) {
    return <>None</>;
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="md:max-w-7xl w-full p-4 mx-auto  md:py-8 py-4 grow">
        {/* Filters Section */}
        <div className="grid relative grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="bg-primary-foreground border border-border rounded-sm p-6 sticky top-24">
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <Filter className="w-5 h-5" />
                Filters
              </h3>

              {/* Gender Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">For</h4>
                <div className="space-y-2">
                  {["all", "boys", "girls"].map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={g}
                        checked={selectedGender === g}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-foreground capitalize">
                        {g === "all" ? "All" : g}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-primary mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="0"
                      max="15000"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([
                          Number.parseInt(e.target.value),
                          priceRange[1],
                        ])
                      }
                      className="w-full px-2 py-1 border border-border rounded-sm text-sm"
                      placeholder="Min"
                    />
                    <span className="text-muted-foreground">-</span>
                    <input
                      type="number"
                      min="0"
                      max="15000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0],
                          Number.parseInt(e.target.value),
                        ])
                      }
                      className="w-full px-2 py-1 border border-border rounded-sm text-sm"
                      placeholder="Max"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Rs {priceRange[0]} - Rs {priceRange[1]}
                  </p>
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h4 className="font-semibold text-primary mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-sm text-sm bg-primary-foreground"
                >
                  <option value="rating">Highest Rating</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="available">Most Available</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Section */}

          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                {area && `Hostels in ${area}, `}
                {city ? `${city}` : "All Hostels"}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Found {filteredHostels?.length || 0} hostel
                {filteredHostels.length !== 1 ? "s" : ""}
              </p>
            </div>

              <Card>
                  <CardHeader>
                    <CardTitle>Smart Search</CardTitle>
                    <CardDescription>Search hostels/ accomodation / appartments</CardDescription>
                  </CardHeader>
                <CardContent className="grid md:grid-cols-5 gap-4">
                     <div className="space-y-2 w-full md:col-span-3">
                      <Label htmlFor="search">Search  </Label>
                   <form onSubmit={(e)=>{
                    e.preventDefault()
                    location.assign(`/hostels?city=${city||""}&area${area||""}&name=${name||""}`)
                   }} className="flex space-x-1">
                       <Input required value={name} onChange={(e)=>{
                        setName(e.currentTarget.value)
                      }} type="text"  placeholder="Search hostels by name"/>
                      <Button type="submit" className="bg-accent hover:bg-accent/80 cursor-pointer"><SearchIcon className="w-5"/></Button>
                   </form>
                     </div>
                     <div className="flex space-x-4">
                      <div className="space-y-2 w-full">
                      <Label htmlFor="city">City </Label>
                       <Select  onValueChange={(e)=> setCity(e)}>
                        <SelectTrigger>{city || "select city"}</SelectTrigger>
                        <SelectContent className="w-full">
                          <h4 className="text-sm font-bold p-1">Verified cities</h4>
                          <SelectSeparator/>
                         {mockCities.map((cty:any,indx:any)=>(
                           <SelectItem value={cty.name}   key={indx}>{cty.name}</SelectItem> 
                         ))}
                        </SelectContent>
                      </Select>
                     </div>
                     <div className="space-y-2 w-full">
                      <Label htmlFor="area">Area </Label>
                       <Select onValueChange={(e)=> setArea(e)}>
                        <SelectTrigger>{area || "select area"}</SelectTrigger>
                        <SelectContent className="w-full">
                          <h4 className="text-sm font-bold p-1">Verified areas</h4>
                          <SelectSeparator/>
                         {mockCities?.filter((ct:any)=> city === ct.name)[0]?.areas?.map((area:any,index:any)=>(
                           <SelectItem value={area} key={index}>{area}</SelectItem> 
                         ))}
                        </SelectContent>
                      </Select>
                     </div> 
                     </div>
                </CardContent>
              </Card>

            <br />
            {loading ? (
              <div className="flex w-full  space-x-2  items-center justify-center min-h-[20vh]">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
                <p className="text-sm text-primary font-semibold">Fetching hostels...</p>
              </div>
            ) : (
              <>
                {" "}
                {filteredHostels.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {filteredHostels.map((hostel: any) => (
                      <HostelCard key={hostel.id} hostel={hostel} />
                    ))}
                  </div>
                ) : (
                  <div className="bg-primary-foreground border border-border rounded-sm p-8 sm:p-12 text-center">
                    <p className="text-base sm:text-lg text-muted-foreground mb-4">
                      No hostels found matching your criteria
                    </p>
                    <Link href="/">
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        Back to Home
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
