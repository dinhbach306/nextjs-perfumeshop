import Link from "next/link"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
    id: number
    name: string
    price: number
    rating: number
    category: string
    description: string
    image: undefined  | string
    isNew?: boolean
    isBestSeller?: boolean
}

export function ProductCard({
                                id,
                                name,
                                price,
                                rating,
                                category,
                                description,
                                image,
                                isNew,
                                isBestSeller,
                            }: ProductCardProps) {

    return (
        <Link href={`/products/${id}`} className="group">
            <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
                <div className="relative">
                    <div className="aspect-square relative overflow-hidden bg-slate-50">
                        <Image
                            src={image || "/placeholder.svg"}
                            alt={name}
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                        />
                    </div>
                    {(isNew || isBestSeller) && (
                        <div className="absolute top-2 left-2 flex flex-col gap-1">
                            {isNew && <Badge variant="gold">New</Badge>}
                            {isBestSeller && <Badge variant="gold">Best Seller</Badge>}
                        </div>
                    )}
                </div>
                <CardContent className="p-4 flex-grow">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{category}</span>
                        <div className="flex items-center">
                            {Array(rating)
                                .fill(null)
                                .map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-amber-500 text-amber-500" />
                                ))}
                            {Array(5 - rating)
                                .fill(null)
                                .map((_, i) => (
                                    <Star key={i} className="h-3 w-3 text-muted-foreground" />
                                ))}
                        </div>
                    </div>
                    <h3 className="font-medium">{name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <span className="font-bold">${price}</span>
                    <Button size="sm" className="bg-amber-600 hover:bg-amber-700">
                        View
                    </Button>
                </CardFooter>
            </Card>
        </Link>
    )
}
