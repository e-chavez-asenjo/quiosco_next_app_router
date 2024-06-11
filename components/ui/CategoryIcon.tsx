"use client"
import Image from "next/image"
import { Category } from "@prisma/client"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category: Category
}
export default function CategoryIcon({ category }: CategoryIconProps) {

    const params = useParams<{category: string}>()
  return (
    <div className={`${category.slug === params.category ? 'bg-amber-400' : ''} flex items-center gap-4 w-full border-t border-gray-200 p-1`}>
        <div className="h-16 w-16 relative">
            <Image
                fill
                src={`/icon_${category.slug}.svg`}
                alt="Imagen Categoria"
            
            />
        </div>

        <Link 
            className="text-xl font-bold"
            href={`/order/${category.slug}`}
            >{category.name}
        </Link>

    </div>
  )
}
