"use client"
import { Star } from "lucide-react"

import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface FilterSidebarProps {
    priceRange: number[]
    setPriceRange: (value: number[]) => void
    selectedCategories: string[]
    toggleCategory: (category: string) => void
    selectedBrands: string[]
    toggleBrand: (brand: string) => void
    selectedRating: number | null
    setSelectedRating: (rating: number | null) => void
    clearFilters: () => void
    categories: string[]
    brands: string[]
}

export function FilterSidebar({
                                  priceRange,
                                  setPriceRange,
                                  selectedCategories,
                                  toggleCategory,
                                  selectedBrands,
                                  toggleBrand,
                                  selectedRating,
                                  setSelectedRating,
                                  clearFilters,
                                  categories,
                                  brands,
                              }: FilterSidebarProps) {
    return (
        <div className="w-64 space-y-8">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Filters</h3>
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                    Clear all
                </Button>
            </div>

            <Separator />

            {/* Price Range */}
            <div className="space-y-4">
                <h4 className="font-medium">Price Range</h4>
                <div className="px-2">
                    <Slider defaultValue={[0, 200]} max={200} step={5} value={priceRange} onValueChange={setPriceRange} />
                    <div className="flex items-center justify-between mt-2">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                    </div>
                </div>
            </div>

            <Separator />

            {/* Categories */}
            <div className="space-y-4">
                <h4 className="font-medium">Categories</h4>
                <div className="space-y-2">
                    {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                            <Checkbox
                                id={`category-${category}`}
                                checked={selectedCategories.includes(category)}
                                onCheckedChange={() => toggleCategory(category)}
                            />
                            <label
                                htmlFor={`category-${category}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {category}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Brands */}
            <div className="space-y-4">
                <h4 className="font-medium">Brands</h4>
                <div className="space-y-2">
                    {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                            <Checkbox
                                id={`brand-${brand}`}
                                checked={selectedBrands.includes(brand)}
                                onCheckedChange={() => toggleBrand(brand)}
                            />
                            <label
                                htmlFor={`brand-${brand}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                {brand}
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Rating */}
            <div className="space-y-4">
                <h4 className="font-medium">Rating</h4>
                <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center space-x-2">
                            <Checkbox
                                id={`rating-${rating}`}
                                checked={selectedRating === rating}
                                onCheckedChange={() => setSelectedRating(selectedRating === rating ? null : rating)}
                            />
                            <label
                                htmlFor={`rating-${rating}`}
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                            >
                                {Array(rating)
                                    .fill(null)
                                    .map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                                    ))}
                                {Array(5 - rating)
                                    .fill(null)
                                    .map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-muted-foreground" />
                                    ))}
                                <span className="ml-1">& Up</span>
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
